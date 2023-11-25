import React, { useMemo } from 'react'
import SlideUpLine from '@components/atoms/SlideUpLine'
import { splitTextToLines } from '../../utils/splitTextToLines'

export interface ITextLinesBlock {
  keyName: string
  title: string
  description: string
  itemsClassPrefix: string
}

const TextLinesBlock: React.FC<ITextLinesBlock> = ({
  title,
  description,
  itemsClassPrefix,
}) => {
  const titleLines = useMemo(() => {
    return splitTextToLines(title, 4)
  }, [title])

  const descriptionLines = useMemo(() => {
    return splitTextToLines(description, 8)
  }, [description])

  return (
    <>
      <div className="flex flex-col text-white text-10 uppercase leading-[1.3em] tracking-tighter">
        {titleLines.map((line, idx) => (
          <SlideUpLine
            classPrefix={itemsClassPrefix}
            key={`${idx}1`}
            text={line}
          />
        ))}
      </div>
      <div className="flex flex-col text-white text-4 leading-[1em] tracking-tighter mt-[1rem] uppercase">
        {descriptionLines.map((line, idx) => (
          <SlideUpLine
            classPrefix={itemsClassPrefix}
            key={`${idx}1`}
            text={line}
          />
        ))}
      </div>
      <div className="flex gap-[20px] text-4 text-white mt-[4rem]">
        <SlideUpLine text={'Instagram'} classPrefix={itemsClassPrefix} />
        <SlideUpLine text={'Facebook'} classPrefix={itemsClassPrefix} />
      </div>
    </>
  )
}

export default TextLinesBlock
