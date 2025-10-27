import React from "react";
import { useLocation } from "react-router";
import PageTemplate from "../components/templateMoviePage";
import MovieCredits from "../components/movieCredits";

const MovieCreditsPage = (props) => {
  let location = useLocation();
  const {movie} = location.state;
  
  return (
    <PageTemplate movie={movie}>
      <MovieCredits movie={movie} />
    </PageTemplate>
  );
};

export default MovieCreditsPage;
