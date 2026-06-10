import "./style.css";

import { useParams } from "react-router-dom";
import QuadroKanban from "../../layout/QuadroKanban";
import ColunaKanban from "../../layout/ColunaKanban";
import { useState } from "react";
import useColumns, { ColumnProvider } from "../../hooks/useColumns";
import { CardsProvider } from "../../hooks/useCards";

export default function PaginaQuadro() {
  const { id } = useParams();

  return (
    <ColumnProvider>
      <CardsProvider>
        <PaginaQuadroContent id={id} />
      </CardsProvider>
    </ColumnProvider>
  );
}

// Criamos um sub-componente para poder usar os hooks dentro dos Providers
function PaginaQuadroContent({ id }: { id: string | undefined }) {
  const { columns, adicionarColuna } = useColumns(id);
  const [showForm, setShowForm] = useState(false);
  const [tituloColuna, setTituloColuna] = useState("");

  const handleCreateColumn = () => {
    if (!tituloColuna.trim()) return;
    adicionarColuna(tituloColuna);
    setTituloColuna("");
    setShowForm(false);
  };

  return (
    <div className="pagina-quadro-container">
      <div className="header-pagina-quadro">
        <h1>{id}</h1>
        <button>
          <i className="fa-solid fa-paint-roller"></i>
        </button>
      </div>
      <QuadroKanban>
        {columns.map((col) => (
          <ColunaKanban key={col.id} id={col.id} titulo={col.titulo} />
        ))}

        {showForm ? (
          <div className="form-column">
            <input
              type="text"
              placeholder="Título da coluna"
              value={tituloColuna}
              onChange={(e) => setTituloColuna(e.target.value)}
            />
            <button onClick={handleCreateColumn}>Criar Coluna</button>
            <button onClick={() => setShowForm(false)}>Cancelar</button>
          </div>
        ) : (
          <div onClick={() => setShowForm(true)}>
            <button> <i className='fa-solid fa-plus'></i> Criar Coluna</button>
          </div>
        )}
      </QuadroKanban>
    </div>
  );
}
