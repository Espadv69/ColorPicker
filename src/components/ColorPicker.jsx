const ColorPicker = ({ onColorSelect }) => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple']

  const handleColorPicker = (color) => {
    onColorSelect(color)
  }

  return (
    <div className="buttons-container">
      {colors.map((color) => (
        <button
          onClick={handleColorPicker}
          style={{ backgroundColor: color, color: 'currentcolor' }}
        >
          {color}
        </button>
      ))}
    </div>
  )
}

export default ColorPicker
