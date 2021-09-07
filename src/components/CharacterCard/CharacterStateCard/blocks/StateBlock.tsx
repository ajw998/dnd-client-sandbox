import { h } from 'preact';
import { memo } from 'react';
import {
  FontAwesomeIconProps,
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import EditableNumberInput from 'src/components/common/EditableNumberInput';
import styles from './styles.module.scss';

interface StateBlockProps {
  value: number;
  editFn?: (value: number) => void;
  stateId: string;
  hoverText?: string;
  isEditable?: boolean;
  iconClassName?: string;
  inputClassName?: string;
}

export const StateBlock = ({
  iconClassName,
  inputClassName,
  value,
  editFn,
  isEditable = false,
  stateId,
  icon,
  hoverText,
}: StateBlockProps & Pick<FontAwesomeIconProps, 'icon'>) => {
  return (
    <div id={stateId} className={styles['block']}>
      <FontAwesomeIcon className={iconClassName} icon={icon} />
      &nbsp;{' '}
      <EditableNumberInput
        inputClassName={inputClassName}
        value={value}
        inputFn={editFn}
        isEditable={isEditable}
      />
    </div>
  );
};

export default memo(StateBlock);
