import React from 'react'

function Card({ name, description }) {
  // Props are used to show different card content without duplicating code.
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Card
