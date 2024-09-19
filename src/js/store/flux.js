const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			_url: "https://www.swapi.tech/api/people",
			peopleList: [],
		},
		actions: {

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: async () => {
				const { _url } = getStore();
				try {
					const response = await fetch(`${_url}`);
					const data = await response.json();

					// Cargar detalles de cada personaje
					const detailedPeople = await Promise.all(data.results.map(async (person) => {
						const detailResponse = await fetch(`${_url}/${person.uid}`);
						const detailData = await detailResponse.json();
						return detailData.result; // Devuelve las propiedades del personaje
					}));

					setStore({ peopleList: detailedPeople });
				} catch (err) {
					console.error(err);
				}
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
