import React from 'react'

function Header({ title }) {
  // `title` comes from props so this component can be reused with different headings.
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  )
}

export default Header
