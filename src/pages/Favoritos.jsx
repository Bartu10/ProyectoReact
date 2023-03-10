import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const deleteFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    localStorage.setItem('listado', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }

  useEffect(() => {
    const storedFavorites = localStorage.getItem('listado');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div>
      {favorites.length === 0 ? (
        <Link to={`/leaderboard`}><h2 className='fraseFav'>Escoge a tu jugador favorito</h2></Link>
      ) : (
        <div>
          <h2>Tus favoritos:</h2>
          {favorites.map((favorite, index) => (
            <div key={index} className='Jugador'>
              <div className='perfil'> 
                <img className="jugador" id="avatar" src={favorite.avatar} alt="Avatar"></img>
                <h2>{favorite.rank}</h2>
                <h2>{favorite.username}</h2>
                <h2>{favorite.title}</h2>
                <h2>Status: {favorite.status}</h2>
                <button onClick={() => deleteFavorite(index)}>Dejar de seguir</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;