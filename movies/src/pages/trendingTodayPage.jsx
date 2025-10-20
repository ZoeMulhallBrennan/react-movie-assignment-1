import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getTrendingTodayMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";

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
      action={toDo}
    />
  );
};

export default TrendingTodayPage;
