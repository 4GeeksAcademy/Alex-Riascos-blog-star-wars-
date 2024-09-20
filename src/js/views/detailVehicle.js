import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const DetailVehicle = () => {

    const { store, actions } = useContext(Context);
    const { vehicle_id } = useParams();
    const [character, setCharacter] = useState(null);

    const fetchCharacter = async () => {
        const urlApi = `https://www.swapi.tech/api/vehicles/${vehicle_id}`;
        try {
            const response = await fetch(`${urlApi}`);
            const data = await response.json();
            setCharacter(data)

        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {

        fetchCharacter();
    }, []);


    return (
        <div className="container">

            <div className="d-flex">
                <img style={{ minWidth: "380px", height: "400px" }}
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle_id}.jpg`} />

                <div className="mx-auto p-5 ">
                    {character && <h1 className="text-center">{character.result.properties.name}</h1>}

                    {!character && <p className="text-center">...loading</p>}



                    <p className="mx-auto p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="d-flex justify-content-between border-top border-danger mt-3" style={{ padding: "30px" }}>
                {character &&
                    <>
                        <p className="text-center" style={{ color: "red" }}>
                            Name <br />
                            {character.result.properties.name}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Model <br />
                            {character.result.properties.model}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Vehicle class <br />
                            {character.result.properties.vehicle_class}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Max atmosphering speed <br />
                            {character.result.properties.max_atmosphering_speed}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Consumables <br />
                            {character.result.properties.consumables}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Passengers <br />
                            {character.result.properties.passengers}
                        </p>
                    </>
                }
            </div>
        </div>
    )
};


export default DetailVehicle;