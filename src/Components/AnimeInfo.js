import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './AnimeInfo.css'
import AnimeCharacters from './AnimeCharacters'

function AnimeInfo() {

    const {id} = useParams()
    const [anime ,setAnime] = useState([])
    

    useEffect(()=>{
      fetchData()
    },[])



    const fetchData = async ()=>{
      const resp = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
      const data = await resp.json()
      setAnime(data.data)
    }

 

    return (
    <div className='animeInfo'>

        <h1>{anime?.title}</h1>

        <div className='animeInfo__upper__upperPart'>
            
            <img className="animeInfo__img"src={anime?.images?.jpg?.image_url} alt={`${id}_image`} key={id}/>
        
            <div className='animeInfo__details'>
                <h3>Aired: <span>{anime?.aired?.string}</span></h3>
                <h3>Rating: <span>{anime?.rating}</span></h3>
                <h3>Rank: <span>{anime?.rank}</span></h3>
                <h3>Score: <span>{anime?.score}</span></h3>
                <h3>Scored By: <span>{anime?.scored_by}</span></h3>
                <h3>Popularty: <span>{anime?.popularity}</span></h3>
                <h3>Status: <span>{anime?.status} </span></h3>
                <h3>Source: <span>{anime?.source}</span></h3>
                <h3>Season: <span>{anime?.season}</span></h3>
                <h3>Duration: <span>{anime?.duration}</span></h3>
                {/* aired, rating,rank,score,scored by, popularty,status, score, season, duration */}
            </div>
        </div>

        <div className='animeinfo__upper__lowerPart'>
            <p>{anime?.synopsis}</p>
        </div>

        <div className='animeInfo__middel__part'>
            <h1>Trailer</h1>
            <iframe  title={anime?.trailer?.youtube_id}  src={anime?.trailer?.embed_url
            } alt="anime trailer"></iframe>
        </div>
        
        <div className='animeInfo__bottom__part'>
            <h1>Characters </h1>
            <AnimeCharacters/>

        </div>

    </div>
  )
}

export default AnimeInfo
