import { motion } from 'framer-motion'
import React from 'react'

export interface ISlideUpLineProps {
  text?: string
  children?: React.ReactNode
  classPrefix: string
}

const SlideUpLine: React.FC<ISlideUpLineProps> = ({
  text,
  children,
  classPrefix,
}) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          y: '100%',
        }}
        className={`${classPrefix}-slide-up-text`}
      >
        {children && <>{children}</>}
        {!children && text && <>{text}</>}
      </motion.div>
    </div>
  )
}

export default SlideUpLine
