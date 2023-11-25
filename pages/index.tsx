import React, { useMemo } from 'react'
import MainPage from '@components/screens/MainPage'
import { mainPage } from '@mock/mainPage'
import {
  useGetCatByIdQuery,
  useGetRandomCatsQuery,
} from '@redux/reducers/catsSlice'
import { useAppSelector } from '@hooks/redux'
import Loader from '@components/screens/Loader'
import { AnimatePresence, motion } from 'framer-motion'

const Index = () => {
  const appState = useAppSelector((state) => state.appSlice)

  const randomCatsQuery = useGetRandomCatsQuery(10)
  const activeCatsQuery = useGetCatByIdQuery(appState.activeId, {
    skip: !appState.activeId,
  })

  const textsBlockContent = useMemo(() => {
    if (!appState.activeId) return mainPage.textsBlock
    else if (activeCatsQuery.data?.breeds?.[0]) {
      return {
        keyName: activeCatsQuery.data.id,
        title: activeCatsQuery.data?.breeds?.[0].name,
        description: activeCatsQuery.data?.breeds?.[0].description,
        hasSocials: false,
        itemsClassPrefix: 'cat',
      }
    } else {
      return mainPage.textsBlock
    }
  }, [activeCatsQuery.data, appState.activeId])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <AnimatePresence>
        {appState.state === 'idle' &&
          randomCatsQuery.data &&
          textsBlockContent && (
            <motion.div
              key={'main-page'}
              initial={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 1,
                },
              }}
              className="main-page-perspective relative z-10 flex min-h-screen w-screen overflow-hidden bg-dark"
            >
              <MainPage
                images={randomCatsQuery.data}
                textsBlock={textsBlockContent}
                textTicker={mainPage.textTicker}
              />
            </motion.div>
          )}
      </AnimatePresence>
      {appState.state === 'loading' && randomCatsQuery.data && (
        <Loader images={randomCatsQuery.data} />
      )}
    </div>
  )
}

export default Index
