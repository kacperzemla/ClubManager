import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const BuyFreePerson = ({person}) => {
    const [salary, setSalary ] = useState('');
    const {idClub, id} = useParams();
    
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        fetch(`https://club-managerk.herokuapp.com/api/insert-${person}/${idClub}/${id}/`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({salary: salary})
        }).then(() =>{
            console.log('free player bought')
            history.push(`/clubs/${idClub}/firstteam`)
        })
    }

    return ( <div className="buyPlayer">
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Salary</label>
            <input type="number" required value={salary} onChange={ (e)=> setSalary(e.target.value)}/>
            <button className="button-buy">Buy person</button>
        </form>
       
    </div> );
}
 
export default BuyFreePerson;