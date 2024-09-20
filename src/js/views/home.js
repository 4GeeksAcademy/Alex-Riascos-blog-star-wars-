import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardPeople } from "../component/cardPeople";
import { CardPlanets } from "../component/cardPlanets";
import { CardVehicle } from "../component/cardVehicles";





export const Home = () => {

	const { store } = useContext(Context);

	return (
		<>
			<div className=" container py-3">
				<h1 className=" container " style={{ color: "#ef4545" }}>Characters</h1>
				<div
					style={{
						display: "flex",
						overflowX: "auto",
						padding: "10px",
						gap: "10px",
					}}
				>

				</div>
				<div className=" container overflow-auto d-flex flex-noweap mx-0 px-0" style={{ overflow: "scroll" }}>
					{store.peopleList.map((item) => {
						return (
							<CardPeople
								key={item.uid}
								people={item?.properties.name}

								id={item.uid}
								gender={item?.properties.gender}
								hair={item.properties.hair_color}
								eye={item.properties.eye_color}
							/>
						)
					}
					)}

				</div>

				<h1 className=" container py-3" style={{ color: "#ef4545" }}>Planets</h1>
				<div
					style={{
						display: "flex",
						overflowX: "auto",
						padding: "10px",
						gap: "10px",
					}}
				></div>


				<div className=" container overflow-auto d-flex flex-noweap mx-0 px-0" style={{ overflow: "scroll" }}>
					{store.planetList.map((item) => {
						return (
							<CardPlanets
								key={item.uid}
								name_planet={item?.properties.name}
								id={item.uid}
								population={item?.properties.population}
								terrain={item.properties.terrain}
							/>
						)
					}
					)}

				</div>

				<h1 className=" container py-3" style={{ color: "#ef4545" }}>Vehicles</h1>
				<div
					style={{
						display: "flex",
						overflowX: "auto",
						padding: "10px",
						gap: "10px",
					}}
				></div>


				<div className=" container overflow-auto d-flex flex-noweap mx-0 px-0" style={{ overflow: "scroll" }}>
					{store.vehicleList.map((item) => {
						return (
							<CardVehicle
								key={item?.uid}
								vehicle={item?.properties.name}
								id={item?.uid}
								vehicle_class={item?.properties.vehicle_class}
								passengers={item?.properties.passengers}
							/>
						)
					}
					)}

				</div>


			</div>

		</>

	)
};
