import React, { Component, useEffect, useState } from 'react';






const UserData = () => {


    const[data, setData]=useState(null);
    const[loading, setLoading]=useState(true);

    useEffect(async()=>{
          const response= await fetch("https://jsonplaceholder.typicode.com/users");
          const value= await response.json();
          setData(value);
          setLoading(false);
        //   console.log(value.length);

    }, []);



    return (
        <div>
            <h1>
                This is UserData
            </h1>
            <table>
                <thead>
                    <tr>
                        <td className="col-id">Id</td>
                        <td className="col-name">Name</td>
                        <td className="col-username">Username</td>
                        <td className="col-email">Email</td>
                        <td className="col-address">Address</td>
      
                    </tr>
                </thead>

            </table>
            {
                
                !loading &&data.map((list)=>(
                    <div >
                        <table>      
                            <tbody>
                                <tr>
                                    <td className="col-id">{list.id}</td>
                                    <td className="col-name">{list.name}</td>
                                    <td className="col-username">{list.username}</td>
                                    <td className="col-email">{list.email}</td>
                                    <td className="col-address">{list.address.street}</td>

                                </tr>
                            </tbody>
                        </table>

                </div>

                ))
            

            }

        </div>
      );
}
 
export default UserData;