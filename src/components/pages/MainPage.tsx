import React from 'react'
import TextTicker from '@components/atoms/TextTicker'
import Slider from '@components/molecules/Slider'

export interface IMainPage {}

const MainPage: React.FC<IMainPage> = ({}) => {
  return (
    <div className="w-screen min-h-screen flex relative main-page-perspective bg-dark overflow-hidden">
      <div className="h-screen fixed left-0 top-0 w-[50px] bg-dark border-r-1 border-primary z-20"></div>
      <div className="absolute w-screen h-screen overflow-hidden">
        <div className="z-0 flex absolute items-end top-[100px] overflow-hidden">
          <TextTicker text={'DOONBERG'} state={'visible'} />
        </div>
      </div>
      <div className="absolute right-[100px] translate-y-[-5%] h-full z-20 rotate-[-8deg]">
        <Slider />
      </div>
    </div>
  )
}

export default MainPage
