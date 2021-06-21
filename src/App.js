import React, { useState } from 'react';
import Search from './components/Search';
import Movies from './components/Movies';
import Modal from './components/Modal';
import axios from 'axios';


/**
 * Main app component that renders the list of movies, as well
 * as the pop-up for more info
 * @returns -> JSX that is rendered by React
 */
const App = () => {
  const apikey = `10abef78`;
  const url = `https://www.omdbapi.com/?apikey=${apikey}&`;
  

  /**
   * setting up state using useState hook
   * searchTerm -> user input
   * movies -> list of movies provided by API 
   */
  const [state, setState] = useState({
    searchTerm: "",
    movies: [],
  });

  /**
   * state for modal pop-up
   * show -> modal showing or not
   */
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  /**
   * Sets search term based on user input
   * @param {*} event -> anytime a key is pressed by the user
   */
  const handleInput = (event) => {
    let s = event.target.value;

    setState(prevState => {
      return {...prevState, searchTerm: s}
    });

    //debugging
    //console.log(state.searchTerm);
  }

  /**
   * performs a GET request with given search term
   * sets the list of movies to be renered
   * @param {*} event -> event (the search term that is submitted with 'enter') 
   * 
   */
  const search = (event) => {
    if (event.key === 'Enter'){
      axios.get(url + "&s=" + state.searchTerm)
      .then(({ data }) => {
        let result = data.Search;
        setState({ movies: result });
      })
    }
  }

  /**
   * performs GET request with specified movie to retrieve more info about movie
   * sets selectedMovie for modal to show
   * @param {*} id -> imdb ID for the given movie 
   */
  const openModal = (id) => {
    if (state.movies.length > 0){
      setSelectedMovie(state.movies[0]);
    }
    axios(url + "&i=" + id).then(({ data }) => {
    let movie = data;
    setSelectedMovie(movie);
    setShow(true); 
    });
  }


// returning JSX to be rendered
  return(
  <div>
    <header>
        <h1>🎥Movies🎥</h1>
    </header>

    <main className="main">
        <Search handleInput={handleInput} search={search} />
        <Movies movies={state.movies} openModal={openModal} />
        
        {(typeof selectedMovie.Title != 'undefined')? 
        
        <Modal 
        movie={selectedMovie} show={show} setShow={setShow} 
        onClose={() => setShow(false)} 
        /> : false} 

    </main>
    
  </div>
  
  );
}

export default App;
