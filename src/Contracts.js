import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const Contracts = () => {
    const { id } = useParams();
    const { data: trainerContract, isPending, error } = useFetch('http://127.0.0.1:8000/api/trainer-contract/' + id + '/')
    const { data: playerContracts, isPendingPContracts, errorPContracts } = useFetch('http://127.0.0.1:8000/api/players-contracts/' + id + '/');

    return (<div className="contracts">
        <div className="contracts-wrapper">
            <div className="contracts-trainers">
                <h2 className="contracts-title">Trainer contracts</h2>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <td>name</td>
                                <td>salary</td>
                            </tr>
                        </thead>
                        <tbody>
                            {trainerContract && trainerContract.map((contract, index) => (
                                <tr key={index}>
                                    <td>{contract.name} {contract.surname}</td>
                                    <td>{contract.salary}</td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="contracts-players">
                <h2 className="contracts-title">Player contracts</h2>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <td>name</td>
                                <td>salary</td>
                            </tr>
                        </thead>
                        <tbody>
                            {playerContracts && playerContracts.map((contract, index) => (
                                <tr key={index}>
                                    <td>{contract.name} {contract.surname}</td>
                                    <td>{contract.salary}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>);
}

export default Contracts;