import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Block from '../Block';
import EmptyBLock from '../Block/EmptyBlock';

import type { IShortDesc } from '../../Model';
import type IState from '../../Model';

import styles from './list.module.css';

interface Props {
	data: {
		Search: IShortDesc[];
	};
	isLoading: boolean;
}

const List: FC<Props> = ({ data, isLoading }: Props): ReactElement | null => {
	const search = useSelector((s: IState) => s.search);
	if (!search) return null;

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
