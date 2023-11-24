import React from 'react'
import Scene, { IScene } from '@components/organisms/Scene'

export interface IMainPage {
  scene: IScene
}

const MainPage: React.FC<IMainPage> = ({ scene }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative main-page-perspective">
      <div className="absolute w-screen h-screen">
        <Scene {...scene} />
      </div>
    </div>
  )
}

export default MainPage
