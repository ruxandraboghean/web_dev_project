import React from "react";
import { Link } from "react-router-dom";
import cinema from "../images/cinema.png";
import series from "../images/tv-show.png";
import home from "../images/home.png";

export const Navbar = () => {
  return (
    <nav className="navbar_container">
      <Link to="/" className="navbar_item">
        <img
          src={home}
          alt="cinema"
          className=" navbar_item_child cinema"
          id="home"
        />
        <span className="navbar_item_child">Home</span>
      </Link>
      <Link to="/movies" className="navbar_item">
        <img src={cinema} alt="cinema" className="navbar_item_child cinema" />

        <span className="navbar_item_child">Movies</span>
      </Link>
      <Link to="/series" className="navbar_item">
        <img src={series} alt="cinema" className="navbar_item_child cinema" />

        <span className="navbar_item_child">Series</span>
      </Link>
    </nav>
  );
};
