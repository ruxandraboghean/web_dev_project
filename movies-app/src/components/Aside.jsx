import React from "react";
import { Navbar } from "./Navbar";

// Andreea - componenta care integreaza meniul de navigare

export const Aside = ({ setCurrentMenuItem, currentMenuItem }) => {
  return (
    <aside className="aside_container">
      <Navbar
        setCurrentMenuItem={setCurrentMenuItem}
        currentMenuItem={currentMenuItem}
      />
    </aside>
  );
};
