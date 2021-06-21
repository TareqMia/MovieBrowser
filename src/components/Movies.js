import React from 'react';
import Movie from './Movie';

/**
 * Renders a list of Movie components based on the list passed in as props
 * @param movies -> list of movies retrieved from API search
 * @param openModal -> callback function to handle opening/closing modal
 * @returns JSX to render a list of movies
 */
const Movies = ({ movies, openModal}) => {
    
    let renderedList = [];
    
    //handling case where no movies are found
    if  (movies == null) {
        return (
            <div style={{color: 'white', textAlign: 'center'}}>
               <h2>Sorry, movie not found 🙁</h2>
            </div>)
    } else {
        renderedList = movies.map(movie => {
            //returning individal Movie components
            return <Movie openModal={openModal}  key={movie.imdbID} movie={movie} />
        });
    }
    

    return(
    <section className="movies">
            {renderedList}
    </section> 
    );
}

export default Movies;