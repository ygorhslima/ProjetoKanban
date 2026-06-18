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
  
  const handleDragStart = (e:React.DragEvent) => {
    e.dataTransfer.setData("cardId", id);
  }

  return (
    <div className="card-kanban" draggable onDragStart={handleDragStart}>
      <div className="card-header">
        <div>
          <input type="checkbox" name="check" id={id} />
          <label htmlFor={id}>{titulo}</label>
        </div>
        <button onClick={() => { 
          const isConfirmed = window.confirm("tem certeza de que deseja remover o card?");
          if(isConfirmed){
            removerCard(id)
          }
        }} className="btn-delete-card">
          <i className="fa-solid fa-close"></i>
        </button>
      </div>
      {descricao && <p className="card-description">{descricao}</p>}
    </div>
  );
}
