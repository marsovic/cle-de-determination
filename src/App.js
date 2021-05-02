import { Route } from 'react-router-dom';

import "./App.css"

import Game  from "./containers/Game/Game"
import MainMenu  from "./containers/MainMenu/MainMenu"

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <MainMenu />} />
      <Route path="/qui-suis-je" exact render={() => <Game />} />
    </div>
  );
}

export default App;
