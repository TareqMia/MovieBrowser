import React from 'react';
import { CSSTransition } from 'react-transition-group';

/**
 * component to display popup to display more info about a given movie
 * @param show -> boolean to determine to show/not show modal
 * @param setShow -> function to set 'show' value
 * @param movie -> the movie that is being shown
 * @param onClose -> helps in closing the popup
 * @returns JSX to render modal information
 */
const Modal = ({show, setShow, movie, onClose}) => {
   
    return (
        //used to remove modal from DOM when not opened
        <CSSTransition 
        in={show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal" onClick={onClose}>
                <div className={`modal-background modal-showing-${show}`}>
                    <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
                        <div>
                            <img className="modal-image" src={movie.Poster} alt="poster" />
                        </div>
                        <div className="modal-text">
                            <h2>
                                {movie.Title} <br />
                                {movie.Year} <br />
                                {movie.Rated}
                            </h2>
                            
                            <h5>Director(s): {movie.Director}</h5>
                            <div className="movie-desc">
                                <p>
                                    {movie.Plot}
                                </p>
                            </div>
                            <div>Cast: {movie.Actors}</div>
                            <div>{movie.Writers}</div>
                            <div>IMDB Rating: {movie.imdbRating}</div>
                            <div>Runtime: {movie.Runtime}</div> <br />


                            <button className="ui button black" onClick={() => { setShow(false) }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>

    );
}

export default Modal;