import type {
  DND5eCharacterSkills,
  DND5eAbility,
  Skill,
  SkillSet,
} from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-collapse';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { h } from 'preact';
import { useState, memo } from 'preact/compat';
import { ABILITY_ABBREVIATION, CHARACTER_SKILL_TEXT } from '../../constants';
import styles from './styles.module.css';

interface SkillCardProps {
  skillset: SkillSet<DND5eCharacterSkills, DND5eAbility>;
}

const SkillRow = ({
  name,
  isProficient,
  value,
  modifier,
}: { name: string } & Skill<DND5eAbility>) => {
  return (
    <div className={styles['skillRow']}>
      <div>
        {name}{' '}
        <span className={styles['modifierText']}>
          ({ABILITY_ABBREVIATION[modifier] ?? ''})
        </span>{' '}
        {isProficient && (
          <FontAwesomeIcon
            className={styles['proficientMarker']}
            icon={faStar}
          />
        )}
      </div>
      <div>{value} </div>
    </div>
  );
};

// TODO - Potentially can be abstracted away (See AbilityCard)
export const SkillCard = ({ skillset }: SkillCardProps) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const skillRows = Object.entries(CHARACTER_SKILL_TEXT).map(
    ([k, v], index) => {
      const data = skillset[k];
      return (
        <SkillRow
          key={index}
          name={v}
          isProficient={data.isProficient}
          value={data.value}
          modifier={data.modifier}
        />
      );
    },
  );
  return (
    <section>
      <h4 className={styles['header']} onClick={ () => setIsOpen(!isOpen) }>
        <FontAwesomeIcon icon={ isOpen ? faCaretDown : faCaretRight } />  Skills
      </h4>
      <Collapse isOpened={ isOpen }>
        {skillRows}
      </Collapse>
    </section>
  );
};

export default memo(SkillCard);
