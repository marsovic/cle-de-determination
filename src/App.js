import { Route } from 'react-router-dom';

import Cards  from "./containers/Game/Cards"
import MainMenu  from "./containers/MainMenu/MainMenu"

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <MainMenu />} />
      <Route path="/qui-suis-je" exact render={() => <Cards />} />
    </div>
  );
}

export default App;
