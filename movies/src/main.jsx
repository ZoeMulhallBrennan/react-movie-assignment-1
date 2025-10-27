import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import TrendingTodayPage from "./pages/trendingTodayPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import MovieCreditsPage from "./pages/movieCreditsPage";
import { ThemeProvider,createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const theme = createTheme ({
palette: {
  mode: "light",
  background: { default : "#adebb3", paper:"#cae7d3"},
  primary: { main : "#3eb489"},
  secondary: { main : "#1dbd83ff"},
  appbar: { main : "#1dbd83ff" }

  }

}
)

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline /> 
          <Routes>
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
            <Route path="/movies/trending/today" element={<TrendingTodayPage/>} />
            <Route path="/movies/mustwatch" element={<MustWatchMoviesPage/>}/>
            <Route path="/movies/nowplaying" element={<NowPlayingMoviesPage/>} />
            <Route path="/movies/toprated" element={<TopRatedMoviesPage/>} />
            <Route path="/movies/popular" element={<PopularMoviesPage/>} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/cast/:id" element={<MovieCreditsPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
          </ThemeProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};



const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
