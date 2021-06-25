import React, { useState } from 'react';
import Form from './Form';
import Songdetails from './Songdetails';
import Songdisplay from './Songdisplay';
import { Route } from 'react-router-dom';
function App() {
	const [song, setSong] = useState({
		title: '',
		artist: '',
		link: '',
	});
	return (
		<div>
			{' '}
			<Route exact path='/'>
				<Form song={song} setSong={setSong} />
			</Route>
			<Route exact path='/'>
				<Songdisplay />
			</Route>
			<Route path='/song/:id'>
				<Songdetails />
			</Route>
		</div>
	);
}

export default App;
