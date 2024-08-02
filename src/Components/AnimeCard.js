import React from 'react'
import './AnimeCard.css'

function AnimeCard({anime }) {

    return (
        <div className='animecard'>
            <img src= {anime?.images?.jpg?.image_url} alt={anime?.title}/>
            <h4>{anime?.title}</h4>

            <div className='animecard__info'>
                <span>{anime?.type}</span>
                <span>     ♦     </span>
                <span>{`${anime.duration.slice(0,2)}m`}</span>
            </div>
        </div>
    )
}


export default AnimeCard
