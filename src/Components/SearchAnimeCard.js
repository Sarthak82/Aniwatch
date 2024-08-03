import React from "react";
import "./SearchAnimeCard.css"
import { Link } from 'react-router-dom'

const SearchAnimeCard = ({item})=>{
    return(
        <div className="searchAnimeCard">
            <Link to={`/anime/${item?.mal_id}`} className="searchAnimeCard__link">
                <img className="searchAnimeCard__image" src={item?.images?.jpg?.image_url} alt={item?.title}/>
            </Link>

            <div className="searchAnimeCard__info">
                <h3>{item?.title}</h3>

                <span>{item?.episode}</span>
                <span>{`Studio: ${item?.studios[0]?.name}`}</span>
                <span>{`${item?.status}`}</span>
                <span>{item?.aired?.string}</span>
                <span>{item?.type}</span>
            </div>
        </div>
    )
    
}

export default SearchAnimeCard;