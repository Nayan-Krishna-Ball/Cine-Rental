//
import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { MovieContext, ThemeContext } from "./Context";
import Page from "./Page";
import { cartRuducer, initialState } from "./Reducers/CartRudcers";

function App() {
  // const [cartData, setCartData] = useState([]);  // useReducer for that it replace
  const [darkMode, setDarkMode] = useState(true);

  const [state, dispatch] = useReducer(cartRuducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
