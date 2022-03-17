import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const PlayerTransfers = () => {
    const { id } = useParams();
    const { data: freePlayers, isPending: isPendingFree, error: errorFree } = useFetch('https://club-managerk.herokuapp.com/api/free-players');
    const { data: playersToBuy, isPending, error } = useFetch('https://club-managerk.herokuapp.com/api/players-to-buy/' + id + '/');
    const [visible, setVisible] = useState(5);
    const [visibleSec, setVisibleSec] = useState(5)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTerm2, setSearchTerm2] = useState('')

    const loadMore = () => {
        setVisible(visible + 5)
    }

    const loadMoreSec = () => {
        setVisibleSec(visibleSec + 5)
    }


    return (
        <div className="playerTransfers">

            <div className="transfer-players">
                <p className="firstTeam-title">Free players</p>
                <input className="search-input" type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                {isPendingFree && <p>Loading...</p>}
                <table>
                    <thead>
                        <tr>
                            <td>name</td>
                          
                            <td>nation</td>
                            <td>position</td>
                            <td>value</td>
                            <td>salary</td>
                            <td>rate</td>
                            <td>age</td>
                            <td>matches</td>
                        </tr>
                    </thead>
                    <tbody>
                        {freePlayers && freePlayers.filter((freePlayer) => {
                            if (searchTerm === "") {
                                return freePlayer;
                            } else if ((freePlayer.name + ' ' + freePlayer.surname).toLowerCase().includes(searchTerm.toLowerCase())) {
                                console.log(freePlayer.name + ' ' + freePlayer.surname);
                                return freePlayer;
                            }
                        }).slice(0, visible)
                            .map((freePlayer, index) => (
                                <tr key={index}>
                                    {/* <div className="person-link-wrapper" key={freePlayer.id}> */}
                                    <td><Link className="person-link" to={`/clubs/${id}/freeplayerInfo/${freePlayer.id}`} >{index + 1}. {freePlayer.name} {freePlayer.surname}</Link></td>
                                   
                                    <td>{freePlayer.nation}</td>
                                    <td>{freePlayer.position}</td>
                                    <td>{freePlayer.value}</td>
                                    <td>{freePlayer.salary}</td>
                                    <td>{freePlayer.avg_rate}</td>
                                    <td>{freePlayer.age}</td>
                                    <td>{freePlayer.matches}</td>

                                    {/* </div> */}
                                    <td><Link to={`/clubs/${id}/buyFreePlayer/${id}/${freePlayer.id}`}><button className="button-buy">buy</button></Link></td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {freePlayers && visible < freePlayers.length && (
                    <button onClick={loadMore} className="load-button">load more</button>
                )}

            </div>
            <div className="transfer-players">
                <p className="firstTeam-title">Players to buy</p>
                <input className="search-input" type="text" placeholder="Search..." onChange={event => { setSearchTerm2(event.target.value) }}></input>
                {isPending && <p>Loading...</p>}
                <table>
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>club</td>
                            <td>nation</td>
                            <td>position</td>
                            <td>value</td>
                            <td>salary</td>
                            <td>rate</td>
                            <td>age</td>
                            <td>matches</td>
                        </tr>
                    </thead>
                    <tbody>
                        {playersToBuy && playersToBuy.filter((player) => {
                            if (searchTerm2 === "") {
                                return player;
                            } else if ((player.name + ' ' + player.surname).toLowerCase().includes(searchTerm2.toLowerCase())) {
                                return player;
                            }
                        })
                            .slice(0, visibleSec)
                            .map((player, index) => (
                                <tr key={index}>
                                    {/* // <div className="person-link-wrapper" key={player.id}> */}
                                    <td><Link className="person-link" to={`/clubs/${id}/playerInfo/${player.id}`} >{index + 1}. {player.name} {player.surname}</Link></td>
                                    <td>{player.club}</td>
                                    <td>{player.nation}</td>
                                    <td>{player.position}</td>
                                    <td>{player.value}</td>
                                    <td>{player.salary}</td>
                                    <td>{player.avg_rate}</td>
                                    <td>{player.age}</td>
                                    <td>{player.matches}</td>
                                    <td><Link to={`/clubs/${id}/buyPlayer/${id}/${player.id}`}><button className="button-buy">buy</button></Link></td>

                                    {/* // </div> */}
                                </tr>
                            ))}


                    </tbody>
                </table>
                {playersToBuy && visibleSec < playersToBuy.length && (
                    <button onClick={loadMoreSec} className="load-button">load more</button>
                )}
            </div>


        </div>
    );
}

export default PlayerTransfers;