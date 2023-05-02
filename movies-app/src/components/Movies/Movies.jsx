import React from "react";
import { Movie } from "./Movie";

export const Movies = ({ data }) => {
  return (
    <>
      <div className="movies_container">
        {data?.map((dataItem) => {
          return <Movie dataItem={dataItem} key={dataItem.id} />;
        })}
      </div>
    </>
  );
};
