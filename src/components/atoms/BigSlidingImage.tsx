import React from 'react'
import { motion } from 'framer-motion'

interface IBigSlidingImage {
  image: string
  isActive: boolean
  handleClick: () => void
}

const BigSlidingImage: React.FC<IBigSlidingImage> = ({
  isActive,
  image,
  handleClick,
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
        handleClick()
      }}
      className="relative z-30 h-full flex-shrink-0"
    >
      <div className="relative h-full w-full overflow-hidden">
        <motion.img
          initial={{
            scale: 1,
            rotate: 0,
          }}
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
          className="absolute right-[-5%] min-h-full min-w-[110%] origin-center object-cover object-center"
        />
      </div>
    </motion.div>
  )
}

export default BigSlidingImage
