import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPeople = ({ people, id, gender, hair, eye }) => {
    const { store, actions } = useContext(Context)
    return (
        <div className="card mx-2" style={{ minWidth: "250px" }}>
            <Link to={`/detail-people/${id}`}>

                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    className="card-img-top" alt="..."
                />

            </Link>
            <div className="card-body">
                <h5 className="card-title">{people}</h5>
                <p className="card-text">
                    Gender:  {gender} <br />
                    Hair Color: {hair} <br />
                    Eye-Color: {eye} <br />
                </p>
                <div className="d-flex justify-content-between ">
                    <Link to={`/detail-people/${id}`} className="btn btn-primary my-2">Learn more!</Link>

                    <p className="btn card-text m-3 border border-warning px-2"
                        onClick={() => {
                            actions.addFavoriteCharacter(people)
                        }}
                    >
                        <i className="fa-regular fa-heart" style={{ color: "#FFD43B" }}></i>
                    </p>

                </div>

            </div>
        </div>
    )
}