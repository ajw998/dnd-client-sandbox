import { Fragment, h } from 'preact';
import type { Feature } from '../../../types';
import styles from './styles.module.scss';
import DaytimeIndicator from './blocks/DaytimeIndicator';

interface GameStateBarProps {}

type GameStateBarFeature = Feature<GameStateBarProps>;

export const GameStateBar = ({
  isFeatureEnabled = false,
}: GameStateBarFeature) => {
  if (!isFeatureEnabled) return <Fragment></Fragment>;

  return (
    <div className={styles['gameStateBar']}>
      <DaytimeIndicator />
    </div>
  );
};
