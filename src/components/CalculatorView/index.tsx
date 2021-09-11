import { h } from 'preact';
import styles from './styles.module.scss';
import { AttackRollCalculator } from './AttackRolls';
import { DamageRollsCalculator } from './DamageRolls';
import { useAppSelector } from '../../store/hooks';
import CalculatorSelector from './CalculatorSelector';

interface CalculatorView {
  // Check for the current game id
  // This would be useful for auto-filling
  gameId?: string;
}

export const CalculatorView = () => {
  const currentView = useAppSelector((state) => state.calculatorView.currentView)
  
  let calculator;

  switch(currentView) {
    case 'atk-roll':
      calculator = <AttackRollCalculator />;
      break;
    case 'dmg-roll':
      calculator = <DamageRollsCalculator />;
      break;
    default:
      calculator = <AttackRollCalculator />;
  }

  return (
    <article className={styles['calculatorView']}>
      <CalculatorSelector />
      { calculator } 
    </article>
  );
};
