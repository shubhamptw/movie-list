import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css'



const MainNavigation = () => {

    return ( 

        <div className="wrapper-navigation">
            <table>
                <thead>
                    <tr>
                        <Link to="/">
                            <td className="nav-col" >Movie</td>
                        </Link>
                        <Link to="/userdata">
                            <td className="nav-col">User</td>
                        </Link>
                        <Link to="/pagination">  
                            <td className="nav-col">Pagination</td>
                        </Link>
                        
                    </tr>
                </thead>
            </table>

        </div>

     );
}
 
export default MainNavigation;