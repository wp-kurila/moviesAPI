import { FC, ReactElement, useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from './empty.module.css';

interface Props {
	width: number;
	height: number;
	classname?: string;
}

const Empty: FC<Props> = ({ width, height, classname }: Props): ReactElement => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const animation = ref.current?.animate(
			[{ transform: 'translateX(-150px)' }, { transform: `translateX(${width}px)` }],
			{
				duration: 2000,
				easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
				iterations: Infinity,
			}
		);

		return () => {
			animation.cancel();
		};
	}, [width]);

	return (
		<div
			style={{ width: `${width}px`, height: `${height}px` }}
			className={cn(styles.empty, classname)}
		>
			<div className={styles.wave} ref={ref} />
		</div>
	);
};

export default Empty;
