import { useState } from 'react'

import ColorPicker from './components/ColorPicker'
import ColorDisplay from './components/ColorDisplay'

const App = () => {
  const [selectedColor, setSelectedColor] = useState('nothing')

  return (
    <main>
      <h1 className="h1-title">ColorPicker with React</h1>
      <ColorPicker onColorSelect={(color) => setSelectedColor(color)} />
      <ColorDisplay color={selectedColor} />
    </main>
  )
}

export default App
