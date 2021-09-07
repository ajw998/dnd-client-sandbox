import { h } from 'preact';
import { memo } from 'preact/compat';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { useAppSelector } from '../../../store/hooks';

export const Outcome = () => {
  const { isSuccess } = useAppSelector((state) => state.attackRollCalculator);

  return (
    <section className={styles['outcomeSection']}>
      <FontAwesomeIcon
        size={'3x'}
        className={cn(isSuccess ? styles['success'] : styles['failed'])}
        icon={isSuccess ? faCheckCircle : faTimesCircle}
      />
    </section>
  );
};

export default memo(Outcome);
