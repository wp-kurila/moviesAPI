import { FC, ReactElement } from 'react';
import Field from '../../components/Field';
import List from '../../components/List';
import { useSelector } from 'react-redux';
import { omdbAPI } from '../../api';

import IState from '../../Model';

import styles from './initial.module.css';

const Initial: FC = (): ReactElement => {
	const search = useSelector((s: IState) => s.search);

	const { data, error, isLoading } = omdbAPI.useSearchMoviesQuery(search, {
		skip: search === '',
	});

	return (
		<div className={styles.page}>
			<form method="get">
				<Field />
			</form>
			{error && <div>Something went wrong</div>}
			{(data || isLoading) && <List data={data} isLoading={isLoading} />}
		</div>
	);
};

export default Initial;
