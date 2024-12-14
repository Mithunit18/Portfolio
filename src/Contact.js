
const Contact = () => {
  return (
    <div className="Contact-section">
      <h2>Contact Me</h2>
      <p>
      Feel free to reach out for collaborations or just a friendly chat. 
      Fill out the form below or contact me directly!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>Email: <a href="mailto:amthemithun@gmail.com">amthemithun@gmail.com</a></p>
        <p>Phone: <a href="tel:+917695831369">+91-7695831369</a></p>
      </div>
    </div>
  )
}

export default Contact