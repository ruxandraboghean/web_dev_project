import React, { useState } from "react";
import { Link } from "react-router-dom";
import cinema from "../images/cinema.png";
import series from "../images/tv-show.png";
import home from "../images/home.png";

//Andreea - bara de navigare intre meniurile Home, Series, Movies

export const Navbar = ({ setCurrentMenuItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setCurrentMenuItem(item);
    setActiveItem(item);
    console.log(activeItem);
  };

  return (
    <nav className="navbar_container">
      <Link
        to="/"
        className={`navbar_item ${activeItem === "home" ? "selected" : ""}`}
        onClick={() => handleClick("home")}
      >
        <img
          src={home}
          alt="cinema"
          className="navbar_item_child cinema"
          id="home"
        />
        <span className="navbar_item_child" id="movie_span">
          Home
        </span>
      </Link>
      <Link
        to="/"
        className={`navbar_item ${activeItem === "series" ? "selected" : ""}`}
        onClick={() => handleClick("series")}
      >
        <img src={series} alt="cinema" className="navbar_item_child cinema" />
        <span className="navbar_item_child" id="movie_span">
          Series
        </span>
      </Link>
      <Link
        to="/"
        className={`navbar_item ${activeItem === "movies" ? "selected" : ""}`}
        onClick={() => handleClick("movies")}
      >
        <img src={cinema} alt="cinema" className="navbar_item_child cinema" />
        <span className="navbar_item_child" id="movie_span">
          Movies
        </span>
      </Link>
    </nav>
  );
};
