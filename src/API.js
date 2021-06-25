const urlBase = 'http://127.0.0.1:8000/';
export const getSongs = () => {
	const url = `${urlBase}songs/`;
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((data) => data)
		.catch((res) => res);
};
export const createSong = (song) => {
	const url = `${urlBase}songs/`;
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(song),
	}).then((res) => res.json());
};

export const getSongDetails = (params) => {
	const url = `${urlBase}songs/${params.id}`;
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then((res) => res.json());
};

export const deleteSong = (params, history) => {
	const url = `${urlBase}songs/${params.id}`;
	fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then(history.goBack());
};

export const updateSong = (song, params) => {
	const url = `${urlBase}songs/${params.id}`;
	fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(song),
	}).then((res) => res.json());
};
