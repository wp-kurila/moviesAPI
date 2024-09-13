import { FC, ReactElement, useEffect, useState } from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { handleSearch } from '../../store/searchSlice';

import IState from '../../Model';

const Field: FC = (): ReactElement => {
	const dispatch = useDispatch();
	const search = useSelector((s: IState) => s.search);
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
		<Input
			size="large"
			placeholder="Any movie will be found"
			onChange={(e) => setVal(e.target.value)}
			value={val}
			defaultValue={search}
		/>
	);
};

export default Field;
