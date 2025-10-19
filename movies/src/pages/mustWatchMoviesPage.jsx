import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const MustWatchMoviesPage = () => {
  const { mustWatch: movieIds } = useContext(MoviesContext);

  const mustWatchMovieQueries = useQueries({
    queries: movieIds.map((id) => ({
      queryKey: ["movie", { id }],
      queryFn: getMovie,
    })),
  });


  const isLoading = mustWatchMovieQueries.some((q) => q.isLoading);
  if (isLoading) return <Spinner />;

  const movies = mustWatchMovieQueries.map((q) => {
    const movie = q.data;
    movie.genre_ids = movie.genres.map((g) => g.id);
    return movie;
  });

  const toDo = () => true; 

  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={toDo}
    />
  );
};

export default MustWatchMoviesPage;
