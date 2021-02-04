import React from "react"
import { RiGovernmentFill, RiBasketballFill } from "react-icons/ri"
import { ImNewspaper } from "react-icons/im"
import { GiStarSwirl } from "react-icons/gi"
import { Link } from "gatsby"

const categories = [
  {
    icon: <ImNewspaper className="category-icon" />,
    category: "Current Events",
    desc:
      "Chartbeat analytics future news.me get me rewrite paidContent libel lawyer bringing a tote bag to a knife fight hyperhyperhyperlocal masthead media diet rubber cement, future of narrative CPM Dan Fleckner NYT R&D Neil Postman #twittermakesyoustupid production.",
  },
  {
    icon: <RiGovernmentFill className="category-icon" />,
    category: "Politics",
    desc:
      "This is filler text pulled randomly from government press releases, designed to show how a template works. HM Revenue and Customs shares some little-known facts about Self Assessment ahead of the 31 January 2021 deadline. ",
  },
  {
    icon: <GiStarSwirl className="category-icon" />,
    category: "Science",
    desc:
      "Science Ipsum is a science themed placeholder text generator. The service is exposed through a simple API. Developers simply specify the number of paragraphs, and optionally the number of words per paragraph, and the API returns the requested text.",
  },
  {
    icon: <RiBasketballFill className="category-icon" />,
    category: "Sports",
    desc:
      "Second effort flag game changer big play defensive line , shot football transition pitch secondary  nolook pass. Throw off the bench nolook pass point of attack going going  gone Swing and a miss open J circus catch, basket running game secondary  turnover. ",
  },
]
const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <h1>Categories</h1>
      <div className="catergories-selection">
        {categories.map(({ icon, category, desc, index }) => {
          return (
            <Link to={`/${category.toLowerCase()}`} className={index}>
              {icon}
              <h2>{category}</h2>
              <p>{desc}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CategoriesSection
