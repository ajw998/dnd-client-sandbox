import { h, JSX } from 'preact';
import { memo } from 'preact/compat';
import styles from './styles.module.scss';

interface InputProps {
  inputClassName?: string;
  labelText: string;
}
export const Input = ({
  labelText,
  inputClassName,
  ...props
}: InputProps & JSX.HTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={styles['input']}>
      <input
        className={`${styles['input__field']} ${inputClassName}`}
        {...props}
      />
      <div className={styles['input__label']}>{labelText}</div>
    </label>
  );
};

export default memo(Input);
