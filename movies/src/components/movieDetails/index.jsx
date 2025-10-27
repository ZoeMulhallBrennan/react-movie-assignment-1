import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import PeopleIcon from "@mui/icons-material/People";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import MovieCredits from "../movieCredits";
import LanguageIcon from "@mui/material/Chip";




const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => { 
const [reviewsDrawerOpen, setReviewsDrawerOpen] = useState(false);
const [creditsDrawerOpen, setCreditsDrawerOpen] = useState(false);


  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
        

      <Paper component="ul" sx={{...root}}>
        <li>
            <Chip label="Production Countries" sx={{...chip}} color="primary"/>
        </li>
        {movie.production_countries.map((country) => (<li key={country.name}>
            <Chip label={country.name} sx={{...chip}}></Chip>
        </li>
    ))}
    </Paper>

<Paper component="ul" sx={{ ...root }}>
  <li>
    <Chip
      icon={<LanguageIcon />}
      label={`Original Language: ${movie.original_language.toUpperCase()}`}
      sx={{ ...chip }}
      color="primary"
    />
  </li>
</Paper>


      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setReviewsDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={reviewsDrawerOpen} onClose={() => setReviewsDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setCreditsDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '5em',
          right: '1em'
        }}
      >
        <PeopleIcon/>
        Credits
      </Fab>
      <Drawer anchor="top" open={creditsDrawerOpen} onClose={() => setCreditsDrawerOpen(false)}>
        <MovieCredits movie={movie} />
      </Drawer>

      </>
  );
};
export default MovieDetails ;
