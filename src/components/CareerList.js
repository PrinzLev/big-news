import React from "react"
import { Link } from "gatsby"
import { ImLocation } from "react-icons/im"

const CareerList = ({ careers }) => {
  return (
    <section className="career-list">
      <ul>
        {careers.map(career => {
          return (
            <Link to={`/careers/${career.slug}`} key={career.index}>
              <li key={career.index}>
                <h4>{career.title}</h4>
                <span>
                  <ImLocation /> {career.location}
                </span>
              </li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}

export default CareerList
