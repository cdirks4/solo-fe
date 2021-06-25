import React from 'react';
import * as api from './API';
const Form = ({ song, setSong }) => {
	const handleChange = (e) => {
		setSong({ ...song, [e.target.id]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		api.createSong(song);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Title:</label>
				<input id='title' type='text' onChange={handleChange} />
				<label htmlFor='artist'>Artist:</label>
				<input id='artist' type='text' onChange={handleChange} />
				<label htmlFor='link' type='text'>
					Link:
				</label>
				<input id='link' onChange={handleChange} />
				<button type='submit' className='submit-button'>
					submit
				</button>
			</form>
		</div>
	);
};

export default Form;
