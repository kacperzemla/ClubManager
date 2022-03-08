import useFetch from "./useFetch";
import { useParams } from 'react-router-dom';
import prize from './prize.svg';
import { useState } from "react";


const Trophies = () => {
    const { data: trophies, isPending, error } = useFetch('http://127.0.0.1:8000/api/all-nation-trophies/');
    const { data: trophiesC, isPendingC, errorC } = useFetch('http://127.0.0.1:8000/api/all-club-trophies/');
    const [visible, setVisible] = useState(5);

    const loadMore = () => {
        setVisible(visible + 10)
    }

    return (<div className="contracts">
        <div className="contracts-wrapper">
            <div className="contracts-trainers">
                <h2 className="contracts-title">All clubs trophies</h2>
                <div className="club-trophies">
                    {trophiesC && trophiesC.slice(0, visible).map((trophy,index) => (
                        <div className="trophy" key={index}>
                            <img src={prize} />
                            <p>{trophy.trophy}</p>
                            <p>{trophy.year}</p>
                            <p>{trophy.club}</p>
                        </div>
                    ))}

                </div>
                <div className="load-more-wrapper">
                {trophiesC && visible < trophiesC.length && (
                    <button onClick={loadMore} className="load-button button-trophies">load more</button>
                )}
                </div>
              
            </div>
            <div className="contracts-players">
                <h2 className="contracts-title">All nation trophies</h2>
                <div className="club-trophies">
                    {trophies && trophies.map((trophy,index) => (
                        <div className="trophy" key={index}>
                            <img src={prize} />
                            <p>{trophy.trophy}</p>
                            <p>{trophy.year}</p>
                            <p>{trophy.nation}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    </div>);
}

export default Trophies;