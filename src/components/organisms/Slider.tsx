import { motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import { Image as CatsImageType } from '@thatapicompany/thecatapi/dist/types'
import Image from 'next/image'
import { useAppDispatch } from '@hooks/redux'
import { changeAppState, setActiveItem } from '@redux/actions/appActions'
import BigSlidingImage from '@components/atoms/BigSlidingImage'

export interface ISlider {
  items: CatsImageType[]
}

const Slider: React.FC<ISlider> = ({ items }) => {
  const [sliderScrollY, setSliderScrollY] = useState(0)
  const sliderRef = React.useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = useState(false)
  const appDispatch = useAppDispatch()
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const handleClickOnBigImage = useCallback(() => {
    changeAppState(appDispatch, 'loading')
  }, [appDispatch])

  const handleClickOnItem = useCallback(
    (item: CatsImageType) => {
      setActiveImage(item.url)
      setActiveItem(appDispatch, item.id)
      setIsActive(true)
    },
    [appDispatch]
  )

  const handleScroll = useCallback((e: React.WheelEvent) => {
    const maxVal = sliderRef.current?.scrollHeight
    if (!maxVal) return
    if (e.deltaY > 0) {
      setSliderScrollY((prev) => {
        if (prev - 200 <= -maxVal) {
          return prev
        }
        return prev - 100
      })
    } else {
      setSliderScrollY((prev) => {
        if (prev + 100 > 200) {
          return prev
        }
        return prev + 100
      })
    }
  }, [])

  useEffect(() => {
    setSliderScrollY(500)
  }, [])

  return (
    <div className="relative h-screen">
      <div className="absolute flex h-[120%] w-full justify-center">
        <BigSlidingImage
          image={activeImage ?? ''}
          isActive={isActive}
          handleClick={handleClickOnBigImage}
        />
      </div>
      <motion.div
        ref={sliderRef}
        initial={{
          y: '100%',
        }}
        animate={{
          y: `${sliderScrollY}px`,
        }}
        transition={{
          type: 'spring',
          stiffness: 20,
        }}
        onWheel={handleScroll}
        className="flex w-[600px] justify-between gap-x-[50px] overflow-hidden"
      >
        <motion.div
          variants={{
            initial: {
              x: '0%',
            },
            hidden: {
              x: '-100%',
            },
          }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: 'easeOut',
          }}
          animate={isActive ? 'hidden' : 'initial'}
          className="relative flex w-[50%] flex-col gap-y-[30px]"
        >
          {items
            .filter((_, idx) => idx % 2)
            .map((catItem) => (
              <div
                onClick={() => {
                  handleClickOnItem(catItem)
                }}
                key={catItem.id}
                className="relative h-[400px] w-full cursor-pointer overflow-hidden"
              >
                <Image
                  src={catItem.url}
                  fill={true}
                  alt=""
                  className="h-full object-cover"
                />
              </div>
            ))}
        </motion.div>
        <motion.div
          variants={{
            initial: {
              x: '0%',
            },
            hidden: {
              x: '100%',
            },
          }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: 'easeOut',
          }}
          animate={isActive ? 'hidden' : 'initial'}
          className="relative mt-[150px] flex w-[50%] flex-col gap-y-[30px]"
        >
          {items
            .filter((_, idx) => !(idx % 2))
            .map((catItem) => (
              <div
                onClick={() => {
                  handleClickOnItem(catItem)
                }}
                key={catItem.id}
                className="relative h-[400px] w-full cursor-pointer overflow-hidden"
              >
                <Image
                  src={catItem.url}
                  fill={true}
                  alt=""
                  className="h-full object-cover"
                />
              </div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slider
