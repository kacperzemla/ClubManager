import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import ClubInfo from './ClubInfo';
import Contracts from './Contracts';
import FirstTeam from './FirstTeam';

import PlayerTransfers from './PlayerTransfers';
import TrainersTransfers from './TrainersTransfers';
import Trophies from './Trophies';
import { useState } from 'react';
import PlayerInfo from './INFO/PlayerInfo';
import FreePlayerInfo from './INFO/FreePlayerInfo';
import TrainerInfo from './INFO/TrainerInfo';
import FreeTrainerInfo from './INFO/FreeTrainerInfo';

import Main from './Main';
import BuyFreePerson from './CRUD/BuyFreePerson';
import BuyPerson from './CRUD/BuyPerson';


const Navbar = () => {
    const {
        params: id,
    } = useRouteMatch('/clubs/:id'); //hook ktory ma dostep do obiektu match, który zawiera pary klucz/wartość dynamicznych segmentów URL

    const [currentRoute, setCurrentRoute] = useState(useHistory().location.pathname.toLowerCase())
    console.log(currentRoute);
    // const [url, setUrl] = useState('')
    let history = useHistory();

    const navMain = () => {
        history.push('/');
    }

    return (
        <Router>
            <nav className="navbar">

                <p onClick={navMain} className="navbar-link"><i className="fas fa-home"></i></p>
                <NavLink to={`/clubs/${id.id}/clubinfo`} activeClassName="active" className="navbar-link">club info</NavLink>
                <NavLink to={`/clubs/${id.id}/firstteam`} activeClassName="active" className="navbar-link">first team</NavLink>
                <NavLink to={`/clubs/${id.id}/playerstransfers`} activeClassName="active" className="navbar-link">player transfers</NavLink>
                <NavLink to={`/clubs/${id.id}/trainerstransfers`} activeClassName="active" className="navbar-link">trainers transfers</NavLink>
                <NavLink to={`/clubs/${id.id}/contracts`} activeClassName="active" className="navbar-link">contracts</NavLink>
                <NavLink to={`/clubs/${id.id}/trophies`} activeClassName="active" className="navbar-link">trophies</NavLink>

            </nav>
            <Switch>
                <Route path='/clubs/:id/clubinfo'>
                    <ClubInfo />
                </Route>
                <Route path='/clubs/:id/firstteam'>
                    <FirstTeam />
                </Route>

                <Route path='/clubs/:id/playerstransfers'>
                    <PlayerTransfers />
                </Route>

                <Route path='/clubs/:id/trainerstransfers'>
                    <TrainersTransfers />
                </Route>

                <Route path='/clubs/:id/contracts'>
                    <Contracts />
                </Route>

                <Route path='/clubs/:id/trophies'>
                    <Trophies />
                </Route>
                <Route path='/clubs/:idClub/playerInfo/:id'>
                    <PlayerInfo />
                </Route>
                <Route path='/clubs/:idClub/freeplayerInfo/:id'>
                    <FreePlayerInfo />
                </Route>
                <Route exact path='/clubs/:idClub/trainerInfo/:id'>
                    <TrainerInfo />
                </Route>
                <Route path='/clubs/:idClub/freetrainerInfo/:id'>
                    <FreeTrainerInfo />
                </Route>
                <Route path='/clubs/:idClub/buyFreePlayer/:idClub/:id'>
                    <BuyFreePerson person='player'/>
                </Route>
                <Route path='/clubs/:idClub/buyPlayer/:idClub/:id'>
                    <BuyPerson person='player'/>
                </Route>
                <Route path='/clubs/:idClub/buyFreeTrainer/:idClub/:id'>
                    <BuyFreePerson person='trainer'/>
                </Route>
                <Route path='/clubs/:idClub/buyTrainer/:idClub/:id'>
                    <BuyPerson person='trainer'/>
                </Route>
                {/* <Route path='/'>
                    <Main />
                </Route> */}
            </Switch>
        </Router>
    );
}

export default Navbar;