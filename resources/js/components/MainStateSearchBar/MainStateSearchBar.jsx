"use client";
import React, { createContext, useState } from "react";
const ContextSearch = createContext();

function MainStateSearchBar({ children }) {
  const [departState, setdepartState] = useState();
  const [returnState, setreturnState] = useState();
  const [selectedWindow, setselectedWindow] = useState(0);
  const [openedSearch, setopenedSearch] = useState(false);

  return (
    <ContextSearch.Provider
      value={{
        departState,
        setdepartState,
        returnState,
        setreturnState,
        selectedWindow,
        setselectedWindow,
        openedSearch,
        setopenedSearch,
      }}
    >
      {children}
    </ContextSearch.Provider>
  );
}

export { ContextSearch };

export default MainStateSearchBar;
