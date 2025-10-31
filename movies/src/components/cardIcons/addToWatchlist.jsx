import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToWatchlist = ({ movie }) => {
  const {addToMustWatch} = useContext(MoviesContext);

  const handleAdd = () => {
    addToMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAdd}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlist;
