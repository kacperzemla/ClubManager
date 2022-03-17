import useFetch from "./useFetch";
import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";




const FirstTeam = () => {
    const {id} = useParams();
    const history = useHistory();
    let {data: players, isPending: isPendingPlayer, error: errorPlayers} = useFetch('https://club-managerk.herokuapp.com/api/players-in-club/'+id+'/')
    const {data: trainer, isPending: isPendingTrainer, error: errorTrainers} = useFetch('https://club-managerk.herokuapp.com/api/trainer-in-club/'+id+'/')
    const [isDeleted, setDelete ] = useState(false);



    

    const handleDeletePlayer = (playerId) =>{
        fetch('http://127.0.0.1:8000/api/delete-player/'+ id + '/' + playerId +'/',{
            method: 'DELETE'
        }).then((response) =>{
            document.location.reload(true)
        })
    }

    const handleDeleteTrainer = (trainerId) =>{
        fetch('http://127.0.0.1:8000/api/delete-trainer/'+ id + '/' + trainerId +'/',{
            method: 'DELETE'
        }).then((response) =>{
            document.location.reload(true)
        })
    }

    return ( <div className="firstTeam">
        {(errorPlayers || errorTrainers ) && <p>{errorPlayers},{errorTrainers}</p>}
        {(isPendingPlayer || isPendingTrainer) && <p>Loading...</p>}
        {(players && trainer) && 
            <div className="wrapper">
                <div className="firstTeam-trainers">
                    <h1 className="firstTeam-title">Trainer</h1>
                    {trainer.length === 0 && <p>Brak trenera</p>}
                    {trainer.length !== 0 && 
                        <div className="person-link-wrapper" key={trainer[0].id}>
                            <Link className="person-link" to={`/clubs/${id}/trainerInfo/${trainer[0].id}`} >{trainer[0].name} {trainer[0].surname}</Link>
                            <button className="button-buy delete" onClick={()=> handleDeleteTrainer(trainer[0].id)}>delete</button>
                        </div>
                    }
                </div>
                <div className="firstTeam-players">
                    <h1 className="firstTeam-title">Players</h1>
                    {players.map((player, index) =>(
                         <div className="person-link-wrapper" key={player.id}>
                            <Link className="person-link" to={`/clubs/${id}/playerInfo/${player.id}`} >{index+1}. {player.name} {player.surname}</Link>
                            <button className="button-buy delete" onClick={() => handleDeletePlayer(player.id)}>delete</button>
                        </div>
                    ))}
                </div>
            </div>
        
        }
    </div> );
}
 
export default FirstTeam;