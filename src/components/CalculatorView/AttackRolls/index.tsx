import { h } from 'preact';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import Outcome from './Outcome';
import {
  setProficiencyBonus,
  setModifier,
  setTargetArmor,
  setD20Value,
  calculateAttackRoll,
} from '../../../store/slices/attackRollCalculatorSlice';
import styles from './styles.module.scss';
import Input from '../../Input';
import Markdown from 'markdown-to-jsx';
import { ATTACK_ROLL_DESCRIPTION } from '../../../constants';

// Add button to auto fill modifier
export const AttackRollCalculator = () => {
  const { d20Value, modifier, proficiencyBonus, targetArmor } =
    useAppSelector((state) => state.attackRollCalculator);

  const dispatch = useAppDispatch();
  return (
    <div className={styles['attackRollCalculatorContainer']}>
      <section className={styles['calculatorContainer']}>
        <Outcome />
        <div class={styles['calculator']}>
          <section className={styles['dataInputArea']}>
            <h2 className={styles['header']}>Attack Roll Calculator</h2>
            <section className={styles['description']}>
              <Markdown>{ATTACK_ROLL_DESCRIPTION}</Markdown>
            </section>
            <h3>Player</h3>
            <div className={styles['inputWrapper']}>
              <Input
                inputClassName={styles['numberInput']}
                value={d20Value}
                labelText={'D20 Roll'}
                max={20}
                placeholder={' '}
                type={'number'}
                onChange={(e) =>
                  dispatch(setD20Value(Number(e.currentTarget.value)))
                }
              />
            </div>
            <div className={styles['inputWrapper']}>
              <Input
                inputClassName={styles['numberInput']}
                value={modifier}
                labelText={'Modifier'}
                placeholder={' '}
                type={'number'}
                onChange={(e) =>
                  dispatch(setModifier(Number(e.currentTarget.value)))
                }
              />
            </div>
            <div className={styles['inputWrapper']}>
              <Input
                inputClassName={styles['numberInput']}
                value={proficiencyBonus}
                labelText={'Proficiency Bonus'}
                placeholder={' '}
                type={'number'}
                onChange={(e) =>
                  dispatch(setProficiencyBonus(Number(e.currentTarget.value)))
                }
              />
            </div>
            <h3>Target</h3>
            <div>
              <Input
                inputClassName={styles['numberInput']}
                value={targetArmor}
                labelText={'Target Armor'}
                placeholder={' '}
                type={'number'}
                onChange={(e) =>
                  dispatch(setTargetArmor(Number(e.currentTarget.value)))
                }
              />
            </div>
          </section>
          <section className={styles['buttonSection']}>
            <button
              className={styles['calculateButton']}
              onClick={() => dispatch(calculateAttackRoll())}
            >
              Calculate
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};
