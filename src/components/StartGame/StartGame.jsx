import { memo, useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

import { useGlobalContext } from '../../api/contex';

const StartGame = () => {
	const { setStartGame, playerName, changePlayerName } = useGlobalContext();

	const [validated, setValidated] = useState(false);

	const handleChange = (e) => {
		const value = e.target.value.toString().trim();

		if (!value) return;

		changePlayerName(value);
	};

	const handleSubmit = (e) => {
		const form = e.currentTarget;
		e.preventDefault();
		e.stopPropagation();

		// Not Validated Form
		if (form.checkValidity() === false) {
			return setValidated(true);
		}

		// Validated Form
		setValidated(false);
		return setStartGame(false);
	};

	return (
		<Modal show={true} backdrop='static' keyboard={false}>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Modal.Header>
					<Modal.Title>Your Name</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form.Group controlId='validationPlayerName'>
						<Form.Label>Please enter your name:</Form.Label>
						<InputGroup hasValidation>
							<Form.Control
								type='text'
								placeholder='Player Name'
								name='playerName'
								defaultValue={playerName}
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type='invalid'>
								Please choose a player name.
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Modal.Body>

				<Modal.Footer>
					<Button type='submit'>Submit form</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default memo(StartGame);
