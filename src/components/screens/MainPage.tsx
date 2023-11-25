import React, { useEffect, useMemo } from 'react'
import TextTicker, { ITextTicker } from '@components/atoms/TextTicker'
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
  textTicker: ITextTicker
}

const MainPage: React.FC<IMainPage> = ({ images, textTicker, textsBlock }) => {
  const appState = useAppSelector((state) => state.appSlice)

  const activeIndex = useMemo(() => {
    if (!images) return
    return images?.findIndex((item) => item.id === appState.activeId) + 1
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
            delay: stagger(0.1, { startDelay: 0.4 }),
          },
        ],
        [
          '.header-item-slide-up-text',
          { y: '0' },
          {
            ease: 'easeOut',
            duration: 0.6,
            delay: stagger(0.1),
          },
        ],
      ])
    } else {
      animate([
        [
          '.default-slide-up-text',
          { y: '100%' },
          {
            ease: 'easeOut',
            duration: 0.3,
            delay: stagger(0.07),
          },
        ],
        [
          '.big-cat-title-slide-up-text',
          { y: '0' },
          { ease: 'easeOut', duration: 0.3, delay: 0.3 },
        ],
        [
          '.cat-slide-up-text',
          { y: '0' },
          {
            ease: 'easeOut',
            duration: 0.3,
            delay: stagger(0.07, { startDelay: -0.3 }),
          },
        ],
      ])
    }
  }, [textsBlock])

  return (
    <Layout>
      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="absolute top-[100px] z-0 flex h-[150px] w-full items-end overflow-hidden md:h-[400px]">
          <AnimatePresence>
            {!appState.activeId && (
              <TextTicker key={'default'} {...textTicker} />
            )}
            {appState.activeId && activeIndex && (
              <div
                key={'cat'}
                className="absolute left-0 flex h-[150px] w-screen gap-[100px] overflow-hidden pl-[150px] text-[150px] font-bold leading-[1em] tracking-tighter text-white md:h-[400px] md:text-[400px]"
              >
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
      <div className="absolute right-[-200px] z-20 h-full translate-y-[-15%] rotate-[-32deg] md:right-[-150px] md:translate-y-[-5%] md:rotate-[-15deg] lg:right-[100px] lg:rotate-[-8deg] xxl:right-[200px] 2xl:right-[400px]">
        {images && <Slider items={images} />}
      </div>
      <div className="absolute bottom-[40px] z-10 flex flex-col justify-end pl-[25px] md:pb-[100px] md:pl-[150px] xxl:bottom-[100px]">
        {mainPage.textsBlock && (
          <TextLinesBlock
            key={'default'}
            {...mainPage.textsBlock}
            itemsClassPrefix={'default'}
            hasSocials={true}
          />
        )}
      </div>
      <div className="absolute bottom-[40px] flex flex-col justify-end pl-[25px] md:pb-[100px] md:pl-[150px] xxl:bottom-[100px]">
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
