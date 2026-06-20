import "../style.css";
import useCards from "../../../../hooks/useCards";
import { useState } from "react";

export default function FormAddKanban({
  onClose,
  colunaId,
}: {
  onClose: () => void;
  colunaId: string;
}) {
  const { adicionarCard } = useCards();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleAdd = (e: React.InputEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;

    adicionarCard(titulo, descricao, colunaId);
    setTitulo("");
    onClose();
  };

  return (
    <form onSubmit={handleAdd} className="form-add-kanban">
      <input
        type="text"
        placeholder="insira um título ou cole um link..."
        value={titulo}
        onChange={(e) => {
          setTitulo(e.target.value);
        }}
      />

      <textarea
        placeholder="diga a descrição..."
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        rows={3} // Você pode ajustar o número de linhas visíveis
      ></textarea>

      <div className="buttons-form">
        <button className="btn_add_card">Adicionar cartão</button>
        <button className="btn_close_card" onClick={onClose}>
          X
        </button>
      </div>
    </form>
  );
}
