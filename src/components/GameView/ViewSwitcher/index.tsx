import { h } from 'preact';
import { memo } from 'preact/compat';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { GameView, setMainView } from '../../../store/slices/gameViewSlice';
import styles from './styles.module.scss';
import cn from 'classnames';

interface ViewSwitcherItem {
  displayText: string;
  // The Redux game view state identifier
  path: GameView;
  isActive: boolean;
  // Flag for determining if the current switcher should be disabled
  // Added so we can prevent people from clicking on it
  // while we await the feature impemenation
  isDisabled?: boolean;
}

const ViewSwitcherItem = ({
  displayText,
  path,
  isActive,
  isDisabled = false,
}: ViewSwitcherItem) => {
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
      onClick={() => !isDisabled && dispatch(setMainView(path))}
    >
      {displayText}
    </span>
  );
};

export const ViewSwitcher = () => {
  const nav: Array<Omit<ViewSwitcherItem, 'isActive'>> = [
    { displayText: 'Party', path: 'party' },
    { displayText: 'Global', path: 'global', isDisabled: true },
  ];

  const mainView = useAppSelector((state) => state.gameView.mainView);
  return (
    <section className={styles['viewSwitcher']}>
      {nav.map((i) => {
        return ViewSwitcherItem({ ...i, isActive: i.path === mainView });
      })}
    </section>
  );
};

export default memo(ViewSwitcher);
