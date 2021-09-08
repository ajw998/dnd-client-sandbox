import { h } from 'preact';
import styles from './style.module.css';
import type {
  DND5eClass,
  DND5ePlayerAbility,
  DND5eCharacterState,
  CharacterStats,
} from '../../types';
import { PlayerStateCard } from '../CharacterStateCard';
import AbilityCard from '../AbilityCard';
import InfoPill from '../InfoPill';
import type { CharacterRole } from '../../types';
import { getCharacterRole } from '../../utils/getCharacterRole';
import { CHARACTER_ROLE_COLOUR, CHARACTER_ROLE } from '../../constants';

export interface CharacterCardProps {
  // Internal database id string
  id: string;
  // Publicly readable name
  // This is the value exposed to all other players
  name: string;
  // Character class
  characterClass?: DND5eClass;
  // Contains all readable player's stats
  playerStats: CharacterStats<DND5ePlayerAbility, DND5eCharacterState>;
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
  return (
    <div
      className={styles['characterCard']}
      style={{ backgroundColor: isPlayable ? 'rgb(48,162,218)' : 'inherit' }}
    >
      <h3 className={styles['playerName']}>{name}</h3>
      <div className={styles['playerClass']}>{characterClass}</div>
      <div className={styles['infoPillBlock']}>
        {getCharacterRole({ isPlayable, isParty, role }).map((c) => {
          return (
            <InfoPill
              text={CHARACTER_ROLE[c] ?? 'Unknown'}
              textColour={'#fff'}
              bgColour={CHARACTER_ROLE_COLOUR[c]}
            />
          );
        })}
      </div>
      <PlayerStateCard state={playerStats.state} />
      <AbilityCard title={name} stats={playerStats.ability} />
    </div>
  );
};
