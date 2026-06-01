import React, { useState } from 'react'

function Form() {
  // State keeps track of form input values.
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  // State to store submitted data and display it below form.
  const [submittedData, setSubmittedData] = useState(null)

  // Event handling for inputs: updates state based on input name.
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  // Event handling for submit: prevent reload and show entered data.
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedData(formData)
  }

  return (
    <section className="form-section">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </section>
  )
}

export default Form
