import { FC, ReactElement, Dispatch, SetStateAction } from 'react';
import { Input } from 'antd';

import { SizeType } from 'antd/es/config-provider/SizeContext';

interface Props {
	size: SizeType;
	placeholder?: string;
	defaultValue?: string;
	value: string;
	setVal: Dispatch<SetStateAction<string>>;
}

const Field: FC<Props> = ({
	size,
	placeholder,
	defaultValue,
	value,
	setVal,
}: Props): ReactElement => {
	return (
		<Input
			size={size}
			placeholder={placeholder}
			onChange={(e) => setVal(e.target.value)}
			value={value}
			defaultValue={defaultValue}
		/>
	);
};

export default Field;
