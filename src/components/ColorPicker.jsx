const ColorPicker = ({ onColorSelect }) => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple']

  return (
    <div className="buttons-container">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          style={{ backgroundColor: color, color: 'currentcolor' }}
        >
          {color}
        </button>
      ))}
    </div>
  )
}

export default ColorPicker
