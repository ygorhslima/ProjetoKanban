import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [quadros, setQuadros] = useState([
    { id: "projeto-site", nome: "Projeto Site Institucional" },
    { id: "estudos", nome: "Estudos da Semana" },
  ]);
  const [novoQuadroNome, setNovoQuadroNome] = useState("");
  const handleCreateQuadro = (e:React.InputEvent) => {
    e.preventDefault();
    if (!novoQuadroNome.trim()) {
      return;
    }
    const novoId = novoQuadroNome
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // Cria o novo objeto do quadro
    const novoQuadro = {
      id: novoId,
      nome: novoQuadroNome,
    };
    setQuadros([...quadros, novoQuadro]);
    setNovoQuadroNome("");
  };
  return (
    <main>
      <div>
        <h1>Criar novo quadro</h1>
        <form>
          <label htmlFor="titulo">titulo do quadro</label>
          <input type="text" id="titulo" />
          <button>Criar</button>
        </form>
      </div>

      <section>
        <h1>Suas áreas de trabalho</h1>
        <div>
          {quadros.map((quadro) => (
            <Link to={`/quadro/${quadro.id}`} key={quadro.id}>
                {quadro.nome}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
