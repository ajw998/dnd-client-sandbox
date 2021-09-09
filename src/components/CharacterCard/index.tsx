import { h } from 'preact';
import { useState } from 'preact/compat';
import styles from './style.module.scss';
import type {
  DND5eClass,
  DND5eCharacterSkills,
  DND5ePlayerAbility,
  DND5eCharacterState,
  CharacterRole,
  CharacterStats,
} from '../../types';
import { PlayerStateCard } from '../CharacterStateCard';
import AbilityCard from '../AbilityCard';
import SkillCard from '../SkillsCard';
import InfoPill from '../InfoPill';
import { getCharacterRole } from '../../utils/getCharacterRole';
import { CHARACTER_ROLE_COLOUR, CHARACTER_ROLE } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-collapse';

export interface CharacterCardProps {
  // Internal database id string
  id: string;
  // Publicly readable name
  // This is the value exposed to all other players
  name: string;
  // Character class
  characterClass?: DND5eClass;
  // Contains all readable player's stats
  playerStats: CharacterStats<
    DND5ePlayerAbility,
    DND5eCharacterState,
    DND5eCharacterSkills
  >;
  // Indicates whether this player card represents
  // the current player's character
  isPlayable: boolean;
  // Indicates whether the current card is part of the player's party
  isParty?: boolean;
  // Character's role in the game
  role?: Array<CharacterRole>;
}

export const CharacterCard = ({
  name = '',
  playerStats,
  isParty = true,
  role = [],
  characterClass,
  isPlayable,
}: CharacterCardProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={styles['characterCard']}
      style={{ backgroundColor: isPlayable ? '#f3f3f3' : '#fff' }}
    >
      <h3 className={styles['playerName']}>{name}</h3>
      <div className={styles['playerClass']}>{characterClass}</div>
      <div className={styles['infoPillBlock']}>
        {getCharacterRole({ isPlayable, isParty, role }).map((c, index) => {
          return (
            <InfoPill
              key={index}
              text={CHARACTER_ROLE[c] ?? 'Unknown'}
              textColour={'#fff'}
              bgColour={CHARACTER_ROLE_COLOUR[c]}
            />
          );
        })}
      </div>
      <PlayerStateCard state={playerStats.state} />
      <Collapse isOpened={ isOpen }>
        <AbilityCard title={name} stats={playerStats.ability} />
        {playerStats.skill && <SkillCard skillset={playerStats.skill} />}
      </Collapse>
      <div className={ styles['expandArrow']} onClick={ () => setIsOpen(!isOpen) }>
        <FontAwesomeIcon icon={isOpen? faCaretUp : faCaretDown} />
      </div>
    </div>
  );
};
