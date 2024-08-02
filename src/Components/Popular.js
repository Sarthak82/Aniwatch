import React, { useState, useEffect } from 'react'
import './Popular.css'
import PopularCard from './PopularCard'
import Fakebox from './Fakebox'

function Popular() {
  const [animeList, setAnimeList] = useState([])

  useEffect(() => {
    fetchPopularAnime()
  }, [])

  const fetchPopularAnime = async () => {
    const resp = await fetch('https://api.jikan.moe/v4/top/anime')
    const data = await resp.json()
    setAnimeList(data.data)
  }

  return animeList.length===0 ? <Fakebox/> : (
    <div className='popular'>
      <div className='popular__title'>
        <h1>Popular Anime</h1>
      </div>
      <div className='popular__animeCard'>
        {animeList.map((item) => (
          <PopularCard key={item.mal_id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Popular
