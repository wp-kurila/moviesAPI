import { FC, ReactElement } from 'react';
import Block from '../Block';
import EmptyBLock from '../Block/EmptyBlock';

import type { IShortDesc } from '../../Model';

import styles from './list.module.css';

interface Props {
	data: {
		Search: IShortDesc[];
	};
	isLoading: boolean;
}

const List: FC<Props> = ({ data, isLoading }: Props): ReactElement => {
	if (!data?.Search && !isLoading) {
		return <div>Try another one</div>;
	}

	return (
		<div className={styles.list}>
			{isLoading &&
				Array(10)
					.fill(null)
					.map((_, i) => {
						return <EmptyBLock key={`empty_${i}`} />;
					})}
			{data?.Search?.map((item) => {
				return <Block key={item.imdbID} {...item} />;
			})}
		</div>
	);
};

export default List;
