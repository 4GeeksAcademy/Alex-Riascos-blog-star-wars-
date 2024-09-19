import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const DetailCard = () => {

    const { store, actions } = useContext(Context);
    const { contact_id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/");
    };

    useEffect(() => {
        if (Array.isArray(store.peopleList)) {
            const contacts = [...store.peopleList];
            if (contact_id !== undefined) {
                const contact = contacts.find((item) => item.id === parseInt(contact_id));
            }
        }
    }, [store.peopleList, contact_id]);

    return (
        <div>
            <h1>Hola mundo</h1>
        </div>
    )
};

export default DetailCard;