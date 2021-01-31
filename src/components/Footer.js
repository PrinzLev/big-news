import React from "react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <a href="https://www.facebook.com" target="__blank">
          <FaFacebook className="facebook" />
        </a>
        <a href="https://www.twitter.com" target="__blank">
          <FaTwitter className="twitter" />
        </a>
        <a href="https://www.instagram.com" target="__blank">
          <FaInstagram className="instagram" />
        </a>
      </div>
      <h4>All Rights Reserved Big News &copy; {new Date().getFullYear()}</h4>
    </footer>
  )
}

export default Footer
