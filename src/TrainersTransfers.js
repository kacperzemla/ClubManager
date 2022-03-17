import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const TrainersTransfers = () => {
    const { id } = useParams();
    const { data: freeTrainers, isPending: isPendingFree, error: errorFree } = useFetch('https://club-managerk.herokuapp.com/api/free-trainers');
    const { data: trainersToBuy, isPending, error } = useFetch('https://club-managerk.herokuapp.com/api/trainers-to-buy/' + id + '/');
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
        <div className="trainersTransfers">
            <div className="transfer-players">
                <p className="firstTeam-title">Free trainers</p>
                <input className="search-input" type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                <table>
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>nation</td>
                            <td>value</td>
                            <td>salary</td>
                            <td>age</td>

                        </tr>
                    </thead>
                    <tbody>
                        {freeTrainers && freeTrainers.filter((trainer) => {
                            if (searchTerm === "") {
                                return trainer;
                            } else if ((trainer.name + ' ' + trainer.surname).toLowerCase().includes(searchTerm.toLowerCase())) {
                                console.log(trainer.name + ' ' + trainer.surname);
                                return trainer;
                            }
                        }).slice(0, visible).map((trainer, index) => (
                            <tr>
                                <td><Link className="person-link" to={`/clubs/${id}/freetrainerInfo/${trainer.id}`} >{index + 1}. {trainer.name} {trainer.surname} </Link></td>
                                <td>{trainer.nation}</td>
                                <td>{trainer.value}</td>
                                <td>{trainer.salary}</td>
                                <td>{trainer.age}</td>
                                <td><Link to={`/clubs/${id}/buyFreeTrainer/${id}/${trainer.id}`}><button className="button-buy">buy</button></Link></td>
                            </tr>
                            // <div className="person-link-wrapper" key={trainer.id}>
                            // </div>
                        ))}
                    </tbody>
                </table>

                {freeTrainers && visible < freeTrainers.length && (
                    <button onClick={loadMore} className="load-button">load more</button>
                )}

            </div>
            <div className="transfer-players">
                <p className="firstTeam-title">Trainers to buy</p>
                <input className="search-input" type="text" placeholder="Search..." onChange={event => { setSearchTerm2(event.target.value) }}></input>
                <table>
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>nation</td>
                            <td>value</td>
                            <td>salary</td>
                            <td>age</td>

                        </tr>
                    </thead>
                    <tbody>
                        {trainersToBuy && trainersToBuy.filter((trainer) => {
                            if (searchTerm2 === "") {
                                return trainer;
                            } else if ((trainer.name + ' ' + trainer.surname).toLowerCase().includes(searchTerm2.toLowerCase())) {
                                return trainer;
                            }
                        }).slice(0, visibleSec).map((trainer, index) => (
                        <tr> 
                            {/* <div className="person-link-wrapper" key={trainer.id}> */}
                            <td><Link className="person-link" to={`/clubs/${id}/trainerInfo/${trainer.id}`} >{index + 1}. {trainer.name} {trainer.surname}</Link></td>
                            <td>{trainer.nation}</td>
                            <td>{trainer.value}</td>
                            <td>{trainer.salary}</td>
                            <td>{trainer.age}</td>
                            <td><Link to={`/clubs/${id}/buyTrainer/${id}/${trainer.id}`}><button className="button-buy">buy</button></Link></td>
                            {/* </div> */}
                        </tr>
                        ))}
                    </tbody>
                </table>
                        {trainersToBuy && visibleSec < trainersToBuy.length && (
                            <button onClick={loadMoreSec} className="load-button">load more</button>
                        )}

            </div>


        </div>
    );
}

export default TrainersTransfers;