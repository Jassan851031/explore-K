const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'http://localhost:5000',
			resumen: []
		},

		actions: {
			getResumen: () => {
				const store = getStore();
				fetch(store.path + '/resumen')
					.then(resp => resp.json())
					.then(data => {
						setStore({ resumen: data });
						//console.log(data);
					})
					.catch(err => console.log(err));
			},
			addViaje: (newViaje) => {
				const store = getStore();
				const data = newViaje;

				fetch(store.path + '/agregar', {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					}
				})
				.then(resp => resp.json())
				.then(() => getActions().getResumen())
			},
		}
	};
};

export default getState;