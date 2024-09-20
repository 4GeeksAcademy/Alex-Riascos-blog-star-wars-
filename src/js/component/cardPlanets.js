import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPlanets = ({ name_planet, id, population, terrain }) => {
    const { store, actions } = useContext(Context)
    return (
        <div className="card mx-2" style={{ minWidth: "250px" }}>
            <Link to={`/detail-planet/${id}`}> 
                <img
                    src={id == '1'
                        ? `https://starwars-visualguide.com/assets/img/placeholder.jpg`
                        : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    className="card-img-top"
                    alt="..."
                />
            </Link>

            <div className="card-body d-flex flex-column justify-content-between">
                <div>

                    <h5 className="card-title">{name_planet}</h5>
                    <p className="card-text">
                        Population:  {population} <br />
                        Terrain: {terrain} <br />

                    </p>
                </div>
                <div className="d-flex justify-content-between ">
                    <Link to={`/detail-planet/${id}`} className="btn btn-primary my-2">Learn more!</Link>

                    <p className="btn card-text m-3 border border-warning px-2"
                        onClick={() => {
                            actions.addFavoriteCharacter(name_planet)
                        }}
                    >
                        <i className="fa-regular fa-heart" style={{ color: "#FFD43B" }}></i>
                    </p>

                </div>

            </div>
        </div>
    )
}