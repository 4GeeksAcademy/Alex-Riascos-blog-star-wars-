import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardVehicle = ({ vehicle, id, vehicle_class, passengers }) => {
    const { store, actions } = useContext(Context)
    return (
        <div className="card mx-2" style={{ minWidth: "250px" }}>
            <Link to={`/detail-vehicle/${id}`}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                    className="card-img-top" alt="..."
                />

            </Link>
            <div className="card-body">
                <h5 className="card-title">{vehicle}</h5>
                <p className="card-text">
                    Vehicle Class:  {vehicle_class} <br />
                    Passengers: {passengers} <br />

                </p>
                <div className="d-flex justify-content-between ">
                    <Link to={`/detail-vehicle/${id}`} className="btn btn-primary my-2">Learn more!</Link>

                    <p className="btn card-text m-3 border border-warning px-2"
                        onClick={() => {
                            actions.addFavoriteCharacter(vehicle)
                        }}
                    >
                        <i className="fa-regular fa-heart" style={{ color: "#FFD43B" }}></i>
                    </p>

                </div>

            </div>
        </div>
    )
}