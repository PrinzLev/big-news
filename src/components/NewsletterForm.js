import React from "react"

const NewsletterForm = () => {
  return (
    <section className="newsletter-form-section">
      <h1>Subscribe To Our Newsletter</h1>
      <span>Get The Biggest News Daily</span>
      <form
        action="https://formspree.io/f/mvovlrgw"
        method="POST"
        className="newsletter-form"
      >
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="email"
          />
          <input type="submit" name="submit" className="newsletter-btn" />
        </div>
      </form>
      <span style={{ textTransform: "uppercase", fontSize: ".65rem" }}>
        you'll be sent our highlighted news daily. all emails are kept
        confidential and are not shared.
      </span>
    </section>
  )
}

export default NewsletterForm
