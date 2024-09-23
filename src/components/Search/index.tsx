import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSearch } from '../../store/searchSlice';
import Field from '../../ui-kit/Field';

import type { AppDispatch, RootState } from '../../store/store';

const Search: FC = (): ReactElement => {
	const dispatch = useDispatch<AppDispatch>();
	const search = useSelector((s: RootState) => s.search);
	const [val, setVal] = useState(search);

	useEffect(() => {
		const handler = setTimeout(() => {
			dispatch(handleSearch(val));
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [val, dispatch]);

	return (
		<Field
			size="large"
			placeholder="Any movie will be found"
			defaultValue={search}
			value={val}
			setVal={setVal}
		/>
	);
};

export default Search;
