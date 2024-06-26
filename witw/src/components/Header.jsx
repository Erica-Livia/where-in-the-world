import { IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header
            className={`fixed top-0 left-0 right-0 border-b-2 w-full flex justify-between p-5 md:pl-10 md:pr-10 ${
                theme === "light"
                    ? "bg-white-(dark-mode-text)"
                    : "bg-dark-blue-(dark-mode-elements)"
            }`}
        >
            <h1
                className={`text-lg font-bold ${
                    theme === "light"
                        ? "text-very-dark-blue-(light-mode-text)"
                        : "text-white-(dark-mode-text)"
                }`}
            >
                Where in the world?
            </h1>

            <div onClick={toggleTheme}>
                {theme === "light" ? (
                    <span className="flex items-center gap-2 text-very-dark-blue-(light-mode-text)">
            <MdSunny /> <span className="text-sm">Light</span>
          </span>
                ) : (
                    <span className="flex items-center gap-2 text-white-(dark-mode-text)">
            <IoMoonSharp />
            <span className="text-sm"> Dark</span>
          </span>
                )}
            </div>
        </header>
    );
};

export default Header;
