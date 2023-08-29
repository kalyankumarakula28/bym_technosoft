import React from 'react'
import "./index.css"
const SubmitForm = () => {
  return (
    <div className="form-container">
    <form action="" className="form-details">
      <input type="text" placeholder="FullName" className="input" />
      <input type="email" placeholder="Email Id" className="input" />
      <input type="tel" placeholder="Mobile Number" className="input" />
      <input type="textarea" placeholder="Message" className="input" />
      
    </form>
    <div className='btn-container'>
        <button type="submit" className="submit">Submit</button>
      </div>
  </div>
  )
}

export default SubmitForm