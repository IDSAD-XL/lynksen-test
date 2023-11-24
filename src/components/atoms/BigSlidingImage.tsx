import React from 'react'
import { motion } from 'framer-motion'

interface IBigSlidingImage {
  image: string
  isActive: boolean
  setIsActive: (val: boolean) => void
}

const BigSlidingImage: React.FC<IBigSlidingImage> = ({
  isActive,
  image,
  setIsActive,
}) => {
  return (
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
        delay: 0.04,
        duration: 0.8,
        ease: 'easeOut',
      }}
      animate={isActive ? 'initial' : 'hidden'}
      onClick={() => {
        setIsActive(false)
      }}
      className="flex-shrink-0 h-full z-30 relative"
    >
      {image && (
        <div className="w-full h-full relative overflow-hidden">
          <motion.img
            variants={{
              initial: {
                scale: 1,
                rotate: 0,
              },
              hidden: {
                scale: 1.2,
                rotate: -5,
                transition: {
                  delay: 0.8,
                },
              },
            }}
            animate={isActive ? 'initial' : 'hidden'}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            src={image}
            alt={''}
            className="min-h-[120%] min-w-[120%] right-[-10%] object-cover object-center origin-center absolute"
          />
        </div>
      )}
    </motion.div>
  )
}

export default BigSlidingImage
