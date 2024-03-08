import React from 'react'

export default function NewsItem(props) {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
  <img src={props.imageUrl?props.imageUrl:'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg'} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.description}...</p>
    <a href={props.newsUrl} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
    </>
  )
}
