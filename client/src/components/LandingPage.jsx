import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'



export default function LandingPage(){
    return(
        <div>
            <h1>Welcome</h1>
            <Link to='/home'>
                <button className='btn'>Ingresar</button>
            </Link>
        </div>
    )
}