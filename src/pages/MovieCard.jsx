import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MyMovieCard,
  MyMovieImg,
  MyMovieCardOverview,
} from "./MovieCard.style";
import { image_base_url } from "../config";

const MovieCard = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`./detailMoviePage/${props.movieData.id}`, {
      state: {
        movieData: props.movieData,
      },
    });
  };

  return (
    <MyMovieCard onClickHandler={onClickHandler}>
      <MyMovieCardOverview>{props.movieData.overview}</MyMovieCardOverview>
      <MyMovieImg
        imgurl={`${image_base_url}w400${props.movieData.backdrop_path}`}
      />
    </MyMovieCard>
  );
};

export default MovieCard;
