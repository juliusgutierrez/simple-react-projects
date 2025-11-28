import React from 'react';
import '../styles.css';

export default function MovieCard({
  movie,
  isWatchedListed,
  toggleToWatchlist,
}) {
  const handleError = (e) => {
    e.target.src = 'images/default.png';
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) return 'rating-good';
    if (rating >= 5) return 'rating-ok';
    return 'rating-bad';
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.year}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchedListed}
            onChange={() => toggleToWatchlist(movie.id)}
          ></input>
          <span className="slider">
            <span className="slider-lable">
              {isWatchedListed ? 'In Watchlist' : 'Add to Watchlist'}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
