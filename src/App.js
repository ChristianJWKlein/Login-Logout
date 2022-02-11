import Login from "./login";
import Logout from "./logout";
import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{login === false ? "Please login" : "welcome back"}</h1>
        <ul>
          {!login ? (
            <button onClick={() => setLogin(true)}>Login</button>
          ) : (
            <button onClick={() => setLogin(false)}>Logout</button>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
