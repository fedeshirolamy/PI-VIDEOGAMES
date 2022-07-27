import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import  {getVideogames, genresFilter, createdFilter,orderByName, getGenres}  from '../actions/index';
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import '../index.css'

export default function Home(){
    
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.videogames)
    const allGenres = useSelector((state) => state.genres)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(15)
    const indexOfLastGame = currentPage * gamesPerPage //15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage //0
    const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame) //tomar indice del 1º y el ultimo
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        console.log('genres')
        dispatch(getGenres());
    },[allGames])

    useEffect(() => {
        console.log('games')
        dispatch(getVideogames());
    },[])

    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames());
    }

    function handleFilterGenre(e){
        dispatch(genresFilter(e.target.value))
    }

    function handleFilterCreated(e){
        dispatch(createdFilter(e.target.value))
    }

    function handleOrder(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}` )
    }

    return (
        <div className='all'>
            <h1>Videogames</h1>
            <Link className="link" to='/videogame'>
                <button className="btn" >Crear Juego</button>
            </Link>
            <button onClick={e=>{handleClick(e)}} className='btn'>Volver a cargar los juegos</button>
            <div  >
                <select onChange={e=>handleOrder(e)}>
                    <option value='rating'>Rating</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select onChange={e => handleFilterGenre(e)}>
                    <option value='All' key='unique1'>All</option>
                    {allGenres.map((el) => {
                        return (
                            <option value={el.name} key={el.id}>{el.name}</option>
                        )
                    })}
                </select>
                <select onChange={e => handleFilterCreated(e)}> 
                    <option value='All'>Api+DB Games</option>
                    <option value='DB'>Db Games</option>
                    <option value='API'>Api Games</option>
                </select>
                <Paginado 
                gamesPerPage={gamesPerPage}
                allGames={allGames.length}
                paginado={paginado}
                />

                <SearchBar/>

                <ul className='products'>
                    {
                    currentGames?.map((c, index)=>{
                        return (
                            <li  key = {index} className='product'>
                                <Link to={"/videogame/" + c.id}>
                                    <Card name={c.name} background_image={c.background_image} genres={c.genres} key={c.id}/>
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}