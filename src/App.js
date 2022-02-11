import CryptoAssets from "./CryptoAssets";

import { useState } from "react";
import "./assets/App.css";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{login === false ? "Please login" : "Welcome Back"}</h1>
        <ul>
          {!login ? (
            <button onClick={() => setLogin(true)}>Login</button>
          ) : (
            <section>
              <button onClick={() => setLogin(false)}>Logout</button>
              <CryptoAssets />
            </section>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
