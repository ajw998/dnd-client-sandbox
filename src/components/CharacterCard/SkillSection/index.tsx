import type { DND5eCharacterSkills, DND5eAbility, SkillSet } from 'src/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import isEqual from 'lodash.isequal';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { h } from 'preact';
import DataRow from 'src/components/common/DataRow';
import { useState, memo } from 'preact/compat';
import { ABILITY_ABBREVIATION, CHARACTER_SKILL_TEXT } from 'src/constants';
import styles from './styles.module.scss';
import EditableNumberInput from 'src/components/common/EditableNumberInput';

interface SkillCardProps {
  isEditable?: boolean;
  skillset: SkillSet<DND5eCharacterSkills, DND5eAbility>;
}

export const SkillAttribute = ({ name, isProficient, modifier }) => {
  return (
    <div>
      {name}{' '}
      <span className={styles['modifierText']}>
        ({ABILITY_ABBREVIATION[modifier] ?? ''})
      </span>{' '}
      {isProficient && (
        <span>
          <FontAwesomeIcon
            className={styles['proficientMarker']}
            icon={faStar}
          />
        </span>
      )}
    </div>
  );
};

const MemoisedSkillAttribute = memo(SkillAttribute);

// TODO - Potentially can be abstracted away (See AbilityCard)
export const SkillCard = ({
  skillset,
  isEditable = false,
}: SkillCardProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const skillRows = Object.entries(CHARACTER_SKILL_TEXT).map(
    ([k, v], index) => {
      const data = skillset[k];
      const attributeRow = (
        <MemoisedSkillAttribute
          name={v}
          isProficient={data.isProficient}
          modifier={data.modifier}
        />
      );
      const valueRow = <EditableNumberInput value={data.value} />;
      return (
        <DataRow
          isEditable={isEditable}
          key={index}
          attribute={attributeRow}
          value={valueRow}
        />
      );
    },
  );
  return (
    <section>
      <h4 className={styles['header']} onClick={() => setIsOpen(!isOpen)}>
        Skills
      </h4>
      {skillRows}
    </section>
  );
};

export default memo(SkillCard, isEqual);
