import React from "react";
import LayoutContext from "@/store/LayoutContext";
import Context from "@/store/LayoutContext";

const ContextProvider = ({ children }) => {
  return (
    <div>
      <Context>{children}</Context>
    </div>
  );
};

export default ContextProvider;
