import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { api_url, my_key, image_base_url } from "../config";
import { MyMovieCard, MyMovieImg } from "./MovieCard.style";

export default function DetailMoviePage(props) {
  const location = useLocation();
  const params = useParams();
  const movieId = params.movie_id;
  const movieData = location.state.movieData;
  const imgurl = `${image_base_url}w400${movieData.backdrop_path}`;

  return (
    <div>
      <img
        src={imgurl}
        style={{ width: "400px", height: "500px" }}
        align="left"
      />
      <h1>{movieData.title}</h1>
    </div>
  );
}
