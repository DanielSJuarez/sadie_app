function Contact() {

    const onSubmit = () => {
        console.log('hi')
    }

    return (
      <div>
        <div>
          <div>Sadie Juarerz</div>
          <div> 
            Serving Upstate, SC
            (864) 770-3227
            sadiejuarez.doula@gmail.com</div>
          </div>
          <div>
            Socals
          </div>
        <div>
          <h2 className="mb-3">Contact Me</h2>
          <form onSubmit={onSubmit}>
            <div>
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div>
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="date">
                Estimated Due Date
              </label>
              <input className="form-control" type="date" id="date" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
              <input className="form-control" type="tel" id="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Tell me a little about yourself, and what you want out of your birth
              </label>
              <textarea className="form-control" id="message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
}

export default Contact