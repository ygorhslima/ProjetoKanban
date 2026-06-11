import "./style.css";

import { useState } from "react";
import useColumns from "../../../../hooks/useColumns";
import useBackground from "../../../../hooks/useBackground";
import useColors from "../../../../hooks/useColors";
import usePages from "../../../../hooks/usePages";
import FormMudarFundo from "../FormMudarFundo";
import QuadroKanban from "../../../../layout/QuadroKanban";
import ColunaKanban from "../../../../layout/ColunaKanban";

export default function PaginaQuadroContent({
  id,
}: {
  id: string | undefined;
}) {
  const { quadros } = usePages();
  const quadroAtual = quadros.find((q) => q.id === id);

  const { columns, adicionarColuna } = useColumns(id);

  const {
    background,
    handleMudarFundo,
    showFormMudarFundo,
    setShowFormMudarFundo,
  } = useBackground(id);

  const [showForm, setShowForm] = useState(false);
  const [tituloColuna, setTituloColuna] = useState("");

  const { corEscolhida, setCorEscolhida, corFonte, setCorFonte } =
    useColors(id);

  if (!id) return;

  const handleCreateColumn = () => {
    if (!tituloColuna.trim()) return;
    adicionarColuna(tituloColuna);
    setTituloColuna("");
    setShowForm(false);
  };

  return (
    <div
      className="pagina-quadro-container"
      style={
        {
          "--cor-coluna": corEscolhida,
          "--cor-fonte": corFonte,
          backgroundImage: `url(${background})`,
        } as React.CSSProperties
      }
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
              <button onClick={handleCreateColumn} className="btn_criar">
                Criar Coluna
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="btn_cancelar"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div onClick={() => setShowForm(true)} className="btn_criar_coluna">
            <button>
              <i className="fa-solid fa-plus"></i> Criar Coluna
            </button>
          </div>
        )}
      </QuadroKanban>
    </div>
  );
}
