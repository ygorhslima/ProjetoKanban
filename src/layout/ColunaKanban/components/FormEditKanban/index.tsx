import "../style.css";
import useCards from "../../../../hooks/useCards";

export default function FormEditKanban({
  onClose,
  cardId,
  tituloValue,
  descricaoValue,
  setTituloValue,
  setDescricaoValue,
}: {
  onClose: () => void;
  cardId: string;
  tituloValue: string;
  descricaoValue: string;
  setTituloValue: (value: string) => void;
  setDescricaoValue: (value: string) => void;
}) {
  const { atualizarCard } = useCards();

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tituloValue.trim()) return;

    atualizarCard(cardId, { titulo: tituloValue, descricao: descricaoValue });
    onClose();
  };

  return (
    <div className="overlay-container">
      <form onSubmit={handleEdit} className="form-add-kanban">
        <input
          type="text"
          value={tituloValue}
          onChange={(e) => setTituloValue(e.target.value)}
        />

        <textarea
          value={descricaoValue}
          onChange={(e) => setDescricaoValue(e.target.value)}
          rows={3}
        ></textarea>

        <div className="buttons-form">
          <button type="submit" className="btn_add_card">
            Editar cartão
          </button>
          <button type="button" className="btn_close_card" onClick={onClose}>
            X
          </button>
        </div>
      </form>
    </div>
  );
}
