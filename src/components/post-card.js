import React from "react"

export default function PostCard({ title, date, category, excerpt, content }) {

  return (
    <article className="post-card">
      <header className="post-card__header">
        <div className="post-card__category">{category}</div>
        <h3 className="post-card__title">{title}</h3>
      </header>
      <section className="post-card__excerpt">{excerpt}</section>
      <div className="post-card__date">{date}</div>
    </article>
  )
}
