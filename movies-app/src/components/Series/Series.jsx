import React from "react";
import { Seria } from "./Seria";

export const Series = ({ data }) => {
  return (
    <>
      <div className="movies_container">
        {data?.map((dataItem) => {
          return <Seria dataItem={dataItem} key={dataItem.summary.id} />;
        })}
      </div>
    </>
  );
};
