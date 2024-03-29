const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			details: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
			},
			getInfoDetails: async (id, type) => {				
				try {//usar try catch para el ayns await
					const response =  await fetch(`https://www.swapi.tech/api/${type}/${id}`);
					if (response.ok) {
						const bodyAPI = await response.json();
						setStore({details: bodyAPI.result});
					}
				} catch (error) {
					console.log(error);
				}
			},
			addFavorite: (DetailData, type) => {
				const store = getStore();
				DetailData = 
				{
					...DetailData,
					type: type,
					favorite: true					
				}
				let tempData = [...store.favorites, DetailData];
				setStore({favorites: tempData});
			},
			deleteFavorite: (name) => {
				const auxList = getStore().favorites.filter((favorite, position) => favorite.name != name);
      			setStore({favorites: auxList});
			}
		}
	};
};

export default getState;
