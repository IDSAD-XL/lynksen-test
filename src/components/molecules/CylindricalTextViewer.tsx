import React, { CSSProperties } from 'react'
import { motion } from 'framer-motion'

interface ICyliderColCharType {
  type: 'char'
  text: string
}

interface ICyliderColUnderscoreType {
  type: 'underscore'
}

type ICylinderColType = ICyliderColCharType | ICyliderColUnderscoreType

export interface ICylindricalTextViewer {
  rows: Array<{
    cols: ICylinderColType[]
  }>
}

interface ICylindricalTextColStyle extends CSSProperties {
  '--cylindrical-text-row-index': number
}

const CylindricalTextViewer: React.FC<ICylindricalTextViewer> = ({ rows }) => {
  return (
    <>
      {[...Array(3)].map((_, rowIdx) => (
        <div className="cylindricalText__row">
          {[...Array(30)].map((_, colIdx) => {
            const element = rows[rowIdx].cols?.[colIdx]
            if (!element) {
              return <></>
            }
            const isChar = element.type === 'char'
            return (
              <motion.div
                className={`cylindricalText__col cylindricalText__col--${colIdx} relative ${
                  isChar ? '' : 'cylindricalText__col--underscore'
                }`}
                style={
                  {
                    '--cylindrical-text-row-index': colIdx,
                  } as ICylindricalTextColStyle
                }
              >
                {isChar && (
                  <span dangerouslySetInnerHTML={{ __html: element.text }} />
                )}
              </motion.div>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default CylindricalTextViewer
