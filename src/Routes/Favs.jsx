import React from "react";
import Card from "../Components/Card";
import CardFav from "../Components/CardFav"
import { useContexGlobal } from "../Components/utils/global.context";



const Favs = () => {
  const {state}=useContexGlobal()
  
  const favoritesList = state.dentistasFav;
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoritesList &&
          favoritesList.map((dentista) => (
              <CardFav className= "cardFav"
                name={dentista.name}
                username={dentista.username}
                id={dentista.id}
              />
      
          ))}
      </div>
    </>
  );
};
export default Favs;


