import "./style.css";
import ImgCard from "../../assets/img-card.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import usePages from "../../hooks/usePages";

export default function Home() {
  const { quadros, adicionarQuadro } = usePages();
  const [novoQuadroNome, setNovoQuadroNome] = useState("");

  const handleCreateQuadro = (e: React.InputEvent) => {
    e.preventDefault();
    if (!novoQuadroNome.trim()) return;

    // Chama a função pronta do hook
    adicionarQuadro(novoQuadroNome);

    setNovoQuadroNome(""); // Limpa o input
  };

  return (
    <main className="home-container">
      <div className="form-criar-quadro">
        <h2>Criar novo quadro</h2>
        <form onSubmit={() => handleCreateQuadro}>
          <input
            type="text"
            id="titulo"
            placeholder="Título do quadro"
            value={novoQuadroNome}
            onChange={(e) => setNovoQuadroNome(e.target.value)}
          />
          <button type="submit">Criar</button>
        </form>
      </div>

      <section className="section-area-trabalho">
        <h1>Suas áreas de trabalho</h1>
        <div className="container-card-area-trabalho">
          {quadros.map((quadro) => (
            <div key={quadro.id} className="card-area-trabalho">
              <Link to={`/quadro/${quadro.id}`} className="card-link">
                <div className="card-banner">
                  <img src={ImgCard} alt="" />
                </div>
                <div className="card-conteudo">
                  <h3>{quadro.nome}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
