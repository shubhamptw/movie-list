import React, { Component, useState } from 'react';
import './HomePage.css'
import {Link} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import { actionDelete } from '../action';
import userEvent from '@testing-library/user-event';
import {useEffect} from 'react'


const HomePage = () => {

    const myMovie=useSelector(state=>state);
    let localMovieStore=[...myMovie];
    let [duplicateMovie, setDuplicateMovie]=useState(myMovie);
    const dispatch=useDispatch();
    console.log(myMovie);

    useEffect(()=>{
        setDuplicateMovie(myMovie);

    }, [myMovie]);

    //console



    const handleDeleteClicked=(e)=>{
        const updatedList=myMovie.filter((movie)=>{
            return movie.movieId!=e.target.value;
        });
        
        dispatch(actionDelete(updatedList));
        // alert(e.target.value);

    }
    const handleSortingChanged=(e)=>{
        console.log("Sort by"+e.target.value);
        sortTheList(e.target.value);

    }
    const sortTheList=(value)=>{
        
        switch (value){
            case "name":
                    localMovieStore.sort((a,b)=>(a.movieName > b.movieName) ? 1 : ((a.movieName < b.movieName) ? -1 : 0));
                break;
            case "rating":
                     localMovieStore.sort((a,b)=>(parseInt(a.movieRating) > parseInt(b.movieRating)) ? 1 : ((parseInt(a.movieRating) < parseInt(b.movieRating)) ? -1 : 0));
                break;
            case "year":
                     localMovieStore.sort((a,b)=>(parseInt(a.movieYear) > parseInt(b.movieYear)) ? 1 : ((parseInt(a.movieYear)< parseInt(b.movieYear)) ? -1 : 0));
                break;
            case "id":
                localMovieStore=[...myMovie];
                break;
                
        }
        setDuplicateMovie(localMovieStore);
        console.log(localMovieStore);

       
    }


    return (
        <div className="wrapper-home">
            <div className="search-bar">

            </div>
            <div>
                <Link to='/form' > 
                     <button className="button-add-movie"> Add Movie</button>
                </Link>

            </div>


            <div >
                <label htmlFor="sorting" className="label-sorting" onChange={handleSortingChanged} >
                        <select name="sorting-list" id="sorting-list" >
                            <option value="id">Id</option>
                            <option value="name">Name</option>
                            <option value="year">Year</option>
                            <option value="rating">Rating</option>

                        </select>
                </label>
            </div>
            
            <div >

                <table>
                    <thead>
                        <tr>
                            <td className="col1">Name</td>
                            <td className="col2">Year</td>
                            <td className="col3">Rating</td>
                            <td className="col4">Genre</td>
                            <td className="col5">Description</td>
                            <td className="col6">Edit</td>
                            <td className="col7">Delete</td>
                        </tr>
                    </thead>

                </table>

                {
   
                    duplicateMovie.map((movie)=>(
                        <div className>
                            <table>      
                                <tbody>
                                    <tr>
                                        <td className="col1">{movie.movieName}</td>
                                        <td className="col2">{movie.movieYear}</td>
                                        <td className="col3">{movie.movieRating}</td>
                                        <td className="col4">{movie.movieGenre}</td>
                                        <td className="col5">{movie.movieDescription}</td>
                                        <td className="col6">
                                            <Link to={{pathname:'/form', state:movie.movieId}}>
                                                <button value={movie.movieId}>Edit</button>
                                            </Link>

                                            </td>
                                        <td className="col7"><button value={movie.movieId}onClick={handleDeleteClicked}>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
   
                    </div>
    
                    ))
                }


            </div>



        </div>
      );
}
 
export default HomePage;