import React from 'react'
import TextTicker from '@components/atoms/TextTicker'
import Slider from '@components/molecules/Slider'
import { useGetRandomCatsQuery } from '@redux/reducers/catsSlice'

export interface IMainPage {}

const MainPage: React.FC<IMainPage> = ({}) => {
  const { data } = useGetRandomCatsQuery(10)

  return (
    <div className="w-screen min-h-screen flex relative main-page-perspective bg-dark overflow-hidden">
      <div className="h-screen fixed left-0 top-0 w-[50px] bg-dark border-r-1 border-primary z-20"></div>
      <div className="absolute w-screen h-screen overflow-hidden">
        <div className="z-0 flex absolute items-end top-[100px] overflow-hidden">
          <TextTicker text={'DOONBERG'} state={'visible'} />
        </div>
      </div>
      <div className="absolute right-[100px] translate-y-[-5%] h-full z-20 rotate-[-8deg]">
        {data && <Slider items={data} />}
      </div>
      <div className="pl-[150px] flex flex-col justify-end pb-[100px]">
        <div className="flex flex-col text-white text-10 leading-[1em] tracking-tighter">
          <div className="uppercase">nicolas colsaerts</div>
          <div className="uppercase">commisioned by dunning golf</div>
        </div>
        <div className="flex flex-col text-white text-4 leading-[1em] tracking-tighter mt-[1rem]">
          <div className="uppercase">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
          <div className="uppercase">
            Necessitatibus nostrum quae quas saepe sunt?
          </div>
        </div>
        <div className="flex gap-[20px] text-4 text-white mt-[4rem]">
          <div>Instagram</div>
          <div>Facebook</div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
