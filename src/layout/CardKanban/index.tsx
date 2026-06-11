import "./style.css";
import useCards from "../../hooks/useCards";

interface PropsCard {
  id: string;
  titulo: string;
  descricao?: string;
}

export default function CardKanban({
  id,
  titulo,
  descricao,
}: PropsCard) {
  const { removerCard } = useCards();
  return (
    <div className="card-kanban">
      <div className="card-header">
        <div>
          <input type="checkbox" name="check" id={id} />
          <label htmlFor={id}>{titulo}</label>
        </div>
        <button onClick={() => removerCard(id)} className="btn-delete-card">
          <i className="fa-solid fa-close"></i>
        </button>
      </div>
      {descricao && <p className="card-description">{descricao}</p>}
    </div>
  );
}
