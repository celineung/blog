import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/celineung/blog"
        className="footer__link"
      >
        <FontAwesomeIcon icon={faGithub} aria-hidden="true"/>
        <span className="footer-link__text">Github</span>
      </a>
      <a
        href="https://linkedin.com/in/celine-ung"
        className="footer__link"
      >
        <FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/>
        <span className="footer-link__text">LinkedIn</span>
      </a>
    </footer>
  )
}
