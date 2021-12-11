import { memo } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { useGlobalContext } from '../../api/contex';

const EndGame = () => {
	const { playerName, score, startAgain } = useGlobalContext();

	return (
		<Modal show={true} backdrop='static' keyboard={false}>
			<Modal.Header>
				<Modal.Title>End Game</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<h3>{playerName}</h3>
				<h4>Score: {score}</h4>
			</Modal.Body>
			<Modal.Footer>
				<Button type='button' onClick={startAgain}>
					Play Again
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default memo(EndGame);
