import React from "react";
import { Link } from "react-router-dom";


export const CardPeople = ({ people, id, idUrl, gender, hair, eye }) => {
    return (
        <div className="card mx-2" style={{ minWidth: "250px" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${idUrl}.jpg`}
                className="card-img-top" alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{people}</h5>
                <p className="card-text">
                    Gender:  {gender} <br />
                    Hair Color: {hair} <br />
                    Eye-Color: {eye} <br />
                </p>
                <div className="d-flex justify-content-between ">
                    <Link to={`/detail-people/${id}`} className="btn btn-primary my-2">Learn more!</Link>
                    <Link to={"/"}>
                        <p className="card-text m-3 border border-warning px-1"><i className="fa-sharp fa-regular fa-heart" style={{ color: "#FFD43B" }}></i></p>
                    </Link>
                </div>

            </div>
        </div>
    )
}