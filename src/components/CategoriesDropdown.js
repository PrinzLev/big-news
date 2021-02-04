import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulArticles {
      distinct(field: category)
    }
  }
`

const CategoriesDropdown = ({ toggle }) => {
  const {
    allContentfulArticles: { distinct },
  } = useStaticQuery(query)
  return (
    <section className="categories-dropdown">
      <ul className={`dropdown-section ${toggle ? "showDropdown" : ""}`}>
        {distinct.map(category => {
          return (
            <li>
              <Link to={`/${category.toLowerCase()}`} key={category.index}>
                {category}
              </Link>
            </li>
          )
        })}
        <li>
          <Link to="/articles">All Articles</Link>
        </li>
      </ul>
    </section>
  )
}

export default CategoriesDropdown
