import React, { ReactElement } from "react";
import "./assets/styles/App.css";
import { User } from "./components/common/User";

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <User>
          <div>Какой-то children</div>
        </User>
      </header>
    </div>
  );
}

export default App;
