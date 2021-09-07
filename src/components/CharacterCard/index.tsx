import { h } from 'preact';
import { cloneElement, useState } from 'preact/compat';
import cn from 'classnames';
import styles from './style.module.scss';
import type {
  DND5eClass,
  DND5eCharacterSkills,
  DND5eCharacterAbility,
  DND5eCharacterState,
  CharacterRole,
  CharacterStats,
} from 'src/types';
import { PlayerStateCard } from './CharacterStateCard';
import AbilityCard from './AbilityCard';
import SkillCard from './SkillSection';
import InfoPill from 'src/components/common/InfoPill';
import { getCharacterRole } from 'src/utils/getCharacterRole';
import { CHARACTER_ROLE_COLOUR, CHARACTER_ROLE } from 'src/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-collapse';
import { useAppSelector } from 'src/store/hooks';
import { shallowEqual } from 'react-redux';
import { setDetailsViewCharacter } from 'src/store/slices/gameViewSlice';
import { useAppDispatch } from 'src/store/hooks';

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
    DND5eCharacterAbility,
    DND5eCharacterState,
    DND5eCharacterSkills
  >;
  // Indicates whether this player card represents
  // the current player's character
  isPlayable?: boolean;
  // Indicates whether the current card is part of the player's party
  isParty?: boolean;
  // Character's role in the game
  role?: Array<CharacterRole>;
  // Check whether the character card is displayed in full
  stacked?: boolean;
  // Check if entire player card can be edited
  isEditable?: boolean;
  // Check if the card is currently selected
  isSelected?: boolean;
}

export const CharacterCard = ({
  id,
  characterClass,
  isParty = true,
  isPlayable = false,
  name = '',
  // playerStats,
  role = [],
  isEditable = true,
}: CharacterCardProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useAppDispatch();

  const { ability, skill, state } = useAppSelector(
    (state) => state.firestore.data.players[id],
    shallowEqual,
  );
  const { detailsViewCharacter } = useAppSelector((state) => state.gameView);

  return (
    <div
      onClick={() =>
        dispatch(
          detailsViewCharacter === id
            ? setDetailsViewCharacter('')
            : setDetailsViewCharacter(id),
        )
      }
      className={cn(
        styles['characterCard'],
        detailsViewCharacter === id && styles['selected'],
      )}
    >
      <section className={styles['meta']}>
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
      </section>
      {cloneElement(<PlayerStateCard characterId={id} state={state} />, {
        isEditable,
      })}
      <Collapse
        className={styles['abilitiesAndSkillsSection']}
        isOpened={isOpen}
      >
        <AbilityCard
          characterId={id}
          isEditable={isEditable}
          stats={ability}
        />
        {skill && <SkillCard isEditable={isEditable} skillset={skill} />}
      </Collapse>
      <div
        className={styles['expandArrow']}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </div>
    </div>
  );
};
