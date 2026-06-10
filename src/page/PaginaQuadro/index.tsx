import { useParams } from "react-router-dom";
import "./style.css";
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
      
    </div>
  );
}
