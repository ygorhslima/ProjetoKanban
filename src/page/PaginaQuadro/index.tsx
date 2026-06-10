import "./style.css";

import { useParams } from "react-router-dom";
import QuadroKanban from "../../layout/QuadroKanban";
import ColunaKanban from "../../layout/ColunaKanban";
import CardKanban from "../../layout/CardKanban";

export default function PaginaQuadro() {
  const { id } = useParams();
  return (
    <div className="pagina-quadro-container">
      <div className="header-pagina-quadro">
        <h1>{id}</h1>
        <button>
          <i className="fa-solid fa-paint-roller"></i>
        </button>
      </div>
      <QuadroKanban>
        <ColunaKanban>
          <CardKanban/>
        </ColunaKanban>

        <ColunaKanban>
          <CardKanban/>
        </ColunaKanban>

        <ColunaKanban>
          <CardKanban/>
        </ColunaKanban>

        <ColunaKanban>
          <CardKanban/>
        </ColunaKanban>

        <ColunaKanban>
          <CardKanban/>
        </ColunaKanban>

        <ColunaKanban>
          <CardKanban/>
        </ColunaKanban>
      </QuadroKanban>
    </div>
  );
}
