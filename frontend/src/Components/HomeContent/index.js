import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";

const HomeContent = () => {
  const [loading, setLoading] = useState(true);
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        setGamesList(response.data.games);
        setLoading(false);
      } catch (error) {
        console.error("Não foi possível listar os games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const deleteGame = async (gameId) => {
    try {
      await axios.delete(`http://localhost:4000/game/${gameId}`);
      setGamesList((prevGames) => prevGames.filter((game) => game._id !== gameId));
      console.log("Jogo deletado!");
    } catch (error) {
      console.error("Não foi possível deletar o jogo:", gameId);
    }
  };

  return (
    <div className={styles.homeContent}>
      <div className={styles.listGamesCard}>
        <div className={styles.title}>
          <h2>Lista de jogos</h2>
        </div>

        <Loading loading={loading} />

        <div className={styles.games}>
          {gamesList.map((game) => (
            <ul key={game._id} className={styles.listGames}>
              <div className={styles.gameImg}>
                <img src="/images/game_cd_cover.png" alt="Jogo em estoque" />
              </div>
              <div className={styles.gameInfo}>
                <h3>Título: {game.title}</h3>
                <li>Plataforma: {game.platform}</li>
                <li>Ano: {game.year}</li>
                <li>Preço: {game.price}</li>
                <button
                  className={styles.btnDel}
                  onClick={() => {
                    const confirmed = window.confirm("Deseja mesmo excluir o jogo?");
                    if (confirmed) {
                      deleteGame(game._id);
                    }
                  }}
                >
                  Deletar
                </button>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
