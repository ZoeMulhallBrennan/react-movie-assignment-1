import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";

const AddToWatchlist = ({ movie }) => {
  return (
    <IconButton
      aria-label="add to watchlist"
      onClick={() => {}} // no action yet
    >
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlist;
