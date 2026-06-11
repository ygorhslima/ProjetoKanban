import { useState } from "react";
import "./style.css";
import FormAddKanban from "./FormAddKanban";
import useCards from "../../hooks/useCards";
import CardKanban from "../CardKanban"; // Assumindo que você tenha esse componente
import useColumns from "../../hooks/useColumns";

interface PropsColunaKanban {
  id: string;
  titulo: string;
}

export default function ColunaKanban({ id, titulo }: PropsColunaKanban) {
  const { getCardsPorColuna } = useCards();
  const [showForm, setShowForm] = useState(false);
  const cardsDaColuna = getCardsPorColuna(id);
  const { removerColuna } = useColumns(id);

  return (
    <div className="coluna-kanban-container">
      <div className="header">
        <p>{titulo}</p>
        <div>
          <span>{cardsDaColuna.length}</span>
          <button onClick={() => removerColuna(id)}>
            <i className="fa-solid fa-close"></i>
          </button>
        </div>
      </div>
      <div className="cards-list">
        {cardsDaColuna.map((card) => (
          <CardKanban
            key={card.id}
            id={card.id}
            titulo={card.titulo}
            descricao={card.descricao}
          />
        ))}
      </div>
      <div className="footer">
        {showForm ? (
          <FormAddKanban colunaId={id} onClose={() => setShowForm(false)} />
        ) : (
          <button onClick={() => setShowForm(true)}>
            <i className="fa-solid fa-plus"></i> Adicionar um cartão
          </button>
        )}
      </div>
    </div>
  );
}
