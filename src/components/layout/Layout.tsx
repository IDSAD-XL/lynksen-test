import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export interface ILayout {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="h-full w-full">
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
        className="fixed left-0 top-0 z-20 h-screen w-[60px] border-r-1 border-primary bg-dark"
      ></motion.div>
      <div className="fixed z-20 flex h-[150px] w-full items-center justify-between pl-[90px] pr-[70px] text-4 uppercase text-white">
        <div className="flex gap-[30px]">
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Point</Link>
          <Link href={'#'}>Journal</Link>
        </div>
        <div>
          <Link href={'#'}>Contact</Link>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
