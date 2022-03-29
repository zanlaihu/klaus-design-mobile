import React, { FC } from 'react';
import styles from './index.less';

interface Props {
  title?: string;
}

export const DemoTitle: FC<Props> = (props) => {
  return <div className={styles.title}>{props.title}</div>;
};
