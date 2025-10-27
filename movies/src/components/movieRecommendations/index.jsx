import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router";
import { getMovieRecommendations } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'


export default function MovieRecommendations({ movie }) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['recommendations', { id: movie.id }],
    queryFn: getMovieRecommendations,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const recommendations = data.results;


  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="recommendations table">
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell align="center">Overview</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recommendations.map((rn) => (
            <TableRow key={rn.id}>
              <TableCell component="th" scope="row">
                {rn.title}
              </TableCell>
              <TableCell >{rn.overview}</TableCell>
              <TableCell >
              <Link
                  to={`/movie/${rn.id}`}
                  state={{
                      recommendations: rn,
                      movie: movie,
                  }}
                >
                  Recommendations
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
