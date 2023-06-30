import Card from "../Components/Card";
import CardFav from "../Components/CardFav";
import { useContexGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Contex
const Home = () => {
  const { state } = useContexGlobal();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentista.map((dentista) => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}

      </div>
    </main>
  );
};

export default Home;
