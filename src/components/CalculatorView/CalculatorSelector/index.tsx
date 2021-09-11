import { h } from 'preact';
import { memo } from 'preact/compat';
import { CalculatorView, setCalculatorView } from '../../../store/slices/calculatorViewSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import cn from 'classnames';
import styles from './styles.module.scss';

// TODO - This can be abstracted into ViewSwitcherItem
interface CalculatorViewItem {
  displayText: string;
  // The Redux game view state identifier
  path: CalculatorView;
  isActive: boolean;
  // Flag for determining if the current switcher should be disabled
  // Added so we can prevent people from clicking on it
  // while we await the feature impemenation
  isDisabled?: boolean;
}

const CalculatorViewItem = ({
  displayText,
  path,
  isActive,
  isDisabled = false,
}: CalculatorViewItem) => {
  const dispatch = useAppDispatch();
  return (
    <span
      className={cn(
        styles['viewSwitcherItem'],
        isDisabled
          ? styles['viewSwitcherItem--disabled']
          : styles['viewSwitcherItem--enabled'],
        isActive && styles['viewSwitcherItem--active'],
      )}
      onClick={() => !isDisabled && dispatch(setCalculatorView(path))}
    >
      {displayText}
    </span>
  );
};

export const CalculatorSelector = () => {
  const nav: Array<Omit<CalculatorViewItem, 'isActive'>> = [
    { displayText: 'Attack Roll', path: 'atk-roll' },
    { displayText: 'Damage Roll', path: 'dmg-roll' },
  ];

  const currentView = useAppSelector((state) => state.calculatorView.currentView);

  return (
    <section className={styles['viewSwitcher']}>
      {nav.map((i) => {
        return CalculatorViewItem({ ...i, isActive: i.path === currentView });
      })}
    </section>
  );
};

export default memo(CalculatorSelector);
