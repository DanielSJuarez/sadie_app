import './index.css'

function Contact() {

  const onSubmit = () => {
      console.log('hi')
  }

  return (
    <div className='contact-wrapper'>
      <div>
        img
      </div>
      <div className='contact-form-wrapper'>
        <div className='contact-form-container'>
          <div className='contact-form-title'>Contact Me</div>
          <form onSubmit={onSubmit}>
            <div  className='contact-input-container'>
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" required placeholder="First Name"/>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" required placeholder="Last Name"/>
            </div>
            <div  className='contact-input-container'>
              <label htmlFor="date">Estimated Due Date</label>
              <input type="date" id="date" />
            </div>
            <div  className='contact-input-container'>
              <label htmlFor="email">
                Email
              </label>
              <input type="email" id="email"  placeholder="you@example.com"/>
            </div>
            <div  className='contact-input-container'>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
            </div>
            <div className='contact-input-container'>
              <label htmlFor="message">Tell me a little about yourself, and what you want out of your birth</label>
              <textarea  id="message" placeholder='Preferences....'/>
            </div>
            <div className='form-button' type="submit">Submit</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact