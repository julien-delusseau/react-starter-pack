import {Link} from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <header className={"main-header"}>
            {/* Utilisation de Link, afin de changer de page, sans recharger notre navigateur */}
            <Link to={'/'}>
                <h2>CVTHEQUE</h2>
            </Link>
            <Link to={'/login'}>
                Se connecter
            </Link>
        </header>
    )
}

export default Header