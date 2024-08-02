import React from 'react'
import "./RecommendationCard.css"

function RecommendationCard({ item }) {
  return (
    <div className='recommendationCard'>
      {item.entry.map((entryItem, index) => (
        <div key={index} className='recommendationCard__entry'>
          <img className="recommendationCard__img" src={entryItem?.images?.jpg?.image_url} alt={entryItem?.title} />
          <div className="recommendationCard__info">
            <h4>{entryItem?.title}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecommendationCard
