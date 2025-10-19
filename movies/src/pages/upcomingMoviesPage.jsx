import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const UpcomingMoviesPage = () => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: getUpcomingMovies,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Something went wrong: {error.message}</p>;

  const toDo = () => true;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={toDo}
    />
  );
};

export default UpcomingMoviesPage;
