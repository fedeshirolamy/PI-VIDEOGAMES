import React from "react";
import '../index.css'

export default function Card({name, background_image, genres, index}){
    return(
        <section key={index}>
            <article >
                <h4>{name}</h4>
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
            </article>
        </section>
    )
}