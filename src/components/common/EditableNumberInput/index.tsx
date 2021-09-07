import { memo } from 'preact/compat';
import { h } from 'preact';
import cn from 'classnames';
import { debounce } from 'src/utils/debounce';
import styles from './styles.module.scss';

interface EditableNumberInputProps {
  value: string | number;
  isEditable?: boolean;
  inputClassName?: string;
  inputFn?: (arg: any) => void;
  debounceTime?: number;
}

export const EditableNumberInput = ({
  value,
  isEditable = false,
  inputFn,
  inputClassName,
  debounceTime = 250,
}: EditableNumberInputProps): JSX.Element => {
  const changeHandler = (event) => {
    inputFn && inputFn(Number(event.target.value));
  };

  const debouncedChangeHandler = debounce(changeHandler, debounceTime);
  return (
    <div>
      {!isEditable ? (
        value
      ) : (
        <input
          className={cn(styles['input'], inputClassName)}
          value={value}
          type='number'
          onChange={debouncedChangeHandler}
        />
      )}
    </div>
  );
};

export default memo(EditableNumberInput);
