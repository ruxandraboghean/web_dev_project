import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import { Series } from "./Series";
import { EmptyData } from "../EmptyData";
import { SearchData } from "../SearchData";

export const SearchSeria = ({ data, type }) => {
  console.log(data, "data");
  const [searchedTitle, setSearchedTitle] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterData = () => {
    const newData = data.filter((item) => {
      return item.jawSummary.title
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
        <Series data={filteredData} />
      ) : (
        <EmptyData type={type} />
      )}
    </>
  );
};
