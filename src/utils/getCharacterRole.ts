import type { CharacterCardProps } from '../components/CharacterCard';

type CharacterRoleData = Pick<
  CharacterCardProps,
  'isPlayable' | 'isParty' | 'role'
>;

export const getCharacterRole = ({
  isPlayable,
  isParty,
  role,
}: CharacterRoleData): Array<string> => {
  if (!isPlayable && !isParty && !role) return ['unknown'];
  if (isPlayable) return ['player'];
  return [...(isParty ? ['companion'] : []), ...(role ?? [])];
};
