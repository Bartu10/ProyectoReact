import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlayer } from '../api'

const Jugador = () => {

    const [Jugador, setJugador] = useState(null)
    const params = useParams()
    const [isFavorite, setIsFavorite] = useState(localStorage.getItem(params.username) === 'true');

    function handleClick() {
      let listado = JSON.parse(localStorage.getItem('listado')) || [];
      if (isFavorite) {
        for(let x in listado){
          if (listado[x].name == params.name){
            listado.splice(listado[n],1)
          } 
        }
        
        setIsFavorite(false);
      } else {
        listado.push(Jugador)
        localStorage.setItem("listado",JSON.stringify(listado));
        setIsFavorite(true);
      }
    }

    useEffect(() => {
      getPlayer(params.username, setJugador)
    }, [])
    return (
    <div className='Jugador'>
    {
      Jugador !== null ? (
        <div className='perfil'>
            <img className="jugador" id ="avatar" src={Jugador.avatar} alt="Avatar"></img>
            <h2>{Jugador.rank}</h2>
            <h2>{Jugador.username}</h2>
            <h2>{Jugador.title}</h2>
            <h2>Status : {Jugador.status}</h2>
            <img className="jugador" id="flag" src={`https://flagsapi.com/${Jugador.country.slice(-2)}/shiny/64.png`}></img>
            <button onClick={handleClick}>
            {isFavorite ? 'Dejar de Seguir' : 'Seguir'} 
            </button>
        </div>

      ) : ("Cargando")   
    }
    </div>

  )
}

export default Jugador