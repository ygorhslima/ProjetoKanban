import "./style.css";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { CardsProvider } from "../../hooks/useCards";
import ColunaKanban from "../../layout/ColunaKanban";
import QuadroKanban from "../../layout/QuadroKanban";
import useColumns, { ColumnProvider } from "../../hooks/useColumns";

import Wallpaper1 from "../../assets/wallpaper-01.jpg";
import Wallpaper2 from "../../assets/wallpaper-02.jpg";
import Wallpaper3 from "../../assets/wallpaper-03.jpg";
import Wallpaper4 from "../../assets/wallpaper-04.jpg";

const listaMudarFundo = [
  {
    img: Wallpaper1,
  },
  {
    img: Wallpaper2,
  },
  {
    img: Wallpaper3,
  },
  {
    img: Wallpaper4,
  },
];

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

  const [showFormMudarFundo, setShowFormMudarFundo] = useState(false);
  const [background, setBackground] = useState(Wallpaper1);

  const handleCreateColumn = () => {
    if (!tituloColuna.trim()) return;
    adicionarColuna(tituloColuna);
    setTituloColuna("");
    setShowForm(false);
  };

  const handleMudarFundo = (novaImagem: string) => {
    setBackground(novaImagem);
    setShowFormMudarFundo(false);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        objectFit: "cover",
        height: "100vh",
      }}
    >
      <div className="header-pagina-quadro">
        <h1>{id}</h1>
        {showFormMudarFundo ? (
          <div className="wallpapers-list-container">
            <div className="items">
              {listaMudarFundo.map((el, index) => {
                return (
                  <button key={index} onClick={() => handleMudarFundo(el.img)}>
                    <img src={el.img} className="imgs" />
                  </button>
                );
              })}
            </div>
            <button onClick={() => setShowFormMudarFundo(false)}>Sair</button>
          </div>
        ) : (
          <button onClick={() => setShowFormMudarFundo(true)}>
            <i
              className="fa-solid fa-paint-roller"
              onClick={handleMudarFundo}
            ></i>
          </button>
        )}
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
