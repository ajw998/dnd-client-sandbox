import { h } from 'preact';
import { memo } from 'preact/compat';
import styles from './styles.module.scss';

interface FeaturesProp {
  name: string;
  description: string;
}

export const Features = ({
  name,
  description,
}: FeaturesProp): JSX.Element => {
  return (
    <section className={styles['wrapper']}>
      <h3 className={styles['title']}>{name}</h3>
      <article className={styles['description']}>{description}</article>
    </section>
  );
};

export default memo(Features);
