function Form() {

    const onSubmit = () => {
        console.log('hi')
    }

    return (
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
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button  type="submit"/>
      </form>
        </div>
    )
}

export default Form