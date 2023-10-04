import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import {api_url, my_key} from './config';

import './App.css';

function App() {
  const [movieDatas, setMovieDatas] = useState([]);
  useEffect(() => {
    const endpoint = `${api_url}movie/popular?api_key=${my_key}&language=en-US&page=1`;

    fetch(endpoint)
    .then(response => {return response.json()})
    .then(responseData => {setMovieDatas(responseData.results);})
  },[]); 
  
  return (
    <div className="movieContainer" >
      {movieDatas && movieDatas.map((movie, index) => {
        return <MovieCard key={index} movieData={movie} />
      })}
    </div>
  );
}

export default App;
