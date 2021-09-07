import { h } from 'preact';
import isEqual from 'lodash.isequal';
import { memo } from 'preact/compat';
import styles from './styles.module.scss';
import { useAppSelector } from 'src/store/hooks';
import Features from './Features';

export const CharacterDetails = ({
  characterId,
}: {
  characterId: string;
}) => {
  const playerData =
    characterId &&
    useAppSelector((state) => state.firestore.data.players[characterId]);

  let content;

  const { meta, ability } = playerData;

  if (playerData.features) {
    content = playerData.features.map(
      (item: { name: string; description: string }) => <Features {...item} />,
    );
  } else {
    content = <div>No features and traits founds!</div>;
  }

  return (
    <section>
      <h1 className={styles['characterName']}>{meta?.name}</h1>
      <h2 className={styles['sectionTitle']}>Features & Traits</h2>
      {content}
    </section>
  );
};

export default memo(CharacterDetails, isEqual);
