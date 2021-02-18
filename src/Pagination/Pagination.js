import React, { Component, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { actionPaginate } from '../action';
import './Pagination.css'


const Pagination = () => {

    const myStorePaginationData=useSelector(state=>state.reducerPagination);
    const dispatch=useDispatch();
    // console.log(myStorePaginationData);


    const[data, setData]=useState(null);
    const[loading, setLoading]=useState(true);

    const[currentPage, setCurrentPage]=useState(0);
    const[pageCount, setPageCount]=useState(0);
    const perPage=20;
    console.log("re render");
    
    const [value, setValue]=useState(null);

    useEffect(async()=>{

           //if i've alredy fetched the data once and stored it in redux
          if(myStorePaginationData.length>0){
               setValue(myStorePaginationData);
          }

          else if(loading){
            const response= await fetch("https://jsonplaceholder.typicode.com/todos");
            setValue(await response.json());
            console.log("inside if")
          }
          console.log("inside");


        

    }, []);

    useEffect(()=>{
        if(value!=null){
            dispatch(actionPaginate(value));
            setPageCount(Math.ceil(value.length/perPage));
            const dataOnePage=value.slice(currentPage*perPage, currentPage*perPage+perPage);
            setData(dataOnePage);
            setLoading(false);

            console.log(myStorePaginationData);
            
        }

    }, [currentPage, value]);



    const handlePrevClicked=(e)=>{
        if(currentPage>0)
         setCurrentPage(currentPage-1);

    }
    const handleNextClicked=(e)=>{
        if(currentPage<pageCount-1)
         setCurrentPage(currentPage+1);

    }



    return (
        <div className="wrapper-pagination">
            <h1>
                This is Pagination
            </h1>
            <div>
                    <p>{currentPage+1}</p>
                    <button onClick={handlePrevClicked}>Prev</button>
                    <button onClick={handleNextClicked}>Next</button>
            </div>


            <table>
                <thead>
                    <tr>
                        <td className="col-id">Id</td>
                        <td className="col-title">Title</td>
                        <td className="col-completed">Completed</td>
      
                    </tr>
                </thead>

            </table>
            {console.log(loading)
            }

            {
    
                
                !loading && data.map((list)=>(
                    <div >
                        <table>      
                            <tbody>
                                <tr>
                                    <td className="col-id">{list.id}</td>
                                    <td className="col-title">{list.title}</td>
                                    <td className="col-completed">{list.completed.toString()}</td>
        
                                </tr>
                            </tbody>
                        </table>

                </div>

                ))
            

            }

            </div>
      );
}
 
export default Pagination;