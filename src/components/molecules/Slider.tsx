import { motion } from 'framer-motion'
import React, { useCallback, useState } from 'react'

const Slider = () => {
  const [sliderScrollY, setSliderScrollY] = useState(0)
  const sliderRef = React.useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = useState(false)

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

  return (
    <div className="relative">
      <div className="absolute flex justify-center w-full h-[120%]">
        <motion.div
          variants={{
            initial: {
              width: '100%',
            },
            hidden: {
              width: 0,
            },
          }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: 'easeOut',
          }}
          animate={isActive ? 'initial' : 'hidden'}
          onClick={() => {
            setIsActive(false)
          }}
          className="flex-shrink-0 bg-green-600 h-full z-30"
        ></motion.div>
      </div>
      <motion.div
        ref={sliderRef}
        animate={{
          y: `${sliderScrollY}px`,
        }}
        transition={{
          type: 'spring',
          stiffness: 20,
        }}
        onWheel={handleScroll}
        className="flex w-[500px] justify-between"
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
            duration: 0.5,
            ease: 'easeOut',
          }}
          animate={isActive ? 'hidden' : 'initial'}
          className="flex relative flex-col w-[50%] gap-y-[40px] pr-[20px]"
        >
          {[...Array(5)].map((_, i) => (
            <div
              onClick={() => {
                setIsActive(true)
              }}
              key={i}
              className="bg-red-500 w-full h-[300px]"
            ></div>
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
            duration: 0.5,
            ease: 'easeOut',
          }}
          animate={isActive ? 'hidden' : 'initial'}
          className="flex relative flex-col w-[50%] gap-y-[40px] pl-[20px] pt-[150px]"
        >
          {[...Array(5)].map((_, i) => (
            <div
              onClick={() => {
                setIsActive(true)
              }}
              key={i}
              className="bg-red-500 w-full h-[300px]"
            ></div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slider
