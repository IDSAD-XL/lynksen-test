import { motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import { Image as CatsImageType } from '@thatapicompany/thecatapi/dist/types'
import Image from 'next/image'
import { useAppDispatch } from '@hooks/redux'
import { changeAppState, setActiveItem } from '@redux/actions/appActions'
import BigSlidingImage from '@components/atoms/BigSlidingImage'
import useSwipe from '@hooks/useSwipe'

export interface ISlider {
  items: CatsImageType[]
}

interface ISliderColumn {
  items: CatsImageType[]
  isActive: boolean
  handleClickOnItem: (item: CatsImageType) => void
  wrapperClasses?: string
}

const SliderColumn: React.FC<ISliderColumn> = ({
  items,
  isActive,
  handleClickOnItem,
  wrapperClasses,
}) => {
  return (
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
      className={`relative flex w-[50%] flex-col gap-y-[10px] md:gap-y-[30px] ${wrapperClasses}`}
    >
      {items
        .filter((_, idx) => !(idx % 2))
        .map((catItem) => (
          <div
            onClick={() => {
              handleClickOnItem(catItem)
            }}
            key={catItem.id}
            className="relative h-[150px] w-full cursor-pointer overflow-hidden md:h-[275px] lg:h-[400px] xxl:h-[600px]"
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
  )
}

const Slider: React.FC<ISlider> = ({ items }) => {
  const [sliderScrollY, setSliderScrollY] = useState(2000)
  const sliderRef = React.useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = useState(false)
  const appDispatch = useAppDispatch()
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const swiperUpwards = useCallback(() => {
    const maxVal = sliderRef.current?.scrollHeight
    if (!maxVal) return
    setSliderScrollY((prev) => {
      if (prev - 100 <= -maxVal) {
        return prev
      }
      return prev - 300
    })
  }, [])

  const swiperDownwards = useCallback(() => {
    setSliderScrollY((prev) => {
      if (prev + 100 > 400) {
        return prev
      }
      return prev + 300
    })
  }, [])

  const swipeBind = useSwipe({
    onUp: () => {
      swiperUpwards()
    },
    onDown: () => {
      swiperDownwards()
    },
    onRight: () => {},
    onLeft: () => {},
  })

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
    setTimeout(() => {
      if (window.innerWidth < 768) {
        setSliderScrollY(100)
      } else {
        setSliderScrollY(500)
      }
    }, 1000)
  }, [])

  return (
    <div className="relative h-[50vh] md:h-screen">
      <div className="absolute flex h-[110%] w-full justify-center">
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
        className="flex w-[200px] justify-between gap-x-[15px] overflow-hidden md:w-[400px] md:gap-x-[30px] lg:w-[500px] lg:gap-x-[50px]  dsk:w-[700px] xxl:w-[800px]"
        {...swipeBind()}
      >
        <SliderColumn
          items={items.filter((_, idx) => !(idx % 2))}
          isActive={isActive}
          handleClickOnItem={handleClickOnItem}
        />
        <SliderColumn
          items={items.filter((_, idx) => idx % 2)}
          isActive={isActive}
          handleClickOnItem={handleClickOnItem}
          wrapperClasses="mt-[75px] md:mt-[150px] lg:mt-[200px] xxl:mt-[300px]"
        />
      </motion.div>
    </div>
  )
}

export default Slider
