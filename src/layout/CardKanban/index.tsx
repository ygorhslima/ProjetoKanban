import "./style.css";
import useCards from "../../hooks/useCards";

interface PropsCard {
  id: string;
  titulo: string;
  descricao?: string;
}

export default function CardKanban({ id, titulo, descricao }: PropsCard) {
  const { removerCard } = useCards();

  return (
    <div className="card-kanban-item">
      <div className="card-header">
        <h3>{titulo}</h3>
        <button onClick={() => removerCard(id)} className="btn-delete-card">×</button>
      </div>
      {descricao && <p className="card-description">{descricao}</p>}
    </div>
  );
}