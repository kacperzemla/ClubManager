import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const BuyPerson = ({person}) => {
    const {idClub, id} = useParams();

    const [salary, setSalary ] = useState('');
    const [value, setValue] = useState('')

    const history = useHistory();


    const handleSubmit = (e) =>{
        e.preventDefault();

        fetch(`https://club-managerk.herokuapp.com/api/update-${person}/${idClub}/${id}/`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({salary: salary, va1ue: value})
        }).then(() =>{
            console.log('player bought')
            history.push(`/clubs/${idClub}/firstteam`)
        })
    }

    return ( <div className="buyPlayer">
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Salary</label>
            <input type="text" required value={salary} onChange={ (e)=> setSalary(e.target.value)}/>
            <label htmlFor="">Value</label>
            <input type="text" required value={value} onChange={ (e)=> setValue(e.target.value)}/>
            <button className="button-buy">Buy</button>
        </form>
    </div> );
}

export default BuyPerson;