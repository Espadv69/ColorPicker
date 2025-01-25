import '../css/ColorDisplay.css'

const ColorDisplay = ({ color }) => {
  return (
    <div className="selected-color-container">
      <p>
        Selected color:{' '}
        <span style={{ color: color, fontWeight: 'bold' }}>{color}</span>
      </p>
    </div>
  )
}

export default ColorDisplay
