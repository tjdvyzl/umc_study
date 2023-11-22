import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { api_url, my_key } from "../config";
import { MyMovieContainer } from "./MovieCard.style";

function Celebrity() {
  const [movieDatas, setMovieDatas] = useState([]);
  useEffect(() => {
    const endpoint = `${api_url}person/popular?api_key=${my_key}&language=en-US&page=1`;

    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setMovieDatas(responseData.results);
      });
  }, []);

  return (
    <MyMovieContainer>
      {movieDatas &&
        movieDatas.map((movie, index) => {
          return <MovieCard key={index} movieData={movie.known_for[0]} />;
        })}
    </MyMovieContainer>
  );
}

export default Celebrity;
