import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {

    // array of movie objects
    const movies = [
        {
            Title: 'The Matrix',
            Genre: 'Sci-Fi',
            ReleaseYear: 1999
        },
        {
            Title: 'La La Land',
            Genre: 'Musical',
            ReleaseYear: 2016
        },
        {
            Title: 'The Dark Knight',
            Genre: 'Action',
            ReleaseYear: 2008
        },
        {
            Title: 'Spider-Man: Into the Spider-Verse',
            Genre: 'Animation',
            ReleaseYear: 2018
        },
        {
            Title: 'Mad Max: Fury Road',
            Genre: 'Action',
            ReleaseYear: 2015
        },
        {
            Title: 'Interstellar',
            Genre: 'Adventure',
            ReleaseYear: 2014
        },
        {
            Title: 'The Shawshank Redemption',
            Genre: 'Drama',
            ReleaseYear: 1994
        },
        {
            Title: 'The Revenant',
            Genre: 'Action',
            ReleaseYear: 2015
        }
    ];

    // stateless function for selected genre; use useState()
    const [selectedGenre, setSelectedGenre] = useState('');

    // stateless function for filtered movies based on selected genre
    const filteredMovies = movies.filter(movie => {
        if(selectedGenre) {
            return movie.Genre === selectedGenre;
        }
        else {
            return true;
        }
    });

    // stateless function for clicking movie title
    // use ` and not '
    const titleClick = (movieTitle) => { 
        alert(`${movieTitle} selected.`);
    }

    return (
        <div className='whole'>
            <h1>Movie List</h1>
            {/*
            how to do dropdown filter
            Reference: https://www.shecodes.io/athena/5480-how-to-create-a-dropdown-filter-in-react-functional-component
            onChange is an event handler to respond to changes made. 
            Reference: https://www.geeksforgeeks.org/dropdown-onchange-event-using-reactjs/ 
            */}
            <div className='genredropdown'>
                <select id='genre' value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)}>
                    <option value=''>All genres</option>
                    <option value='Action'>Action</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='Animation'>Animation</option>
                    <option value='Drama'>Drama</option>
                    <option value='Sci-Fi'>Sci-Fi</option>
                </select>
            </div>

            {/*
            onClick template: <button onClick={handleClick}>Click Me</button>
            the event handler is added to the list element which represent the movie and not just the title
            Reference: https://react.dev/learn/responding-to-events
            */}
            <div>
                <ul className='movie-list'>
                    {filteredMovies.map(movie => (
                        <li className='movie-item'
                            onClick={() => titleClick(movie.Title)}>
                            <h2>{movie.Title}</h2>
                            <p>Genre: {movie.Genre}</p>
                            <p>Release year: {movie.ReleaseYear}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MovieList;