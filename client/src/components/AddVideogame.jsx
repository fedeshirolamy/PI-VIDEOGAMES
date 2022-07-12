import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { addGenre, addPlatform, getGenres, getPlatforms, postVideogame } from '../actions/index'

export default function AddVideogame(){
    const dispatch = useDispatch()
    const history = useHistory()
    const allGenres = useSelector((state) => state.genres)
    const allPlatforms = useSelector((state) => state.platforms)
    const genresPost = useSelector((state) => state.genresPost)
    const platformsPost = useSelector((state) => state.platformsPost)
    console.log(platformsPost)

    const [input, setInput] = useState({
        name: '', 
        description: '', 
        background_image: '',
        releaseDate: '', 
        rating: '', 
        genres: [], 
        platforms: []
    })
    
    useEffect(()=>{
        dispatch(getGenres())
    }, [])

    useEffect(()=>{
        dispatch(getPlatforms())
    }, [])

    function handleGenreClick(e) {
        dispatch(addGenre(e.target.value))
        console.log(e.target.value)
    }

    function handlePlatformClick(e) {
        dispatch(addPlatform(e.target.value))
        console.log(e.target.value)
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value, 
        })
        console.log(input)
    }

    function handleSelectGenres(e) {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]
        })
    }

    function handleSelectPlatforms(e) {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        dispatch(postVideogame(input))
        alert('Game created succesfully')
        setInput({
            name: '', 
            description: '', 
             background_image: '',
            releaseDate: '', 
            rating: '', 
            genres: [], 
            platforms: []
        })
        history.push('/home')
    }


    return(
        <div>
            <Link to='/home'>
                <button className="btn" >Volver</button>
            </Link>
            <h1>Crear Juego</h1>
            <form className="form" onSubmit={e=>handleSubmit(e)}>
                <div>
                    <label className=".form input">Nombre</label>
                    <input
                    type = 'text'
                    value = {input.name}
                    name='name'
                    onChange = {handleChange}    
                    />
                </div>
                <div>
                    <label className=".form input">Description</label>
                    <input
                    type = 'text'
                    value = {input.description}
                    name='description'
                    onChange = {handleChange} 
                    />
                </div>
                <div>
                    <label className=".form input">Imagen</label>
                    <input
                    type = 'text'
                    value = {input. background_image}
                    name= 'background_image'
                    onChange = {handleChange} 
                    />
                </div>
                <div>
                    <label>Fecha de lanzamiento</label>
                    <input
                    onChange = {handleChange} 
                    type = 'date'
                    value = {input.releaseDate}
                    name = 'releaseDate'
                    />
                </div>
                <div>
                    <label>Rating</label>
                    <input
                    onChange = {handleChange} 
                    type = 'number'
                    value = {input.rating}
                    name = 'rating'
                    />
                </div>
                <div>
                    <label>Géneros</label>
                    
                    <select onChange={e => handleSelectGenres(e)}>
                        <option value='All' key='unique1'>
                            All
                        </option>
                        {allGenres.map((el) => {
                            return (
                                <option value={el.name} key={el.id}>{el.name}</option>
                            )
                        })}
                    </select>
                    <ul><li>{input.genres.map(e=>e + " ,")}</li></ul>
                </div>

                <div>
                    <label>Plataformas</label>

                    <select onChange={ e => handleSelectPlatforms(e)}>
                        <option value='All' key='unique2'>
                            All
                        </option>
                        {allPlatforms.map((el) => {
                            return (
                                <option value={el.name} key={el.id}>{el.name}</option>
                            )
                        })}
                    </select>
                    <ul><li>{input.platforms.map(e=>e + " ,")}</li></ul>
                </div>
                <button className="btn" type='submit'>crear personaje</button>
            </form>
        </div>
    )
}
