import { h } from 'preact';
import { CharacterCard } from 'src/components/CharacterCard';
import type { CharacterInformation } from 'src/types';

export const createCharacterArray = (characters: CharacterInformation) => {
  return Object.entries(characters).map(([id, data], index) => {
    return (
      <CharacterCard
        key={index}
        characterClass={data.meta.class}
        id={id}
        name={data.meta.name ?? 'Unknown'}
        playerStats={data}
      />
    );
  });
};
