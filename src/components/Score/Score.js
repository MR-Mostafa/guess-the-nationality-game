import { Badge } from 'react-bootstrap';

import { useGlobalContext } from '../../api/contex';
import './Score.scss';

const Score = () => {
	const { score } = useGlobalContext();

	const setBgColor = () => {
		const scoreNum = parseInt(score) || 0;

		if (scoreNum === 0) {
			return 'primary';
		}

		if (scoreNum > 0) {
			return 'success';
		}

		if (scoreNum < 0) {
			return 'danger';
		}
	};

	return (
		<div className='score position-absolute start-0 end-0 bottom-0'>
			<div className='d-flex flex-row align-items-baseline justify-content-center'>
				<p className='m-0 pe-2 fw-bold text-white'>Score:</p>
				<Badge bg={setBgColor()} className='py-2 px-0'>
					{score}
				</Badge>
			</div>
		</div>
	);
};

export default Score;
