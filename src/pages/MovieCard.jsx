import React from 'react';
import { MyMovieCard, MyMovieImg, MyMovieCardOverview } from './MovieCard.style';
import {image_base_url} from '../config';

const MovieCard = (movieData) => {
    return (
        <MyMovieCard>
            <MyMovieCardOverview>{movieData.movieData.overview}</MyMovieCardOverview>
            <MyMovieImg imgUrl={`${image_base_url}w400${movieData.movieData.backdrop_path}`} />
        </MyMovieCard>
    )
}

export default MovieCard;