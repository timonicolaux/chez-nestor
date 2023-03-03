import React, { createContext, useState } from "react";
import { AppContextTypes } from "../types/types";

export const AppMainContext = createContext<AppContextTypes | null>(null);

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const value: AppContextTypes = {
    isOpen,
    setIsOpen,
  };

  return (
    <AppMainContext.Provider value={value}>{children}</AppMainContext.Provider>
  );
};

export default AppContext;
