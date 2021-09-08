import { h } from 'preact';
import { memo } from 'preact/compat';
import styles from './styles.module.css';

interface DeathSavesProps {
  successes: number;
  failures: number;
}

export const DeathSavesBlock = ( { successes = 0, failures = 0 }: DeathSavesProps ) => {
  return <div className={ styles['deathSavesBlock'] }>
    { Array.from({ length: successes }).map(_ => <span className={ styles['deathSavesSuccess'] }>&#10004;</span>) }
    { Array.from({ length: failures }).map(_ => <span className={ styles['deathSavesFailure'] }>&#10006;</span>) }
  </div>
}

export default memo(DeathSavesBlock);
