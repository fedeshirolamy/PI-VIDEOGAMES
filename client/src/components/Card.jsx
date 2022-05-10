import React from "react";
import './card.css'

export default function Card({name, background_image, genres}){
    return(
        <div className='container'>
            <div className="card">
                <h3>{name}</h3>
                <img 
                src={background_image} 
                alt='img not found' 
                width='200px' 
                height='250px'
                />
                <h5>{genres.map((e, index)=>(
                <div key={index}>
                    <i>{e}</i>
                </div>
                ))}
                </h5> 
            </div>
             
            
            
            
            
            
        </div>
    )
}