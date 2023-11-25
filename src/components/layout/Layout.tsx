import React from 'react'
import { motion } from 'framer-motion'

export interface ILayout {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <motion.div
        initial={{
          x: '-100%',
        }}
        animate={{
          x: '0%',
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: 'easeInOut',
        }}
        className="h-screen fixed left-0 top-0 w-[50px] bg-dark border-r-1 border-primary z-20"
      />
      {children}
    </div>
  )
}

export default Layout
