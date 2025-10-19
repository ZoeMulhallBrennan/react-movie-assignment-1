import React, { useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToWatchlist = ({ movie }) => {
  const { addToMustWatch } = useContext(MoviesContext);

  const handleAdd = () => {
    addToMustWatch(movie);
  };

  return (
    <IconButton
      aria-label="add to must watch"
      onClick={handleAdd}
    >
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlist;
