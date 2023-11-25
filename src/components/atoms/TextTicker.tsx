import React from 'react'
import { motion } from 'framer-motion'

export interface ITextTicker {
  text: string
  state?: 'visible' | 'hidden'
}

const TextTicker: React.FC<ITextTicker> = ({ text, state = 'visible' }) => {
  return (
    <motion.div
      animate={state}
      transition={{
        duration: 0.5,
      }}
      className="flex w-screen h-[400px] relative overflow-hidden"
    >
      <motion.div
        variants={{
          visible: {
            y: 0,
            transition: {
              delay: 1,
              duration: 0.5,
            },
          },
          hidden: {
            y: '100%',
            transition: {
              delay: 0,
              duration: 0.5,
            },
          },
        }}
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        className="absolute flex gap-[100px] h-full w-full"
      >
        <motion.div
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            x: {
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            },
          }}
          className="flex absolute items-end h-full leading-[1em] px-[30px] left-0 gap-[100px] text-[400px] text-white tracking-tighter font-bold"
        >
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
        <motion.div
          animate={{
            x: ['50%', '-50%'],
          }}
          transition={{
            delay: 10,
            x: {
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            },
          }}
          className="flex px-[30px] items-end h-full absolute leading-[1em] left-0 gap-[100px] text-[400px] text-white tracking-tighter font-bold"
        >
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default TextTicker
