import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToWatchlist from "../components/cardIcons/addToWatchlist";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const NowPlayingMoviesPage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["nowPlayingMovies"],
    queryFn: getNowPlayingMovies,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data;

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => {
        return (<> <AddToWatchlist movie={movie} />
         <AddToFavoritesIcon movie={movie} /> </>)
      }}
    />
  );
};

export default NowPlayingMoviesPage;
