import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useContexGlobal } from "./utils/global.context";

const Card = ({ id, name, username }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { state, dispatch } = useContexGlobal();

  const addFav = () => {
    let foundObjet = state.dentistasFav.find((obj) => obj.id === id);

    if (foundObjet) {
      setIsFavorite(true)
      alert("este dentista ya esta en tu lista de favoritos");
    } else {
      dispatch({
        type: "get_list_fav",
        payload: [
          ...state.dentistasFav,
          { name: name, userName: username, id: id },
        ],
      });  
      setIsFavorite(true);};
  };



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
      <Link to={"detail/" + id}>
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

      <Button variant="contained" onClick={isFavorite ? removeFav : addFav}>
        {isFavorite ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
      </Button>
    </div>
  );
};

export default Card;
