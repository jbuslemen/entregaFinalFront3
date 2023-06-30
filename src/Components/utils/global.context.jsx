import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

const ContextGlobal = createContext();

export const initialState = {
  theme: JSON.parse(localStorage.getItem('theme')) || false,
  dentista: [],
  dentistasFav: JSON.parse(localStorage.getItem("favoritos")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "get_list":
      return { ...state, dentista: action.payload };
    case "get_list_fav":
      return { ...state, dentistasFav: action.payload };
    case "dark":
      return { ...state, theme: action.payload };
    case "delete_fav":
      return { ...state, dentistasFav: action.payload };
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com/users";

  // const [modoOscuro, setModoOscuro] = useState()

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(url).then((resp) => {
      dispatch({ type: "get_list", payload: resp.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(state.dentistasFav));
  }, [state.dentistasFav]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useContexGlobal = () => useContext(ContextGlobal);
