import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const TrainerInfo = () => {
    const {id} = useParams();
    const {data: trainer, isPending, error} = useFetch('http://127.0.0.1:8000/api/trainer-info/' + id +'/');

    return (
        <div className="person-info">
        <div className="person-info-text">
            <div className="wrapper">
                {trainer && <p className="person-name">{trainer.name} {trainer.surname}</p>}
                {trainer && <p className="person-value">Position: {trainer.position}</p>}
                {trainer && <p className="person-value">Value: {trainer.value}</p>}
                {trainer && <p className="person-value">Nation: {trainer.nation}</p>}
                {trainer && <p className="person-value">Age: {trainer.age}</p>}
                {trainer && <p className="person-value">Salary: {trainer.salary}</p>}

            </div>
          
        </div>
        <div className="person-info-image">
        {trainer && <div className="person-img" style={{backgroundImage: `url(${trainer.photo})`}}></div>}
        </div>
        
    </div>
     );
}

export default TrainerInfo;