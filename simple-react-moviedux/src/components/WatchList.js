import React from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function WatchList({ movies, watchlist, toggleToWatchlist }) {
  return (
    <>
      <h1 className="title" Your Watchlist></h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              movie={movie}
              key={movie.id}
              toggleToWatchlist={toggleToWatchlist}
              isWatchedListed={true}
            ></MovieCard>
          );
        })}
      </div>
    </>
  );
}
