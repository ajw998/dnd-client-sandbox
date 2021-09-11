import { h } from 'preact';
import styles from './styles.module.scss';

interface CardCollection {
  cards: Array<any>;
  id?: string;
}

export const CardCollection = ({ cards, id }: CardCollection) => {
  return (
      <section className={styles['cardCollection']}>{cards}</section>
  );
};
