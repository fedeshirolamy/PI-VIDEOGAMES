import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { addGenre, getGenres } from '../actions/index'



export default function AddVideogame(){
    const dispatch = useDispatch()
    const allGenres = useSelector((state) => state.genres)
    const genresPost = useSelector((state) => state.genresPost )

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

    function handleGenreClick(e) {
        
        dispatch(addGenre(e.target.value))
        console.log(e.target.value)
    }

    
    

    return(
        <div>
            <Link to='/home'>
                <button className="btn" >Volver</button>
            </Link>
            <h1>Crear Juego</h1>
            <form className="form" >
                <div>
                    <label className=".form input">Nombre</label>
                    <input
                    type = 'text'
                    value = {input.name}
                    name = 'name'
                    />
                </div>
                <div>
                    <label className=".form input">Description</label>
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
                    <label>Géneros</label>
                    <select onChange={ e => handleGenreClick(e)}>
                        <option value='All' key='unique1'>
                            All
                        </option>
                        {allGenres.map((el) => {
                            return (
                                <option value={el.name} key={el.id}>{el.name}</option>
                            )
                        })}
                    </select>
                    <label>{
                        genresPost.map(e => <>{ ` *${e}* ` }</>)
                    }</label>
                </div>
                <div>
                    <label className=".form input">Plataformas</label>
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
