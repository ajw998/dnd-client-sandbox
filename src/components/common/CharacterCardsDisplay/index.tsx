import { h } from 'preact';
import { Children, cloneElement } from 'preact/compat';
import styles from './styles.module.scss';

interface CharacterCardsDisplayProps {
  children: Array<JSX.Element>;
  editable?: boolean;
}

export const CharacterCardsDisplay = ({
  children,
  editable = false,
}: CharacterCardsDisplayProps) => {
  return (
    <section className={styles['cardCollection']}>
      {Children.map(children, (child) =>
        cloneElement(child, { isEditable: editable }),
      )}
    </section>
  );
};
