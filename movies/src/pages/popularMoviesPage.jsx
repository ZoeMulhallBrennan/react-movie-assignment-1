import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const PopularMoviesPage = () => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Something went wrong: {error.message}</p>;

  const toDo = () => true; 

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={toDo}
    />
  );
};

export default PopularMoviesPage;