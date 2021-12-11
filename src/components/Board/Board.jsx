import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';

import './Board.scss';

const Board = ({ NationalityName, position }) => {
	const [{ isOver, canDrop }, drop] = useDrop(() => ({
		accept: ItemTypes.BOX,
		drop: () => {
			return { selectedBoard: NationalityName };
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const isActive = canDrop && isOver;

	let backgroundColor = '#f4f4f4';

	if (isActive) {
		backgroundColor = '#20c997';
	}

	const addPictureToBoard = ({ id, realNationality, selectedBoard }) => {
		console.log({ id, realNationality, selectedBoard });
	};

	return (
		<div className={`nationality-board position-absolute ${position}`} ref={drop}>
			<div className='board w-100 h-100 border rounded' style={{ backgroundColor }}>
				{NationalityName && <p className='text-center fw-bold p-1'>{NationalityName}</p>}
			</div>
		</div>
	);
};

export default Board;

/* DropTarget(
	ItemTypes.BOX,
	{
		drop: ({ NationalityName }) => {
			return { name: NationalityName };
		},
	},
	(connect, monitor) => ({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	})
)(Board); */
