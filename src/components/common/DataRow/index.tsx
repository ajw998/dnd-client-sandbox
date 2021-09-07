import { h } from 'preact';
import { useEffect, useState, memo } from 'preact/compat';
import styles from './styles.module.scss';
import isEqual from 'lodash.isequal';
import { cloneElement, isValidElement } from 'preact/compat';
import cn from 'classnames';

interface DataRowProps {
  isEditable?: boolean;
  flashOnUpdate?: boolean;
  attribute: string | number | JSX.Element;
  value: string | number | JSX.Element;
}

const UPDATE_FLASH_COLOUR = '#f7e6c3';

// TODO - Bug where live upates are not causing re-render
// - This may be due to multiple listeners
export const DataRow = ({
  attribute,
  isEditable = false,
  value,
}: DataRowProps): JSX.Element => {
  const [backgroundColor, setBackgroundColor] = useState('inherit');

  // Cause the row to blink once on every update
  // This works because the component re-renders on prop change,
  // which triggers the useEffect hook
  useEffect(() => {
    setBackgroundColor(UPDATE_FLASH_COLOUR);
    const timeoutId = window.setTimeout(() => {
      setBackgroundColor('inherit');
    }, 500);
    // Clear the timeout onComponentUnmount
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <div
      style={{ backgroundColor }}
      className={cn(
        styles['dataRow'],
        isEditable && styles['dataRow--editable'],
      )}
    >
      <div>{attribute}</div>
      <div>
        {isEditable && isValidElement(value)
          ? cloneElement(value as JSX.Element, { isEditable })
          : value}
      </div>
    </div>
  );
};

export default memo(DataRow, isEqual);
