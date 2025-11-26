//
import { useContext } from "react";
import "./App.css";
import MovieList from "./Cine/MoovieList";
import { ThemeContext } from "./Context";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
