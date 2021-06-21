import React from 'react';

/**
 * Movie component that displays info about individual movies (including name and poster)
 * @param movie -> JSON of single movie retrieved from API search
 * @param openModal -> handles opening and closing modal popup
 * @returns JSX to render one movie
 */
const Movie = ({movie, openModal}) => {
    return (
        <div className="movie" onClick={() => openModal(movie.imdbID)}>
            <img alt="movie-poster" src={movie.Poster === "N/A" ?
             'https://placehold.it/198x264&text=Image+Not+Found' 
             : movie.Poster} />
            <h3>{movie.Title}</h3>
            
        </div>
    );
}

export default Movie;