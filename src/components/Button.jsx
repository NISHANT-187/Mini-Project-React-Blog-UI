import React, { useState } from 'react'

function Button({ text }) {
  // State stores and updates the counter when the button is clicked.
  const [count, setCount] = useState(0)

  // Event handler: runs on click and increases count by 1.
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <section className="counter-section">
      <button type="button" className="btn" onClick={handleClick}>
        {text}
      </button>
      <p>Button clicked: {count} times</p>
    </section>
  )
}

export default Button
