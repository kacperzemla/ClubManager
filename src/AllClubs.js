import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import useFetch from './useFetch';

const AllClubs = () => {
    const {data: clubs, isPending, error} = useFetch('http://127.0.0.1:8000/api/clubs-list/')

    return ( <div className="clubs">
        <h1 className="clubs-title">Choose Your Club</h1>
        <div className="clubs-choose">
            {clubs && clubs.map(club => (
                <Link to={`/clubs/${club.cid}/clubinfo`} key={club.cid} className='club-card-link'>
                    <div className='club-card'>
                        <div className='club-card-img' style={{backgroundImage: `url(${club.photo})`}}></div>
                        <div className='club-name-wrapper'>
                            <p className='club-card-name'>{club.name}</p>
                        </div>
                       
                    </div>
                </Link>
            ))}

        </div>
    </div> );
}
 
export default AllClubs;