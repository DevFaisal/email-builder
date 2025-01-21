"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext([]);

function Context({ children }) {
  const [FetchedLayouts, setFetchedLayouts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchLayout = async () => {
      const result = await axios.get("/api/getEmailLayout");
      setFetchedLayouts(result?.data?.layouts);
      setLoading(false);
    };
    fetchLayout();
  }, []);

  return (
    <LayoutContext.Provider value={{ FetchedLayouts, loading }}>
      {children}
    </LayoutContext.Provider>
  );
}

export default Context;
