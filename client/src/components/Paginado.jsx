import React from "react";
import './paginado.css'

export default function Paginado({gamesPerPage, allGames, paginado}){
    const pageNumbers = []

    for(let i=0; i<=Math.ceil(allGames/gamesPerPage); i++){
        pageNumbers.push(i+1)
    }
    return(
        <nav className='paginacion'>
            <ul>
                {
                    pageNumbers?.map(number=>(
                        <li key={number}>
                            <a onClick={()=>paginado(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}




{/* <section class="paginacion">
			<ul>
				<li><a href="pagina1.html" class="active">1</a></li>
				<li><a href="pagina2.html">2</a></li>
				<li><a href="pagina3.html">3</a></li>
				<li><a href="pagina4.html">4</a></li>
				<li><a href="pagina5.html">5</a></li>
			</ul>
</section> */}