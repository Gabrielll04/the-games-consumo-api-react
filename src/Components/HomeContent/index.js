import Loading from '../Loading';
import styles from './HomeContent.module.css'

function HomeContent() {
  return (
      <div className={styles.homeContent}>
        <div className={styles.listGamesCard}>
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <div className={styles.games} id="games">
            <Loading />
          </div>
        </div>
    </div>
  );
}

export default HomeContent;
