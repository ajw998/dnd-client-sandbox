import type { CharacterRole } from '../types';
import type { CharacterCardProps } from 'src/components/CharacterCard';

type CharacterRoleData = Pick<
  CharacterCardProps,
  'isPlayable' | 'isParty' | 'role'
>;

export const getCharacterRole = ({
  isPlayable,
  isParty,
  role,
}: CharacterRoleData): Array<CharacterRole> => {
  if (!isPlayable && !isParty && !role) return ['unknown'];
  if (isPlayable) return ['player'];
  return [
    ...(isParty ? ['companion'] : []),
    ...(role ?? []),
  ] as Array<CharacterRole>;
};
