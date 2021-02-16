import React, { Component } from 'react';
import './Form.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {actionDelete, actionEdit, actionAdd} from '/Users/oyo/Documents/ReactBasics/movie-list/src/action.js'

const Form = (props) => {

    const myMovie=useSelector(state=>state);
    const dispatch=useDispatch();


    const [movieId, setMovieId]=useState(0);
    const [movieName, setMovieName]=useState("");
    const [movieYear, setMovieYear]=useState("");
    const [movieGenre, setMovieGenre]=useState("");
    const [movieRating, setMovieRating]=useState("");
    const [movieDescription, setMovieDescription]=useState("");

    let movie={movieId, movieName, movieYear, movieGenre, movieRating, movieDescription};
    // console.log(props.location.state);

    useEffect(()=>{

           //if props is not undefined     ... to put data in form elements when edit is clicked
          if(props.location.state>=0){
              
             let index=props.location.state;
             console.log(index);
             let editMovie=myMovie.filter((movie)=>{
                 return movie.movieId==index;
             });

             setMovieId(editMovie[0].movieId);
             setMovieName(editMovie[0].movieName);
             setMovieRating(editMovie[0].movieRating);
             setMovieYear(editMovie[0].movieYear);
             setMovieGenre(editMovie[0].movieGenre);
             setMovieDescription(editMovie[0].movieDescription);

            //  console.log(editMovie);
          }
          
    },[]);


    const handleButtonSubmit=(e)=>{
        console.log(movie);

        //if edit is cliced
        if(props.location.state>=0){
            dispatch(actionEdit(movie));
        }
        else{

        //changing id each time form is submitted  and dispatch the object movie
        dispatch(actionAdd({...movie, movieId: myMovie.length>0?myMovie[myMovie.length-1].movieId+1:0}));

        }

        // alert('submit clicked');
    }
    return ( 
        <div className="wrapper-form">
            <form action="movieDetails">
                <label htmlFor="name">
                     Name
                    <input type="text" id="name" placeholder="Name of movie" value={movieName} onChange={e=>setMovieName(e.target.value)}/>
                </label>
                <label htmlFor="year">
                     Year
                    <input type="number" id="year" placeholder="Year of release" value={movieYear} onChange={e=>setMovieYear(e.target.value)}/>
                </label>

                <label htmlFor="genre">Genre:
                    <select name="genres" id="genres" onChange={e=>setMovieGenre(e.target.value)} value={movieGenre}>
                        <option value="">..choose an option</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="fiction">Fiction</option>
                        <option value="horror">Horror</option>
                        <option value="romantic">Romantic</option>
                    </select>
                </label>

                <label htmlFor="rating">
                     Rating
                    <input type="number" id="rating" placeholder="Ratings between 1-10" value={movieRating} onChange={e=>setMovieRating(e.target.value)}/>
                </label>

                <label htmlFor="description">
                    Description
                    <textarea name="description" id="description" placeholder="Write about the movie" value={movieDescription} onChange={e=>setMovieDescription(e.target.value)}/>
                </label>

                
                <Link to="/">
                     <button className='button-submit' 
                        id="submit-button"type='button' 
                        onClick={handleButtonSubmit}
                        
                        >Submit</button>
                </Link>



            </form>

        </div>

     );
}
 
export default Form;