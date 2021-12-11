import { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';

import './Picture.scss';

const Picture = ({ picture, nextPicture, changeScore }) => {
	const [animationStartAgain, setAnimationStartAgain] = useState(false);

	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: ItemTypes.BOX,
			item: { id: picture.id, nationality: picture.nationality },
			end(item, monitor) {
				const dropResult = monitor.getDropResult();

				// When drag end on the board item
				if (dropResult) {
					let { selectedBoard } = dropResult;
					let { nationality: realNationality } = item;

					realNationality = realNationality.toString().toLowerCase().trim();
					selectedBoard = selectedBoard.toString().toLowerCase().trim();

					checkAnswer({ realNationality, selectedBoard });
				}
			},
			collect: (monitor, props) => ({
				isDragging: !!monitor.isDragging(),
			}),
		}),
		[picture, animationStartAgain]
	);

	useEffect(() => {
		const id = setTimeout(() => {
			if (animationStartAgain) {
				clearTimeout(id);
				return;
			}

			changeScore(-5);
		}, 3000);

		return () => clearTimeout(id);
	}, [changeScore, animationStartAgain]);

	const checkAnswer = ({ realNationality, selectedBoard }) => {
		setAnimationStartAgain(true);

		if (realNationality === selectedBoard) {
			changeScore(20);
		} else {
			changeScore(-5);
		}

		setImmediate(() => {
			nextPicture();
			setAnimationStartAgain(false);
		});
	};

	return (
		<div className='nationality-picture position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden rounded mx-auto'>
			<img
				src={picture.src}
				alt='images'
				width={100}
				height={100}
				className={`w-100 d-block ${isDragging ? 'dragging' : ''} ${
					animationStartAgain ? '' : 'animation'
				}`}
				title='What is the nationality of this person'
				ref={drag}
			/>
		</div>
	);
};

export default Picture;

/* DragSource(
	ItemTypes.BOX,
	{
		beginDrag: ({ picture }) => {
			return { name: picture.id };
		},
		endDrag({ changeScore, picture, nextPicture, intervalId }, monitor) {
			const dropResult = monitor.getDropResult();

			if (dropResult) {
				let { name: selectedNationality } = dropResult;
				let { nationality: realNationality } = picture;

				selectedNationality = selectedNationality.toString().toLowerCase().trim();
				realNationality = realNationality.toString().toLowerCase().trim();

				if (selectedNationality === realNationality) {
					changeScore(20);
				} else {
					changeScore(-5);
				}
				clearInterval(intervalId);
				console.log({ Inner: intervalId });

				// nextPicture();
			}
		},
	},
	(connect, monitor) => {
		return {
			connectDragSource: connect.dragSource(),
			isDragging: monitor.isDragging(),
		};
	}
)(Picture);
 */
