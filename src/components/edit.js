import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {

    const {id} = useParams();

    return (
        <div className="container">

            <div className="row">

                <div className="col-md-6 offset-3 shadow p-4 mt-3">
                <h1 className="display-6  text-center">Edit Debit Card {id}</h1>
                    <form>
                        <div className="form-group p-2">
                            <input class="form-control" type="number" placeholder="Debit Card number" />
                        </div>
                        <div className="form-group p-2">
                            <input class="form-control" type="text" placeholder="Name" />
                        </div>
                        <div className="form-group p-2">
                            <input class="form-control" type="text" placeholder="Mobile number" />
                        </div>
                        <div className="form-group p-2">
                            <input class="form-control" type="text" placeholder="Gender" />
                        </div>
                        <div className="form-group p-2">
                            <input className="btn btn-primary" type="submit" value="Edit"/>
                        </div>

                        <button className="btn btn-danger">Cancel</button>
                        
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Edit