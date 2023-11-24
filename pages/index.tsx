import React from 'react'
import MainPage from '@components/pages/MainPage'
import { mainPage } from '@mock/mainPage'

const Index = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <MainPage {...mainPage} />
    </div>
  )
}

export default Index
