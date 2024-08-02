import React from 'react'
import "./PopularCard.css"

function PopularCard({ item }) {
  return (
    <div className='popularCard'>
      <img className="popularCard__image" src={item?.images?.jpg?.image_url} alt={item?.title} />
      <div className='popularCard__info'>
        <h3>{item?.title}</h3>
        <p>{item?.synopsis}</p>
      </div>
    </div>
  )
}

export default PopularCard
