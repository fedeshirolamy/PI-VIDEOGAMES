import axios from 'axios'

export const VIDEOGAMES = "VIDEOGAMES";
export const GENRES_FILTER = 'GENRES_FILTER'
export const CREATED_FILTER = "CREATED_FILTER"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_GENRES = "GET_GENRES"
export const POST_VIDEOGAME = "POST_VIDEOGAME"

export function getVideogames() {
    return async function(dispatch) {
        const result = await axios.get('http://localhost:3001/videogames')
        return dispatch({
            type: VIDEOGAMES,
            payload: result.data
        }); 
    };
};

export function getGenres(){
    return async function(dispatch){
        const info = await axios.get('http://localhost:3001/genres')
        return dispatch({
            type: GET_GENRES,
            payload: info.data
        })
    }
}

export function postVideogame(payload){
    return async function(){
        const response = await axios.post('http://localhost:3001/videogame', payload)
        return response
    }
}

export function genresFilter(payload) {
    return {
        type: GENRES_FILTER,
        payload
    }
}

export function createdFilter(payload){
    return{
        type: CREATED_FILTER,
        payload
    }
}

export function orderByName(payload){
    return{
       type: ORDER_BY_NAME,
        payload 
    }
}

export function getVideoamesByName(name){
    return async function(dispatch){
        try{
            var json = await axios.get('http://localhost:3001/videogames?name=' + name)
            return dispatch({
                type: GET_BY_NAME,
                payload: json.data
            })
        } catch (error){
            console.log(error)
        }
    }
}







