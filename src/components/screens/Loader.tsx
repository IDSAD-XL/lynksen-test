import React, { useEffect } from 'react'
import { Image as CatImageType } from '@thatapicompany/thecatapi/dist/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useAppDispatch } from '@hooks/redux'
import { resetAppState } from '@redux/actions/appActions'

export interface ILoader {
  images: CatImageType[]
}

const Loader: React.FC<ILoader> = ({ images }) => {
  const appDispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      resetAppState(appDispatch)
    }, 7000)
  }, [appDispatch])

  return (
    <div className="main-page-perspective absolute left-0 top-0 flex min-h-screen w-screen items-center justify-center overflow-hidden bg-dark">
      <motion.div
        initial={{
          y: '100%',
        }}
        animate={{
          y: ['100%', '0%', '-100%'],
          transition: {
            duration: 2,
            ease: 'easeInOut',
          },
        }}
        className="absolute z-20 h-full w-full origin-top bg-white"
      />
      <motion.div
        initial={{
          x: '-100%',
        }}
        animate={{
          x: ['-150%', '0%', '0%', '150%'],
          transition: {
            delay: 2,
            ease: 'easeInOut',
            duration: 5,
          },
        }}
        className="z-0 flex justify-center gap-[40px]"
      >
        {images.map((image, idx) => {
          const rotateValue = -5 * (images.length - idx)
          return (
            <motion.div
              initial={{
                rotate: rotateValue,
              }}
              animate={{
                rotate: [rotateValue, 0, 0, -rotateValue],
                transition: {
                  delay: 2.3 + (images.length - idx) * 0.05,
                  ease: 'easeInOut',
                  duration: 4,
                },
              }}
              key={image.id}
              className="loader-image relative h-[300px] w-[200px]"
            >
              <Image
                src={image.url}
                alt={image.id}
                className="min-h-full min-w-full object-cover object-center"
                fill={true}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Loader
