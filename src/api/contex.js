import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import j1 from '../assets/images/j1.jpg';
import j2 from '../assets/images/j2.jpg';
import j3 from '../assets/images/j3.jpg';
import j4 from '../assets/images/j4.jpg';
import j5 from '../assets/images/j5.jpg';
import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';
import c5 from '../assets/images/c5.jpg';
import k1 from '../assets/images/k1.jpg';
import k2 from '../assets/images/k2.jpg';
import k3 from '../assets/images/k3.jpg';
import k4 from '../assets/images/k4.jpg';
import k5 from '../assets/images/k5.jpg';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';

const GameContext = createContext();

const GameProvider = ({ children }) => {
	const [startGame, setStartGame] = useState(true);
	const [endGame, setEndGame] = useState(false);
	const [playerName, setPlayerName] = useState('');
	const [pictureItem, setPictureItem] = useState(0);
	const [score, setScore] = useState(0);

	const PictureList = [
		{ id: 1, src: j1, nationality: 'japanese' },
		{ id: 2, src: c1, nationality: 'chinese' },
		{ id: 3, src: k1, nationality: 'korean' },
		{ id: 4, src: t1, nationality: 'thai' },
		{ id: 5, src: j2, nationality: 'japanese' },
		{ id: 6, src: c2, nationality: 'chinese' },
		{ id: 7, src: k2, nationality: 'korean' },
		{ id: 8, src: t2, nationality: 'thai' },
		{ id: 9, src: j3, nationality: 'japanese' },
		{ id: 10, src: c3, nationality: 'chinese' },
		{ id: 11, src: k3, nationality: 'korean' },
		{ id: 12, src: t3, nationality: 'thai' },
		{ id: 13, src: j4, nationality: 'japanese' },
		{ id: 14, src: c4, nationality: 'chinese' },
		{ id: 15, src: k4, nationality: 'korean' },
		{ id: 16, src: t4, nationality: 'thai' },
		{ id: 17, src: j5, nationality: 'japanese' },
		{ id: 18, src: c5, nationality: 'chinese' },
		{ id: 19, src: k5, nationality: 'korean' },
		{ id: 20, src: t5, nationality: 'thai' },
	];

	const picturelength = PictureList.length - 1;

	const changeScore = (num) => {
		if (!num) return;

		return setScore((score) => score + parseInt(num));
	};

	const changePlayerName = (value) => {
		if (!value) return;

		return setPlayerName(value);
	};

	const startAgain = () => {
		setStartGame(true);
		setEndGame(false);
		setScore(0);
		setPictureItem(0);
		setPlayerName('');
	};

	const nextPicture = useCallback(() => {
		if (pictureItem === picturelength) {
			setEndGame(true);
			setStartGame(false);
			return;
		}

		setPictureItem((prev) => {
			return prev + 1;
		});
	}, [pictureItem, picturelength]);

	useEffect(() => {
		if (startGame || endGame) return;

		const id = setInterval(() => {
			nextPicture();
		}, 3000);

		return () => clearInterval(id);
	}, [nextPicture, startGame, endGame]);

	return (
		<GameContext.Provider
			value={{
				picture: PictureList[pictureItem],
				score,
				changeScore,
				nextPicture,
				startGame,
				setStartGame,
				playerName,
				changePlayerName,
				endGame,
				startAgain,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GameContext);
};

export { GameContext, GameProvider };
