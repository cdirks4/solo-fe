import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from './API';
const Songdisplay = () => {
	const [songs, setSongs] = useState();
	useEffect(() => {
		api.getSongs().then((res) => {
			setSongs(res);
		});
	}, []);
	return (
		<div>
			<ul>
				{songs &&
					songs.map((song) => (
						<Link to={`/song/${song.id}`}>
							<li key={song.id}>{song.title}</li>
						</Link>
					))}
			</ul>
		</div>
	);
};

export default Songdisplay;
