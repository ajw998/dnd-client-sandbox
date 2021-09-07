import { h } from 'preact';
import { db } from 'src/firebase';
import styles from './styles.module.scss';
import { dbSeedFunc } from './utils/dbSeedFunc';
import { revokeDMPrivileges } from './utils/revokeDMPrivileges';

export const SuperAdminView = () => {
  return (
    <article className={styles['main']}>
      <h1 className={styles['header']}>Super Admin</h1>
      <section>
        <h2>Seed Database</h2>
        <button className={styles['actionButton']} onClick={dbSeedFunc(db)}>
          Seed
        </button>
      </section>

      <section>
        <h2>Revoke DM Privileges</h2>
        <button
          className={styles['actionButton']}
          onClick={revokeDMPrivileges(db)}
        >
          Revoke DM
        </button>
      </section>
    </article>
  );
};
