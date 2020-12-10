import React from "react"
import Img from "gatsby-image"

export default function PostCard({ title, date, category, excerpt, gatsyImage }) {
  const dateTimeFormat = new Intl.DateTimeFormat('fr', { dateStyle: 'long' });
  const formattedPostDate = dateTimeFormat.format(new Date(date));

  return (
    <article className="post-card">
      <Img fluid={ gatsyImage } alt="" />
      <header className="post-card__header">
        <div className="post-card__category">{ category }</div>
        <h2 className="post-card__title">{ title }</h2>
      </header>
      <p className="post-card__excerpt">{excerpt}</p>
      <time dateTime={date} className="post-card__date">{formattedPostDate}</time>
    </article>
  )
}
