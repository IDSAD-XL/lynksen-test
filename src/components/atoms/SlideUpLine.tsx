import { motion } from 'framer-motion'
import React from 'react'

export interface ISlideUpLineProps {
  text: string
  classPrefix: string
}

const SlideUpLine: React.FC<ISlideUpLineProps> = ({ text, classPrefix }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          y: '100%',
        }}
        className={`${classPrefix}-slide-up-text`}
      >
        {text}
      </motion.div>
    </div>
  )
}

export default SlideUpLine
