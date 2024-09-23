import { FC, ReactElement } from 'react';
import Search from '../../components/Search';
import List from '../../components/List';
import { useSelector } from 'react-redux';
import { omdbAPI } from '../../api';

import { RootState } from '../../store/store';

import styles from './initial.module.css';

const Initial: FC = (): ReactElement => {
	const search = useSelector((s: RootState) => s.search);

	const { data, error, isLoading } = omdbAPI.useSearchMoviesQuery(search, {
		skip: search === '',
	});

	return (
		<div className={styles.page}>
			<form method="get">
				<Search />
			</form>
			{error && <div>Something went wrong</div>}
			{!error && search && <List data={data} isLoading={isLoading} />}
		</div>
	);
};

export default Initial;
