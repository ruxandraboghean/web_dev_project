import React, { useState } from "react";
import { Link } from "react-router-dom";
import cinema from "../images/cinema.png";
import series from "../images/tv-show.png";
import home from "../images/home.png";

export const Navbar = ({ setCurrentMenuItem }) => {
  return (
    <nav className="navbar_container">
      <Link
        to="/"
        className="navbar_item"
        onClick={() => setCurrentMenuItem("home")}
      >
        <img
          src={home}
          alt="cinema"
          className=" navbar_item_child cinema"
          id="home"
        />
        <span className="navbar_item_child">Home</span>
      </Link>
      <Link
        to="/"
        className="navbar_item"
        onClick={() => setCurrentMenuItem("movies")}
      >
        <img src={cinema} alt="cinema" className="navbar_item_child cinema" />
        <span className="navbar_item_child">Movies</span>
      </Link>
      <Link
        to="/"
        className="navbar_item"
        onClick={() => setCurrentMenuItem("series")}
      >
        <img src={series} alt="cinema" className="navbar_item_child cinema" />
        <span className="navbar_item_child">Series</span>
      </Link>
    </nav>
  );
};
