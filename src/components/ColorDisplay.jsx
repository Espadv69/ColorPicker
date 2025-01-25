const ColorDisplay = ({ color }) => {
  return (
    <div className="selected-color-container">
      <p className="p-selected-color">Selected color: {color}</p>
    </div>
  )
}

export default ColorDisplay
