import { useParams } from "react-router-dom";

export default function PaginaQuadro() {
  const { id } = useParams();
  return (
    <div>
      <h1>Quadro: {id.toUpperCase().replace(/-/g, " ")}</h1>
      <p>A URL desta página é dinâmica: /quadro/{id}</p>
    </div>
  );
}
