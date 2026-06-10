import { useState } from "react";
import "./style.css";

interface PropsColunaKanban {
  children: React.ReactNode;
}

function FormAddKanban({ onClose }: { onClose: () => void }) {
  return (
    <div className="form-add-kanban">
      <input type="text" placeholder="insira um título ou cole um link..." />
      <div className="buttons-form">
        <button className="btn_add_card">Adicionar cartão</button>
        <button className="btn_close_card" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default function ColunaKanban({ children }: PropsColunaKanban) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="coluna-kanban-container">
      <div className="header">
        <p>QuadroExemplo1</p>
        <div>
          <span>3</span>
          <button>...</button>
        </div>
      </div>
      {children}
      <div className="footer">
        {showForm ? (
          <FormAddKanban onClose={()=>setShowForm(false)}/>
        ) : (
          <button onClick={()=>setShowForm(true)}>
            <i className="fa-solid fa-plus"></i> Adicionar um cartão
          </button>
        )}
      </div>
    </div>
  );
}
