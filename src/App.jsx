import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Button from './components/Button'
import Form from './components/Form'
import './App.css'

function App() {
  // Array data used for dynamic rendering of Card components.
  const projects = [
    {
      id: 1,
      name: 'Project One',
      description: 'React Card Example'
    },
    {
      id: 2,
      name: 'Project Two',
      description: 'Reusable Components'
    },
    {
      id: 3,
      name: 'Project Three',
      description: 'Props and State Demo'
    }
  ]

  return (
    <div className="app-container">
      <Header title="React Components Practice" />

      <main>
        <h2>Project Cards</h2>
        <section className="cards-grid">
          {/* Dynamic rendering using map() to create multiple cards from array data. */}
          {projects.map((project) => (
            <Card
              key={project.id}
              name={project.name}
              description={project.description}
            />
          ))}
        </section>

        <Button text="Click Me" />

        <Form />
      </main>

      <Footer name="Nishant Kumar" />
    </div>
  )
}

export default App
