import DragDrop from './DragDrop';
import StartGame from './components/StartGame';
import EndGame from './components/EndGame';
import { useGlobalContext } from './api/contex';

function TinyGame() {
	const { endGame, startGame } = useGlobalContext();

	return (
		<>
			{startGame && !endGame && <StartGame />}

			{!startGame && endGame && <EndGame />}

			{!startGame && !endGame && <DragDrop />}
		</>
	);
}

export default TinyGame;
