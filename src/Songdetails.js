import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import * as api from './API';
const Songdetails = () => {
	let history = useHistory();
	const [song, setSong] = useState();
	let params = useParams();

	useEffect(() => {
		api.getSongDetails(params).then((res) => setSong(res));
	}, []);

	const handleChange = (e) => {
		setSong({ ...song, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		api.updateSong(song, params);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Title:</label>
				<input id='title' type='text' onChange={handleChange} />
				<button type='submit' className='submit-button'>
					submit
				</button>
			</form>
			<h1>{song && song.title}</h1>
			<h2>{song && song.artist}</h2>
			<h3>{song && song.link}</h3>
			<button onClick={() => api.deleteSong(params, history)}>
				Delete Song
			</button>
		</div>
	);
};

export default Songdetails;
