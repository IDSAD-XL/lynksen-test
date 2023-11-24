import { motion } from 'framer-motion'
import React from 'react'
import CylindricalTextViewer, {
  ICylindricalTextViewer,
} from '@components/molecules/CylindricalTextViewer'

export interface IScene {
  cylindricalText: ICylindricalTextViewer
}

const Scene: React.FC<IScene> = ({ cylindricalText }) => {
  return (
    <motion.div className="cylindricalText relative h-full flex justify-center items-center">
      <div className="absolute bg-green-800 w-[200px] h-[400px] z-20"></div>
      <div className="cylindricalText__rows-wrapper cylindricalText__rows-wrapper--frontscene z-30">
        <CylindricalTextViewer {...cylindricalText} />
      </div>
      <div className="cylindricalText__rows-wrapper cylindricalText__rows-wrapper--background z-10">
        <CylindricalTextViewer {...cylindricalText} />
      </div>
    </motion.div>
  )
}

export default Scene
