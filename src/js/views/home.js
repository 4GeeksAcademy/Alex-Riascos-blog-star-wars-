import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardPeople } from "../component/cardPeople";





export const Home = () => {

	const { store } = useContext(Context);

	return (
		<>
			<div className=" container overflow-auto d-flex flex-noweap" style={{ overflow: "scroll" }}>
				{store.peopleList.map((item) => {
					return (
						<CardPeople
							people={item?.properties.name}
							idUrl={item.uid}
							id={item.uid}
							gender={item?.properties.gender}
							hair={item.properties.hair_color}
							eye={item.properties.eye_color}
						/>
					)
				}
				)}

			</div>
		</>

	)
};
