import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      <Link
        to="https://github.com/celineung/blog"
        className="footer__link"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        to="https://linkedin.com/in/celine-ung"
        className="footer__link"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </footer>
  )
}
