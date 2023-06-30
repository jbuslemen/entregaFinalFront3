import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initialState, useContexGlobal } from "./utils/global.context";

const CardFav = ({ name, username, id }) => {
  const { state, dispatch } = useContexGlobal();
  const [isFavorite, setIsFavorite] = useState(false);

  const removeFav = () => {
   
    if (state.dentistasFav.length >=0) {
      const updatedFavorites = state.dentistasFav.filter((card) => card.id !== id);
      dispatch({ type: "delete_fav", payload: updatedFavorites });
      alert("Este dentista fue eliminado de tus favoritos");
      setIsFavorite(false)
    } else {
      alert("Este dentista no puede ser eliminado de tus favoritos");
      localStorage.removeItem('favoritos')
    }
  };
  
  return (
    <div key={id} className="card">
      <Link to={"/detail/" + id}>
        <div>
          <img
            className="img-doc"
            src="./images/doctor.jpg"
            alt="Imagen Del Doctor"
          />
          <h3>{name}</h3>
          <p>{username}</p>
        </div>
      </Link>

      <Button variant="contained" onClick={removeFav}>
        {"Eliminar de Favoritos"}
      </Button>
    </div>
  );
};

export default CardFav;
