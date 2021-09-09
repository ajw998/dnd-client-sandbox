import { h } from 'preact';
import styles from './styles.module.scss';
import { AttackRollCalculator } from './AttackRolls'

interface CalculatorView {
  // Check for the current game id
  // This would be useful for auto-filling
  gameId?: string;
}

export const CalculatorView = () => {
  return <article className={ styles['calculatorView'] }>
    <AttackRollCalculator />
  </article>
}
