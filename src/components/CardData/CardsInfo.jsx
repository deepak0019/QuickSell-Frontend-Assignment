import React, { useCallback, useMemo } from "react";
import "./CardsInfo.css";
import SideBar from "./../SideBar/SideBar";

function CardsInfo({ gridData, grouping, userIdToData }) {
  const keys = useMemo(() => {
    const gridKeys = Object.keys(gridData);
    // console.log("Keys:", gridKeys); // Debugging line
    return gridKeys;
  }, [gridData]);

  return (
    <div className="grid">
      {keys.map((k) => (
        <SideBar
          key={k}
          tickets={gridData[k]}
          grouping={grouping}
          groupBy={k}
          userIdToData={userIdToData}
        />
      ))}
    </div>
  );
}

export default CardsInfo;
