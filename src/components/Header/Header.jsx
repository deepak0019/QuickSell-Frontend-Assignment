import React from "react";
import "./Header.css";
import Dropdown from "../Dropdown/Dropdown";

function Header({ grouping, setGrouping, ordering, setOrdering }) {
  return (
    <header>
      <Dropdown
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </header>
  );
}

export default Header;
