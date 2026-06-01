import React from 'react'

function Footer({ name }) {
  // Current year is generated dynamically.
  const year = new Date().getFullYear()

  // `name` is a prop so we can reuse Footer for any student.
  return (
    <footer className="footer">
      <p>
        &copy; {year} {name}
      </p>
    </footer>
  )
}

export default Footer
