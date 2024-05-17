import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaLocationDot,FaLink ,FaXTwitter} from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
const Card = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div>Card</div>
    )
}

export default Card