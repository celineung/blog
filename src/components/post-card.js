import React from "react"
import Img from "gatsby-image"

export default function PostCard({ title, date, category, excerpt, gatsyImage }) {

  return (
    <article className="post-card">
      <Img fluid={ gatsyImage } />
      <header className="post-card__header">
        <div className="post-card__category">{ category }</div>
        <h2 className="post-card__title">{ title }</h2>
      </header>
      <section className="post-card__excerpt">{excerpt}</section>
      <div className="post-card__date">{date}</div>
    </article>
  )
}
