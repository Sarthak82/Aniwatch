import React, { useEffect, useState } from 'react'
import './Recommendation.css'
import RecommendationCard from './RecommendationCard'

function Recommendation() {

    const [recommendationList,setRecommendationList] = useState([])

    useEffect(()=>{
        fetchRecommendation()
    },[])

    const fetchRecommendation = async()=>{
        const resp = await fetch('https://api.jikan.moe/v4/recommendations/anime')
        const data = await resp.json()
        console.log(data.data)
        setRecommendationList(data.data)
    }

    return (
        <div className='recommendation'>
            <div className='recommendation__title'>
                <h1>Recommendations</h1>
            </div>

            <div className='recommendation__card'>
                {recommendationList.map((item)=>(
                    <RecommendationCard key={item?.entry?.mal_id} item={item}/>
                ))}    
            </div> 

        </div>
    )
}

export default Recommendation
