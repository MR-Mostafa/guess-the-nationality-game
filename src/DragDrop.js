import { useEffect } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './components/Board';
import Picture from './components/Picture';
import Score from './components/Score';

import { useGlobalContext } from './api/contex';

const DragDrop = () => {
	const { picture, changeScore, nextPicture } = useGlobalContext();

	return (
		<DndProvider backend={HTML5Backend}>
			<Picture picture={picture} changeScore={changeScore} nextPicture={nextPicture} />

			<Board NationalityName='Japanese' position='top-0 start-0' />
			<Board NationalityName='Chinese' position='top-0 end-0' />
			<Board NationalityName='Korean' position='bottom-0 start-0' />
			<Board NationalityName='Thai' position='bottom-0 end-0' />

			<Score />
		</DndProvider>
	);
};

export default DragDrop;
