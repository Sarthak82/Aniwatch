import React, {useState } from 'react'
import './SearchAnime.css'
import SearchAnimeCard from './SearchAnimeCard'

function SearchAnime() {

    const [query,setQuery] = useState('')
    const [animeData,setAnimeData] = useState([])
    

    const handleSubmit = (e) => {
        e.preventDefault() // Prevent default form submission
        fetchByName() // Call fetchByName on form submission
    }

    const fetchByName = async ()=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
        const data = await response.json()
        setAnimeData(data.data)
    }

    return (

        <div className='searchAnime'>
            <form className='searchAnime__form' onSubmit={handleSubmit}>
                <input className="searchAnime__input" type="text" placeholder='Search Anime' value={query} onChange={(e)=>{
                    setQuery(e.target.value)
                }}/>
                <button className="searchAnime__searchBtn" type='submit'>Search</button>
            </form>

            <div className='searchAnime__card'>
                {animeData.map((item)=>(
                    <SearchAnimeCard key={item?.mal_id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default SearchAnime
