import { h } from 'preact';
import styles from './styles.module.scss';
import DaytimeIndicator from './blocks/DaytimeIndicator';

export const GameStateBar = () => {
  return <div className={ styles['gameStateBar'] }>
    <DaytimeIndicator />
  </div>
}
