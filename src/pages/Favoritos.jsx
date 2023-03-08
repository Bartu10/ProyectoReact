
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 

const Favoritos = () => {
  const [favorites, setFavorites] = useState(false);
  const navigate = useNavigate();
  const deleteFavorites = () => {
    localStorage.removeItem('jugador');
    navigate("/leaderboard");
  }

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('jugador')));
    console.log(favorites)
   }, []);


   return (
    <div>
      {favorites == false || favorites == null ?   (
        <Link to={`/leaderboard`}><h2 className='fraseFav'>Escoge a tu jugador favorito</h2></Link>) : (
        <div className='Jugador'>
        <div className='perfil'>
          <img className="jugador" id ="avatar" src={favorites.avatar} alt="Avatar"></img>
          <h2>{favorites.rank}</h2>
          <h2>{favorites.username}</h2>
          <h2>{favorites.title}</h2>
          <h2>Status : {favorites.status}</h2>
          <button onClick={deleteFavorites}>'Dejar de Seguir'</button>
        </div></div>
      )}
    </div>
  );}

export default Favoritos