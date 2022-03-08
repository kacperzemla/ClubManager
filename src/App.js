import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './Main';
import AllClubs from './AllClubs';

import Navbar from './Navbar';

import FreePlayerInfo from './INFO/FreePlayerInfo';
import FirstTeam from './FirstTeam';

function App() {


  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>
            <Route exact path='/clubs'>
              <AllClubs/>
            </Route>
            <Route  path='/clubs/:id'>
              <Navbar/>
            </Route>
             <Route path='/freeplayerInfo/:id'>
                    <Navbar/>
                    <FreePlayerInfo/>
            </Route>
            {/* <Route path='/clubs/:id/firstteam'>
                    <Navbar/>
                    <FirstTeam />
            </Route>
            <Route path='/playerInfo/:id'>
                    <Navbar/>
                    <PlayerInfo/>
                </Route> */}

          </Switch>
        </div>

    </Router>

  );
}

export default App;
