import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SlideUpLine from '@components/atoms/SlideUpLine'

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
        className="fixed left-0 top-0 z-[25] hidden h-screen w-[60px] justify-between border-r-1 border-primary bg-dark md:flex"
      >
        <div className="flex h-[100px] w-full items-center justify-center md:h-[150px]">
          <button className="flex w-[30px] flex-col gap-[6px] bg-transparent">
            <span className="h-[2px] w-full bg-white"></span>
            <span className="h-[2px] w-full bg-white"></span>
            <span className="h-[2px] w-full bg-white"></span>
          </button>
        </div>
      </motion.div>
      <div className="fixed z-20 flex h-[100px] w-full items-center justify-between gap-[10px] pl-[25px] pr-[25px] text-4 uppercase text-white md:h-[150px] md:pl-[150px] md:pr-[70px]">
        <div className="flex w-full justify-between gap-[10px] md:w-auto md:justify-start md:gap-[50px]">
          <SlideUpLine classPrefix="header-item">
            <Link href={'#'}>About</Link>
          </SlideUpLine>
          <SlideUpLine classPrefix="header-item">
            <Link href={'#'}>Point</Link>
          </SlideUpLine>
          <SlideUpLine classPrefix="header-item">
            <Link href={'#'}>Journal</Link>
          </SlideUpLine>
          <div className="block md:hidden">
            <SlideUpLine classPrefix="header-item">
              <Link href={'#'}>Contact</Link>
            </SlideUpLine>
          </div>
        </div>
        <div className="hidden md:block">
          <SlideUpLine classPrefix="header-item">
            <Link href={'#'}>Contact</Link>
          </SlideUpLine>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
