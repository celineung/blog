import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://celineung.com"
        className="footer__link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGlobe} aria-hidden="true" />
        <span className="footer-link__text">Site de Céline Ung</span>
      </a>
      <a
        href="https://github.com/celineung/blog"
        className="footer__link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} aria-hidden="true"/>
        <span className="footer-link__text">Github</span>
      </a>
      <a
        href="https://linkedin.com/in/celine-ung"
        className="footer__link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/>
        <span className="footer-link__text">LinkedIn</span>
      </a>
    </footer>
  )
}
