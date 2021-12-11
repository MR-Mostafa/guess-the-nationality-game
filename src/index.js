import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import TinyGame from './TinyGame';
import { GameProvider } from './api/contex';

ReactDOM.render(
	<React.StrictMode>
		<GameProvider>
			<TinyGame />
		</GameProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
