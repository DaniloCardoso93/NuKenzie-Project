import "../../reset.css";
import "../../css/text.css";
import "../../css/buttons.css";
import "../../css/flex.css";
import "../../components/Logoff/logoff.css"

import logo from "../../assepts/logo.svg";
import imgLogout from "../../assepts/illustration.svg";

function LogOff({ login }) {
  return (
    <main className="bg__logout">
      <div className="container flex align-center justify-center box__logout">
        <div className="slogan__logout flex direction-column">
          <img className="img__logo" src={logo} alt="" />
          <h1 className="title1">Centralize o controle das suas finanças</h1>
          <p className="headline">de forma rápida e segura</p>
          <button className="logout__btn button-primary" onClick={login}>
            Iniciar
          </button>
        </div>
        <div className="box__imgLogout">
          <img className="imgLogout" src={imgLogout} alt="" />
        </div>
      </div>
    </main>
  );
}

export default LogOff;
