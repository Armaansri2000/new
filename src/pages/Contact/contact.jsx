import React from 'react'
import "./Contact.css"

const contact = () => {
  return (
    <div className='contact'>
      <form  action="">
        <input type="text"  placeholder='Enter Name' required/>
        <input type='email'  placeholder='email' required />
        <textarea  name='message'  placeholder='Message'  required />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default contact
