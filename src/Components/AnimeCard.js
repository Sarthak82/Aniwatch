import React from 'react'
import './AnimeCard.css'
import { Link } from 'react-router-dom'

function AnimeCard({anime }) {

    return (
        <div className='animecard'>
            <Link to={`/anime/${anime.mal_id}`}> 
                <img src= {anime?.images?.jpg?.image_url} alt={anime?.title}/>
            </Link>
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
