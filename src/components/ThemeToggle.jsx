import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useGlobalContext } from "../context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <CiLight className='toggle-icon-light dark-theme ' />
        ) : (
          <MdDarkMode className='toggle-icon-dark ' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
