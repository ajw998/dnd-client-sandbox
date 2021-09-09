import { h } from 'preact';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setProficiencyBonus, setTargetArmor, addD20RollValue } from '../../../store/slices/attackRollCalculatorSlice';
import styles from './styles.module.scss';

// Add button to auto fill modifier
export const AttackRollCalculator = () => {
  const d20 = useAppSelector(( state ) => state.attackRollCalculator.d20value)
  const dispatch = useAppDispatch();
  return <div className={ styles[ 'attackRollCalculatorContainer' ] }>
  <section className={ styles['playerSection'] }>
    <h3 className={ styles['slam'] }>Player</h3>
    <div>
      <p>D20 Roll</p>
      <input id="d20roll" type="number" onChange={ (e) => dispatch(addD20RollValue(Number(e.currentTarget.value))) }/>
    </div>
      <div>
        <p>Modifiers</p>
        <input id="modifiers" type="number"/>
      </div>
      <div>
        <p>Proficiency Bonus</p>
      <input id="proficiencyBonus" type="number" onChange={ (e) => dispatch(setProficiencyBonus(Number(e.currentTarget.value))) }/>
      </div>
  </section>
    <section className={ styles['targetSection'] }>
      <h3>Target</h3>
      <div>
        <p>Target Armour</p>
      <input id="targetArmor" type="number" onChange={ (e) => dispatch(setTargetArmor(Number(e.currentTarget.value))) }/>
      </div>
    </section>
  </div>
}
