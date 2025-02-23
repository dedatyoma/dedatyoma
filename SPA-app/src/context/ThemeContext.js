import {createContext} from 'react';

const ThemeContext = createContext({
  isDarkTheme: false,
  setIsDarkTheme: () => {},
});
export default ThemeContext;