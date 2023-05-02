import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import { EmptyData } from "../EmptyData";
import { SearchData } from "../SearchData";
import { Movies } from "./Movies";

export const SearchMovie = ({ data, type }) => {
  console.log(data, "data");
  const [searchedTitle, setSearchedTitle] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterData = () => {
    const newData = data.filter((item) => {
      return item.titleText.text
        .toLowerCase()
        .includes(searchedTitle.toLowerCase());
    });
    console.log(newData, "newData");
    setFilteredData(newData);
    console.log(filteredData, "filteredData");
  };

  return (
    <>
      <div className="search_container">
        <label htmlFor="movie">
          <IoIcons.IoMdSearch className="search_icon" />
        </label>
        <input
          type="text"
          placeholder="search seria"
          onChange={(e) => setSearchedTitle(e.target.value)}
          value={searchedTitle}
          className="search_input"
          id="movie"
          onKeyDown={handleFilterData}
        />
      </div>
      {searchedTitle === "" ? (
        <SearchData type={type} />
      ) : filteredData?.length ? (
        <Movies data={filteredData} />
      ) : (
        <EmptyData type={type} />
      )}
    </>
  );
};
