import { h } from 'preact';
import styles from './styles.module.scss';
import NoInfoAvailable from './NoInfoAvailable';

export const DetailSidebar = () => {
  return (
    <section className={styles['detailSidebar']}>
      <NoInfoAvailable />
    </section>
  );
};
