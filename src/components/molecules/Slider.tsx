import { motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import { Image as CatsImageType } from '@thatapicompany/thecatapi/dist/types'
import Image from 'next/image'
import { useAppDispatch } from '@hooks/redux'
import { setActiveItem } from '@redux/actions/appActions'
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

  const handleClickOnItem = useCallback((item: CatsImageType) => {
    setActiveImage(item.url)
    setActiveItem(appDispatch, item.id)
    setIsActive(true)
  }, [])

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
    setSliderScrollY(400)
  }, [])

  return (
    <div className="relative">
      <div className="absolute flex justify-center w-full h-[120%]">
        {activeImage && (
          <BigSlidingImage
            image={activeImage}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        )}
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
        className="flex gap-x-[50px] w-[600px] justify-between"
      >
        <motion.div
          variants={{
            initial: {
              width: '50%',
            },
            hidden: {
              width: 0,
            },
          }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: 'easeOut',
          }}
          animate={isActive ? 'hidden' : 'initial'}
          className="flex relative flex-col w-[50%] gap-y-[30px]"
        >
          {items
            .filter((_, idx) => idx % 2)
            .map((catItem) => (
              <div
                onClick={() => {
                  handleClickOnItem(catItem)
                }}
                key={catItem.id}
                className="w-full h-[400px] relative overflow-hidden cursor-pointer"
              >
                <Image
                  src={catItem.url}
                  fill={true}
                  alt=""
                  className="object-cover h-full"
                />
              </div>
            ))}
        </motion.div>
        <motion.div
          variants={{
            initial: {
              width: '50%',
            },
            hidden: {
              width: 0,
            },
          }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: 'easeOut',
          }}
          animate={isActive ? 'hidden' : 'initial'}
          className="flex relative flex-col w-[50%] gap-y-[30px] mt-[150px]"
        >
          {items
            .filter((_, idx) => !(idx % 2))
            .map((catItem) => (
              <div
                onClick={() => {
                  handleClickOnItem(catItem)
                }}
                key={catItem.id}
                className="w-full h-[400px] relative overflow-hidden cursor-pointer"
              >
                <Image
                  src={catItem.url}
                  fill={true}
                  alt=""
                  className="object-cover h-full"
                />
              </div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slider
