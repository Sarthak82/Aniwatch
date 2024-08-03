import React from 'react'
import "./PopularCard.css"
import { Link } from 'react-router-dom'

function PopularCard({ item }) {
  return (
    <div className='popularCard'>
      {<Link to={`/anime/${item?.mal_id}`}>
          <img className="popularCard__image" src={item?.images?.jpg?.image_url} alt={item?.title} />
      </Link>}
      <div className='popularCard__info'>
        <h3>{item?.title}</h3>
        <p>{item?.synopsis}</p>
      </div>
      
    </div>
  )
}

export default PopularCard
