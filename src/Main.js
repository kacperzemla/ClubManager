import {Link} from 'react-router-dom';
import Group from './Group.svg';

const Main = () => {


    return (
        <div className="main">
            <nav className="main-nav">
                <h1 className="main-logo">Club<br /> Manager</h1>
                <button className="main-contact-button">contact</button>
            </nav>
            <div className="main-content">
                <div className="main-text">
                    <p>Begin your football
                        journey. Choose your club.
                    </p>
                    <Link to="/clubs"><button className="main-text-button">Choose</button></Link>
                </div>
                <div className="main-image">
                    <img src={Group}/>
                </div>
            </div>
        </div>
    );
}

export default Main;