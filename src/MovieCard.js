import React, {useState} from 'react';
import {image_base_url} from './config';

const MovieCard = (movieData) => {
    const [isHoveredMovieCard, setIsHoveredCard] = useState(0);
    return (
        <div className="movieCard" 
        onMouseOver={(e) => {setIsHoveredCard(1)}}
        onMouseOut={(e) => {setIsHoveredCard(0)}}
        >
            {
                isHoveredMovieCard 
                ? 
                <div className="hoveredMovieCard">
                    <img src={`${image_base_url}w400${movieData.movieData.backdrop_path}`} alt=""/>
                    <div className="hoveredMovieCardOverview">{movieData.movieData.overview}</div>
                </div>
                :
                <div>
                    <img src={`${image_base_url}w400${movieData.movieData.backdrop_path}`} alt=""/>
                </div>
            }
        </div>
    )
}

export default MovieCard;