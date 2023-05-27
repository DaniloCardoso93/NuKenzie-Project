import logo2 from "../../assepts/Nukenzie.svg";
import "../Header/header.css"

function Header({ logout }) {
    return (
        <header className="header">
            <nav className="container flex justify-between">
                <img className="img__logo2" src={logo2} alt="img" />
                <button className="button-secondary login__btn" onClick={logout}>
                    inicio
                </button>
            </nav>
        </header>
    )
}


export default Header