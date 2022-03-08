import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const PlayerInfo = () => {
    const {id} = useParams();
    const {data: player, isPending, error} = useFetch('http://127.0.0.1:8000/api/player-info/' + id +'/');

    return (
        <div className="person-info">
        <div className="person-info-text">
            <div className="wrapper">
            {isPending && <p>Loading...</p>}
                    {player && <p className="person-name">{player.name} {player.surname}</p>}
                    {player && <p className="person-value">Position: {player.position}</p>}
                    {player && <p className="person-value">Value: {player.value}</p>}
                    {/* {player && <p className="person-value">Nation: {player.salary}</p>} */}
                    {player && <p className="person-value">nation: {player.nation}</p>}
                    {player && <p className="person-value">Age: {player.age}</p>}
                    {player && <p className="person-value">Heigth: {player.heigth}</p>}
                    {player && <p className="person-value">Rate: {player.avg_rate}</p>}
                    {player && <p className="person-value">Goals: {player.goals}</p>}
                    {player && <p className="person-value">Matches: {player.matches}</p>}
            </div>
          
        </div>
        <div className="person-info-image">
            {player && <div className="person-img" style={{backgroundImage: `url(${player.photo})`}}></div>}
        </div>
        
    </div>
     );
}

export default PlayerInfo;