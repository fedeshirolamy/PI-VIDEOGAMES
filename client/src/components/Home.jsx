import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import  {getVideogames, genresFilter, createdFilter,orderByName}  from '../actions/index';
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import './Home.css'

export default function Home(){
    
    const dispatch = useDispatch();
    const allGames = useSelector ((state)=>state.videogames)
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
        dispatch(getVideogames());
    },[dispatch])

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
            <Link className="link" to='/videogame'>Crear juego</Link><br></br>
            <button onClick={e=>{handleClick(e)}}>Volver a cargar los juegos</button>
            <div>
                <select onChange={e=>handleOrder(e)}>
                    <option value='rating'>Rating</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select onChange={e => handleFilterGenre(e)}>
                    <option value='All'>Todos</option>
                    <option value='Action'>Action</option>
                    <option value='Indie'>Indie</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='RPG'>RPG</option>
                    <option value='Strategy'>Strategy</option>
                    <option value='Shooter'>Shooter</option>
                    <option value='Casual'>Casual</option>
                    <option value='Simulation'>Simulation</option>
                    <option value='Puzzle'>Puzzle</option>
                    <option value='Arcade'>Arcade</option>
                    <option value='Platformer'>Platformer</option>
                    <option value='Racing'>Racing</option>
                    <option value='Massively Multiplayer'>Massively Multiplayer</option>
                    <option value='Sports'>Sports</option>
                    <option value='Fighting'>Fighting</option>
                    <option value='Family'>Family</option>
                    <option value='Board Games'>Board Games</option>
                    <option value='Educational'>Educational</option>
                    <option value='Card'>Card</option>
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

                <div>
                    {
                    currentGames?.map((c)=>{
                        return (
                            <fragment>
                                <Link to={"/home" + c.id}>
                                    <Card name={c.name} background_image={c.background_image} genres={c.genres} key={c.id}/>
                                </Link>
                            </fragment>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}