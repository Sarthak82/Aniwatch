import React, { useEffect,useState } from 'react'
import './Body.css'
import AnimeCard from './AnimeCard'
import Fakebox from './Fakebox'

function Body() {

    const [anime, setAnime] = useState([]) 
    
    useEffect(()=>{
      fetchData()
      },[])

    const fetchData = async() =>{
       const resp= await fetch("https://api.jikan.moe/v4/seasons/now")
       const data = await resp.json()
       setAnime(data.data)
    }
  
    
    return anime.length === 0 ? (
      <Fakebox />
    ) : (
      <div className='body'>
        <div className='body__title'>
          <h1> Airing Anime </h1>
        </div>
        <div className='body__cards'>
        {anime.map((item, index) => (
          <AnimeCard key={index} anime={item} />
        ))}
        </div>
      </div>
) 
}


export default Body
