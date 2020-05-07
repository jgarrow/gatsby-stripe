import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridGap: `5px`,
          width: `150px`,
        }}
      >
        <Link
          to="/store"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1.25rem`,

            ":hover": {
              textDecoration: `underline`,
            },
          }}
        >
          Store
        </Link>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1.25rem`,

            ":hover": {
              textDecoration: `underline`,
            },
          }}
        >
          About
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
