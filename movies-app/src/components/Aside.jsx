import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Aside = ({ setCurrentMenuItem }) => {
  return (
    <aside className="aside_container">
      <Navbar setCurrentMenuItem={setCurrentMenuItem} />
    </aside>
  );
};
