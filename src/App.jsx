import "./reset.css";
import "./css/text.css";
import "./css/buttons.css";
import "./css/flex.css";
import "./app.css";
import "./components/Form/forms.css";

import { useState } from "react";

import LogOff from "./components/Logoff";
import Header from "./components/Header";
import Form from "./components/Form";
import Nav from "./components/NavButtons";
import Money from "./components/Total";
import List from "./components/List";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [listOperation, setListOperation] = useState([]);
  const [filter, setFilter] = useState([]);

  function login() {
    setLogin(true);
  }

  function logout() {
    setLogin(false);
  }

  return (
    <div className="body">
      {isLogin ? (
        <>
          <Header logout={logout} />

          <main className="container">
            <div className="box_form flex direction-column align-center">
              <Form
                filter={filter}
                setFilter={setFilter}
                listOperation={listOperation}
                setListOperation={setListOperation}
              />
              <Money listOperation={listOperation} />
            </div>

            <div className="box__nav-list">
              <Nav
                listOperation={listOperation}
                filter={filter}
                setFilter={setFilter}
              />

              <List
                listOperation={listOperation}
                setListOperation={setListOperation}
                filter={filter}
                setFilter={setFilter}
              />
            </div>
          </main>
        </>
      ) : (
        <LogOff login={login} />
      )}
    </div>
  );
}

export default App;
