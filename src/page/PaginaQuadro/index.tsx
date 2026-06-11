import "./style.css";

import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { CardsProvider } from "../../hooks/useCards";
import ColunaKanban from "../../layout/ColunaKanban";
import QuadroKanban from "../../layout/QuadroKanban";
import useColumns, { ColumnProvider } from "../../hooks/useColumns";
import FormMudarFundo from "./components/FormMudarFundo";
import useBackground from "../../hooks/useBackground";
import useColors from "../../hooks/useColors";

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

  const {
    background,
    handleMudarFundo,
    showFormMudarFundo,
    setShowFormMudarFundo,
  } = useBackground();

  const [showForm, setShowForm] = useState(false);
  const [tituloColuna, setTituloColuna] = useState("");
  const { corEscolhida, setCorEscolhida, corFonte, setCorFonte } = useColors();

  const handleCreateColumn = () => {
    if (!tituloColuna.trim()) return;
    adicionarColuna(tituloColuna);
    setTituloColuna("");
    setShowForm(false);
  };

  return (
    <div
      style={{
        "--cor-coluna": corEscolhida,
        "--cor-fonte": corFonte,
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        objectFit: "cover",
        height: "100vh",
      } as React.CSSProperties}
    >
      <div className="header-pagina-quadro">
        <h1>{id}</h1>
        {showFormMudarFundo ? (
          <FormMudarFundo
            onSelect={handleMudarFundo}
            onCancel={() => setShowFormMudarFundo(false)}
            onColorChange={setCorEscolhida}
            corAtual={corEscolhida}
            corFonte={corFonte}
            onColorFontChange={setCorFonte}
          />
        ) : (
          <button onClick={() => setShowFormMudarFundo(true)}>
            <i className="fa-solid fa-paint-roller"></i>
          </button>
        )}
      </div>

      <QuadroKanban>
        {columns.map((col) => (
          <ColunaKanban
            key={col.id}
            id={col.id}
            titulo={col.titulo}
            corTema={corEscolhida}
            corFonte={corFonte}
          />
        ))}

        {showForm ? (
          <div className="form-column">
            <input
              type="text"
              placeholder="Título da coluna"
              value={tituloColuna}
              onChange={(e) => setTituloColuna(e.target.value)}
            />
            <div>
              <button onClick={handleCreateColumn}>Criar Coluna</button>
              <button onClick={() => setShowForm(false)}>Cancelar</button>
            </div>
          </div>
        ) : (
          <div onClick={() => setShowForm(true)}>
            <button>
              <i className="fa-solid fa-plus"></i> Criar Coluna
            </button>
          </div>
        )}
      </QuadroKanban>
    </div>
  );
}
