import React from 'react'
import "./RecommendationCard.css"
import { Link } from 'react-router-dom'


function RecommendationCard({ item }) {
  return (
    <div className='recommendationCard'>
      {item.entry.map((entryItem, index) => (
        <div key={index} className='recommendationCard__entry'>
          <Link to={`/anime/${entryItem?.mal_id}`}>
            <img className="recommendationCard__img" src={entryItem?.images?.jpg?.image_url} alt={entryItem?.title} />
          </Link>
          <div className="recommendationCard__info">
            <h4>{entryItem?.title}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecommendationCard
