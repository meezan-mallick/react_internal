import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Form from "./Form";

const Table = () => {

    const cards = useSelector((state) => state);

    return (
        <div className="container mt-4 pt-3 ">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <td scope="col">Sr</td>
                        <td scope="col">Card number</td>
                        <td scope="col">Name</td>
                        <td scope="col">Mobile number</td>
                        <td scope="col">Gender</td>
                        <td scope="col">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    
                        {cards.map((card, id) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{card.cardnumber}</td>
                                <td>{card.name}</td>
                                <td>{card.mobile}</td>
                                <td>{card.gender}</td>
                                <td>
                                    <Link to={`/edit/${card.id}`} className="btn btn-small btn-warning mr-2">Edit</Link>
                                    <button className="btn btn-small btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default Table