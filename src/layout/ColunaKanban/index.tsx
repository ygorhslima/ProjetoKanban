import React, { useState } from "react";
import "./style.css";
import FormAddKanban from "./FormAddKanban";
import useCards from "../../hooks/useCards";
import CardKanban from "../CardKanban";
import useColumns from "../../hooks/useColumns";

interface PropsColunaKanban {
  id: string;
  titulo: string;
  corTema: string;
  corFonte: string;
}

export default function ColunaKanban({
  id,
  titulo,
  corTema,
  corFonte,
}: PropsColunaKanban) {
  const { getCardsPorColuna } = useCards();
  const { removerColuna } = useColumns(id);

  const [showForm, setShowForm] = useState(false);
  const cardsDaColuna = getCardsPorColuna(id);

  return (
    <div
      className="coluna-kanban"
      style={
        {
          "--cor-coluna": corTema,
          "--cor-fonte": corFonte,
        } as React.CSSProperties
      }
    >
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
