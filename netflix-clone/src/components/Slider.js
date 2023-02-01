import React from "react";
import CardSlider from "./CardSlider";

export default React.memo(
  function Slider({ movies }) {
    function getMovies(from, to) {
      return movies.slice(from, to);
    }
    return (
      <div>
        <CardSlider title="Trending Now" data={getMovies(0, 10)} />
        <CardSlider title="New Relese" data={getMovies(10, 20)} />
        <CardSlider title="BlockBuster" data={getMovies(20, 30)} />
        <CardSlider title="Top Rated" data={getMovies(30, 40)} />
        <CardSlider title="Indias top 10" data={getMovies(40, 50)} />
        <CardSlider title="Thriller" data={getMovies(50, 60)} />
      </div>
    );
  }
  
)
