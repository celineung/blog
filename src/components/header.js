import React from "react"
import {Link} from "gatsby";

export default function Header({ siteTitle }) {
  return (
    <header className="header">
      <Link
          to="/"
      >
        { siteTitle }
      </Link>
    </header>
  )
}
