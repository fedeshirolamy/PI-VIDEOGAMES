import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions";
import { useEffect } from "react";

export default function Detail(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(props.match.params.id))
    }, [dispatch])
    
    const myVideogame = useSelector((state) => state.details)
    // console.log(myVideogame)

    return (
        <div>
            {
                myVideogame ?
                    <div>
                        <h3>{myVideogame.name}</h3>
                        <img src={myVideogame.background_image} alt="" width='300px' height='300px' />
                        <h5>Genres:</h5>{myVideogame.genres}
                        <h5>Platforms:</h5>
                        <ul>{myVideogame.platforms}</ul>
                        <h4>Fecha de lanzamiento: {myVideogame.releaseDate}</h4> 
                        <h4>Rating: <h5>{myVideogame.rating}</h5></h4>
                        <h5>Description:</h5>
                        <p>{myVideogame.description}</p>
                    </div> :
                    <p>...Loading...</p>
            }
            <Link to='/home'>
                <button className="btn">Volver</button>
            </Link>
        </div>
    )
}