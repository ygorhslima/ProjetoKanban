import "./style.css";
import ImgCard from "../../assets/img-card.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Ajustei os IDs para serem únicos, evitando bugs no React
  const [quadros, setQuadros] = useState([
    { id: "Faculdade", nome: "Projeto Site Institucional" },
    { id: "Trabalho", nome: "Estudos da Semana" },
    { id: "Pessoal", nome: "Projeto Site Institucional" },
    { id: "Financeiro", nome: "Estudos da Semana" },
  ]);

  const [novoQuadroNome, setNovoQuadroNome] = useState("");

  const handleCreateQuadro = (e) => {
    e.preventDefault();
    if (!novoQuadroNome.trim()) return;

    const novoId =
      novoQuadroNome
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") + `-${Date.now()}`; // Garante ID único

    const novoQuadro = {
      id: novoId,
      nome: novoQuadroNome,
    };

    setQuadros([...quadros, novoQuadro]);
    setNovoQuadroNome("");
  };

  return (
    <main className="home-container">
      <div className="form-criar-quadro">
        <h2>Criar novo quadro</h2>
        <form onSubmit={handleCreateQuadro}>
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
