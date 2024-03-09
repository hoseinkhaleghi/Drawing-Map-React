import { createContext, useState, useContext, PropsWithChildren } from 'react';

type ThemeContextType = boolean

const DarkModeContext = createContext<ThemeContextType>(false);
export const useDarkMode  = () => {
    return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children  } : PropsWithChildren ) => {
  const [isDarkMode, setIsDarkMode] = useState<ThemeContextType>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode  , toggleDarkMode   }} >
      {children}
    </DarkModeContext.Provider>
  );
};