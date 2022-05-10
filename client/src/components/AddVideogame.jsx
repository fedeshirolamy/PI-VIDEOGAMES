import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { postVideogame, getGenres } from '../actions/index'


export default function AddVideogame(){
    const dispatch = useDispatch()
    const genres = useSelector((state)=>state.genres)

    const [input, setInput] = useState({
        name: '', 
        description: '', 
        releaseDate: '', 
        rating: '', 
        genres: [], 
        platforms: []
    })
    
    useEffect(()=>{
        dispatch(getGenres())
    }, [])

    return(
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crear Juego</h1>
            <form>
                <div>
                    <label>Nombre</label>
                    <input
                    type = 'text'
                    value = {input.name}
                    name = 'name'
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                    type = 'text'
                    value = {input.description}
                    name = 'description'
                    />
                </div>
                <div>
                    <label>Fecha de lanzamiento</label>
                    <input
                    type = 'date'
                    value = {input.releaseDate}
                    name = 'releaseDate'
                    />
                </div>
                <div>
                    <label>Rating</label>
                    <input
                    type = 'number'
                    value = {input.rating}
                    name = 'rating'
                    />
                </div>
                <div>
                    <label>Generos</label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Action'
                        name = 'Action'
                        /> 
                        Action
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Indie'
                        name = 'Indie'
                        /> 
                        Indie
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Adventure'
                        name = 'Adventure'
                        /> 
                        Adventure
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'RPG'
                        name = 'RPG'
                        /> 
                        RPG
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Strategy'
                        name = 'Strategy'
                        /> 
                        Strategy
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Shooter'
                        name = 'Shooter'
                        /> 
                        Shooter
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Casual'
                        name = 'Casual'
                        /> 
                        Casual
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Simulation'
                        name = 'Simulation'
                        /> 
                        Simulation
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Puzzle'
                        name = 'Puzzle'
                        /> 
                        Puzzle
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Arcade'
                        name = 'Arcade'
                        /> 
                        Arcade
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Platformer'
                        name = 'Platformer'
                        /> 
                        Platformer
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Racing'
                        name = 'Racing'
                        /> 
                        Racing
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Massively Multiplayer'
                        name = 'Massively Multiplayer'
                        /> 
                        Massively Multiplayer
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Sports'
                        name = 'Sports'
                        /> 
                        Sports
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Fighting'
                        name = 'Fighting'
                        /> 
                        Fighting
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Family'
                        name = 'Family'
                        /> 
                        Family
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Board Games'
                        name = 'Board Games'
                        /> 
                        Board Games
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Educational'
                        name = 'Educational'
                        /> 
                        Educational
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        value = 'Card'
                        name = 'Card'
                        /> 
                        Card
                    </label>
                    
                </div>
                <div>
                    <label>Plataformas</label>
                    <label></label>
                    <input
                    type = 'text'
                    value = {input.platforms}
                    name = 'platforms'
                    />
                </div>
            </form>
        </div>
    )
}
