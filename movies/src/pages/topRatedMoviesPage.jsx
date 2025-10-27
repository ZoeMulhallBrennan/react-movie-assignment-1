import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import WriteReview from "../components/cardIcons/writeReview";

const TopRatedMoviesPage = () => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Something went wrong: {error.message}</p>;

  const toDo = () => true; 

  return (
    <PageTemplate
      title="Top Rated"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default TopRatedMoviesPage;