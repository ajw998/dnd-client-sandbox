import style from './style.module.css';
import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export type LoadingSpinnerProps = Pick<FontAwesomeIconProps, 'size'>;

export const LoadingSpinner = ({ size = '1x' }: LoadingSpinnerProps) => {
  return (
    <FontAwesomeIcon
      size={size}
      className={style['rotating']}
      icon={faSpinner}
    />
  );
};

export default memo(LoadingSpinner);
