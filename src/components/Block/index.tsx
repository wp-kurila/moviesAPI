import { FC, ReactElement } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './block.module.css';

import type { IShortDesc } from '../../Model';

const { Meta } = Card;

interface Props extends IShortDesc {
	small?: boolean;
}

const Block: FC<Props> = ({ Title, Year, Poster, imdbID, small }: Props): ReactElement => {
	return (
		<Link className={styles.block_wrapper} to={`/details?id=${imdbID}`}>
			<Card
				hoverable
				cover={
					<div className={styles.poster} style={{ backgroundImage: `url(${Poster})` }} />
				}
				className={styles.block}
			>
				<Meta
					className={styles.text}
					title={
						<div className={cn(styles.title, { [styles.small]: small })}>{Title}</div>
					}
					description={Year}
				/>
			</Card>
		</Link>
	);
};

export default Block;
