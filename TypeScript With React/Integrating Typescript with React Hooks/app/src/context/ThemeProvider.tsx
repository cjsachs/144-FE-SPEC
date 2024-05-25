import { useThemeContext } from './ThemeContext';

const ThemeProvider = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
export default ThemeProvider;
