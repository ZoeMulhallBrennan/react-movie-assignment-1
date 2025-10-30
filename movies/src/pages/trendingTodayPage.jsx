import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getTrendingTodayMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';


const TrendingTodayPage = () => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ["trendingTodayMovies"],
    queryFn: getTrendingTodayMovies,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Something went wrong: {error.message}</p>;

  const toDo = () => true; 

  return (
    <PageTemplate
      title="Trending Today"
      movies={movies}
      action={(movie) => {
        return( <> <AddToWatchlistIcon movie={movie} />
         <AddToFavoritesIcon movie={movie} /> </>)
      }}
    />
  );
};

export default TrendingTodayPage;
