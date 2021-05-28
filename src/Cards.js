import React from 'react'
import { NavLink } from 'react-router-dom';
// import "./Cards.css";
import "./Card.css";
import data from "./data";

const Cards = () => {
   
    return (
        // <div className="main row container">
        //     {
        //         data.map(({name, url}) =>{
        //             return(
        //                 <div class="card col-4">
        //                     <div class="image">
        //                         <img src={url} alt="shops"/>
        //                     </div>
        //                     <div class="title">
        //                         <h1>{name}</h1>
        //                     </div>
        //                     <div class="des">
        //                         <p></p>
        //                         <button>Show All</button>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     }
        // </div>

        <>
            <div className="my-5">
                <h1 className="text-center" style={{fontSize: "60px"}} >SHOPS</h1>
            </div>
            <div className="container mb-5" >
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            {
                                data.map(({name, url}) =>{
                                    return(
                                        <div className="col-md-4 col-10 mx-auto" >
                                            <div className="card" >
                                                <img src={url} alt="img" />
                                                <div className="card-body" >
                                                    <h1 className="card-title font-weight-bold" >{name}</h1>
                                                    <p className="card-text" ></p>
                                                    <NavLink to="" className="btn btn-primary" >
                                                        show all
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default Cards
