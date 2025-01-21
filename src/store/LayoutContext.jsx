"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext([]);

function Context({ children }) {
  const [FetchedLayouts, setFetchedLayouts] = useState([]);

  useEffect(() => {
    const fetchLayout = async () => {
      const result = await axios.get("/api/getEmailLayout");
      setFetchedLayouts(result?.data?.layouts);
    };
    fetchLayout();
  }, []);

  return (
    <LayoutContext.Provider value={{ FetchedLayouts }}>
      {children}
    </LayoutContext.Provider>
  );
}

export default Context;
