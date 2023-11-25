import React, { useMemo } from 'react'
import SlideUpLine from '@components/atoms/SlideUpLine'
import { splitTextToLines } from '../../utils/splitTextToLines'
import Icon from '@components/atoms/Icon'
import Link from 'next/link'

export interface ITextLinesBlock {
  keyName: string
  title: string
  description: string
  itemsClassPrefix: string
  hasSocials: boolean
}

const TextLinesBlock: React.FC<ITextLinesBlock> = ({
  title,
  description,
  itemsClassPrefix,
  hasSocials,
}) => {
  const titleLines = useMemo(() => {
    return splitTextToLines(title, 4)
  }, [title])

  const descriptionLines = useMemo(() => {
    return splitTextToLines(description, 8)
  }, [description])

  return (
    <>
      <div className="flex flex-col text-10 uppercase leading-[1.3em] tracking-tighter text-white">
        {titleLines.map((line, idx) => (
          <SlideUpLine
            classPrefix={itemsClassPrefix}
            key={`${idx}1`}
            text={line}
          />
        ))}
      </div>
      <div className="mt-[1rem] flex flex-col text-4 uppercase leading-[1.2em] tracking-tighter text-white">
        {descriptionLines.map((line, idx) => (
          <SlideUpLine
            classPrefix={itemsClassPrefix}
            key={`${idx}1`}
            text={line}
          />
        ))}
      </div>
      {hasSocials && (
        <div className="mt-[4rem] flex gap-[20px] text-4 text-white">
          <SlideUpLine classPrefix={itemsClassPrefix}>
            <Link href={'#'}>
              <Icon name={'instagram'} size={'1x'} />
              <span className="ml-[0.5em]">Instagram</span>
            </Link>
          </SlideUpLine>
          <SlideUpLine classPrefix={itemsClassPrefix}>
            <Link href={'#'}>
              <Icon name={'facebook'} size={'1x'} />
              <span className="ml-[0.5em]">Facebook</span>
            </Link>
          </SlideUpLine>
        </div>
      )}
    </>
  )
}

export default TextLinesBlock
