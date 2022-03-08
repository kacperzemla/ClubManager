import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import Trophies from "./Trophies";
import prize from './prize.svg';


const ClubInfo = () => {
    const { id } = useParams();
    const { data: club, isPending, error } = useFetch('http://127.0.0.1:8000/api/clubs-list/' + id + '/');
    const { data: trophies, isPendingT, errorT } = useFetch('http://127.0.0.1:8000/api/club-trophies/' + id + '/');

    return (
        <div className="club">
            {error && <p>{error}</p>}
            {isPending && <p>loading...</p>}

            {club &&
                <div className="club-wrapper">

                    <div className="club-info">
                        <div className="club-info-text">
                            <ul className="info-list">
                                <li className="info-list-item club-name">{club.club}</li>
                                <li className="info-list-item">Money: {club.money}</li>
                                <li className="info-list-item">Average age: {club.avg_age || '0'}</li>
                                <li className="info-list-item">Club foudation: {club.foudation}</li>
                                <li className="info-list-item">League: {club.league}</li>
                            </ul>

                        </div>
                        <div className="club-info-logo">
                            <div className="club-logo" style={{backgroundImage: `url(${club.photo})`}}>

                            </div>
                        </div>
                    </div>
                    <div className="club-trophies">
                        {trophies && trophies.map((trophy,index) => (
                            <div className="trophy" key={index}>
                                <img src={prize}/>
                                <p>{trophy.trophy}</p>
                                <p>{trophy.year}</p>

                            </div>
                        ))}

                    </div>
                </div>


            }

        </div>
    );
}

export default ClubInfo;