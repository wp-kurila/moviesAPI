import { FC, ReactElement } from 'react';
import Empty from '../../components/Empty';

import styles from './emptyDetails.module.css';

const EmptyDetails: FC = (): ReactElement => {
	return (
		<>
			<Empty width={400} height={620} />
			<div>
				<Empty width={500} height={48} classname={styles.title} />
				<Empty width={500} height={29} classname={styles.desc} />
				<Empty width={500} height={100} />
			</div>
		</>
	);
};

export default EmptyDetails;
