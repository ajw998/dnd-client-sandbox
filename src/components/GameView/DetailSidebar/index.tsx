import { h } from 'preact';
import styles from './styles.module.scss';
import NoInfoAvailable from './NoInfoAvailable';
import { useAppSelector } from 'src/store/hooks';
import { CharacterDetails } from './CharacterDetails';

export const DetailSidebar = () => {
  const selectedUser = useAppSelector(
    (state) => state.gameView.detailsViewCharacter,
  );

  return (
    <section className={styles['detailSidebar']}>
      {selectedUser && <CharacterDetails characterId={selectedUser} />}
    </section>
  );
};
