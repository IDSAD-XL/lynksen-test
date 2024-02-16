import React from 'react'
import { motion } from 'framer-motion'

export interface ITextTicker {
  text: string
}

const TextTicker: React.FC<ITextTicker> = ({ text }) => {
  return (
    <motion.div
      transition={{
        duration: 0.5,
      }}
      className="relative flex h-[150px] w-screen overflow-hidden md:h-[400px]"
    >
      <motion.div
        variants={{
          visible: {
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.3,
            },
          },
          hidden: {
            y: '100%',
            transition: {
              delay: 0,
              duration: 0.3,
            },
          },
        }}
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        className="absolute flex h-full w-full gap-[100px]"
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
          className="absolute left-0 flex h-full items-end gap-[100px] px-[30px] text-[150px] font-bold leading-[1em] tracking-tighter text-white md:text-[400px]"
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
          className="absolute left-0 flex h-full items-end gap-[100px] px-[30px] text-[150px] font-bold leading-[1em] tracking-tighter text-white md:text-[400px]"
        >
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default TextTicker
