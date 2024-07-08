import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full flex justify-between p-5 md:pl-10 md:pr-10 items-center ${
                theme === "light"
                    ? "bg-white-(dark-mode-text) shadow"
                    : "bg-darkBlue"
            }`}
        >
            <h1
                className={`text-lg font-bold ${
                    theme === "light"
                        ? "text-very-dark-blue-(light-mode-text) font-extraBold"
                        : "text-white-(dark-mode-text) font-extraBold"
                }`}
            >
                Where in the world?
            </h1>

            <div onClick={toggleTheme}>
                {theme === "light" ? (
                    <span className="flex items-center gap-2 text-very-dark-blue-(light-mode-text)">
            <MdLightMode /> <span className="text-sm">Light</span>
          </span>
                ) : (
                    <span className="flex items-center gap-2 text-white-(dark-mode-text)">
            <MdDarkMode/>
            <span className="text-sm"> Dark</span>
          </span>
                )}
            </div>

        </header>
    );
};

export default Header;
