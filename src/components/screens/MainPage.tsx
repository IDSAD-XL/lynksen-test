import React, { useEffect, useMemo } from 'react'
import TextTicker from '@components/atoms/TextTicker'
import Slider from '@components/organisms/Slider'
import { Image } from '@thatapicompany/thecatapi/dist/types'
import { animate, AnimatePresence, stagger } from 'framer-motion'
import TextLinesBlock, {
  ITextLinesBlock,
} from '@components/molecules/TextLinesBlock'
import { mainPage } from '@mock/mainPage'
import { useAppSelector } from '@hooks/redux'
import SlideUpLine from '@components/atoms/SlideUpLine'
import Layout from '@components/layout/Layout'

export interface IMainPage {
  images?: Image[]
  textsBlock?: ITextLinesBlock
}

const MainPage: React.FC<IMainPage> = ({ images, textsBlock }) => {
  const appState = useAppSelector((state) => state.appSlice)

  const activeIndex = useMemo(() => {
    if (!images) return
    return images?.findIndex((item) => item.id === appState.activeId)
  }, [images, appState.activeId])

  useEffect(() => {
    if (textsBlock?.keyName === 'default') {
      animate([
        [
          '.default-slide-up-text',
          { y: '0' },
          {
            ease: 'easeOut',
            duration: 0.6,
            delay: stagger(0.1, { startDelay: 1 }),
          },
        ],
      ])
    } else {
      animate([])
      animate([
        [
          '.default-slide-up-text',
          { y: '100%' },
          { ease: 'easeOut', duration: 0.6, delay: stagger(0.1) },
        ],
        [
          '.big-cat-title-slide-up-text',
          { y: '0' },
          { ease: 'easeOut', duration: 0.6 },
        ],
        [
          '.cat-slide-up-text',
          { y: '0' },
          { ease: 'easeOut', duration: 0.6, delay: stagger(0.1) },
        ],
      ])
    }
  }, [textsBlock])

  return (
    <Layout>
      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="absolute top-[100px] z-0 flex h-[400px] w-full items-end overflow-hidden">
          <AnimatePresence>
            {!appState.activeId && (
              <TextTicker key={'default'} text={'DOONBERG'} />
            )}
            {appState.activeId && activeIndex && (
              <div className="absolute left-0 flex h-[400px] w-screen gap-[100px] overflow-hidden pl-[150px] text-[400px] font-bold leading-[1em] tracking-tighter text-white">
                <SlideUpLine
                  classPrefix={'big-cat-title'}
                  key={`cat`}
                  text={`${activeIndex}`}
                />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute right-[100px] z-20 h-full translate-y-[-5%] rotate-[-8deg] xxl:right-[400px]">
        {images && <Slider items={images} />}
      </div>
      <div className="absolute bottom-[40px] z-10 flex flex-col justify-end pb-[100px] pl-[150px] xxl:bottom-[100px]">
        {mainPage.textsBlock && (
          <TextLinesBlock
            key={'default'}
            {...mainPage.textsBlock}
            itemsClassPrefix={'default'}
          />
        )}
      </div>
      <div className="absolute bottom-[40px] flex flex-col justify-end pb-[100px] pl-[150px] xxl:bottom-[100px]">
        {textsBlock && textsBlock.keyName !== 'default' && (
          <TextLinesBlock
            key={textsBlock.keyName}
            {...textsBlock}
            itemsClassPrefix={'cat'}
          />
        )}
      </div>
    </Layout>
  )
}

export default MainPage
