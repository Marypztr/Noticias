import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Noti App</h1>
        <Link className="buttons" to="/Noticias">
          Ver Noticias
        </Link>
      </header>
    </div>
  );
};

export default Home;
