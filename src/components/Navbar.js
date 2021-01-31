import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.png"
import CategoriesDropdown from "./CategoriesDropdown"
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false)
  const handleHoverShow = () => {
    setToggle(true)
  }
  const handleHoverHide = () => {
    setToggle(false)
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="big news site" />
      </Link>
      <ul>
        <li
          onMouseOver={handleHoverShow}
          onMouseOut={handleHoverHide}
          toggle={handleToggle}
          isOpen={toggle}
        >
          <Link to="/articles" className="nav-option">
            Articles &#9662;
          </Link>
          <CategoriesDropdown toggle={toggle} />
        </li>
        <li>
          <Link to="/surprise" className="nav-option">
            Surprise
          </Link>
        </li>
        <li>
          <Link to="/careers" className="nav-option">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-option">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
