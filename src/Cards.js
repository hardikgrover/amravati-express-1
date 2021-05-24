import React from 'react'
import "./Cards.css";
import data from "./data";

const Cards = () => {
   
    return (
        <div className="main row container">
            {
                data.map(({name, url}) =>{
                    return(
                        <div class="card col-4">
                            <div class="image">
                                <img src={url}/>
                            </div>
                            <div class="title">
                                <h1>{name}</h1>
                            </div>
                            <div class="des">
                                <p></p>
                                <button>Show All</button>
                            </div>
                        </div>
                    )
                })
            }
            <div class="card col-4">
                <div class="image">
                    <img src="https://image.flaticon.com/icons/png/512/755/755195.png"/>
                </div>
                <div class="title">
                    <h1>BARBER SHOP</h1>
                </div>
                <div class="des">
                    <p></p>
                    <button>Read More...</button>
                </div>
            </div>
        </div>
    ) 
}

export default Cards
