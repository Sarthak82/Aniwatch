import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AnimeCharacters.css';

function AnimeCharacters() {
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const FetchAnimeCharacters = async () => {
      const resp = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
      const data = await resp.json();
      setCharacters(data.data);
    };

    FetchAnimeCharacters();
  }, [id]);



  return (
    <div className='animeCharacters'>
      {characters.map((Character) => (
        <div key={Character.character.mal_id} className='animeCharacters__card'>
          <img
            src={Character?.character?.images?.jpg?.image_url}
            alt={Character?.character?.name}
          />
          <h4>{Character?.character?.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default AnimeCharacters;
