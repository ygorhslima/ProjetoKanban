import "./style.css";
import useCards from "../../hooks/useCards";
import { useState } from "react";
import FormEditKanban from "../ColunaKanban/components/FormEditKanban";

interface PropsCard {
  id: string;
  titulo: string;
  descricao?: string;
}

export default function CardKanban({ id, titulo, descricao }: PropsCard) {
  const { removerCard } = useCards();
  const [showForm, setShowForm] = useState(false);
  const [tituloEdit, setTituloEdit] = useState(titulo);
  const [descricaoEdit, setDescricaoEdit] = useState(descricao || "");

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("cardId", id);
  };

  return (
    <div className="card-kanban relative" draggable onDragStart={handleDragStart}>
      {showForm ? (
        <div className="form-edit-container">
          <FormEditKanban
            onClose={() => setShowForm(false)}
            cardId={id}
            tituloValue={tituloEdit}
            descricaoValue={descricaoEdit}
            setTituloValue={setTituloEdit}
            setDescricaoValue={setDescricaoEdit}
          />
        </div>
      ) : (
        <>
          <div className="card-header">
            <div>
              <input type="checkbox" name="check" id={id} />
              <label htmlFor={id}>{titulo}</label>
            </div>

            <div>
              {/*BOTÃO DE EDITAR*/}
              <button onClick={() => setShowForm(true)}>
                <i className="fa-solid fa-pencil" style={{ color: "white" }}></i>
              </button>

              <button
                onClick={() => {
                  const isConfirmed = window.confirm(
                    "tem certeza de que deseja remover o card?",
                  );
                  if (isConfirmed) removerCard(id);
                }}
                className="btn-delete-card"
              >
                <i className="fa-solid fa-close"></i>
              </button>
            </div>
          </div>
          {descricao && <p className="card-description">{descricao}</p>}
        </>
      )}
    </div>
  );
}