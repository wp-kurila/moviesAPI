import { FC, ReactElement } from 'react';
import Empty from '../Empty';

import styles from './emptyBlock.module.css';

const EmptyBlock: FC = (): ReactElement => {
	return (
		<div className={styles.block_wrapper}>
			<div className={styles.block}>
				<Empty width={100} height={150} classname={styles.image} />
				<div className={styles.content}>
					<Empty width={370} height={25} classname={styles.title} />
					<Empty width={100} height={22} />
				</div>
			</div>
		</div>
	);
};

export default EmptyBlock;
