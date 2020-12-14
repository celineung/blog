import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      <Link
        to="https://github.com/celineung/blog"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </footer>
  )
}
