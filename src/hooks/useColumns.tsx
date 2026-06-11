import React, { useState, useEffect, createContext, useContext } from "react";

export interface Column {
  id: string;
  titulo: string;
  quadroId: string; // Relaciona a coluna com um quadro específico
}

interface ColumnContextData {
  columns: Column[];
  adicionarColuna: (titulo: string, quadroId: string) => void;
  removerColuna: (id: string) => void;
}

const ColumnContext = createContext<ColumnContextData>({} as ColumnContextData);

export function ColumnProvider({ children }: { children: React.ReactNode }) {
  const [columns, setColumns] = useState<Column[]>(() => {
    const dadosColuna = localStorage.getItem("kanban-columns");
    return dadosColuna ? JSON.parse(dadosColuna) : [];
  });

  useEffect(() => {
    localStorage.setItem("kanban-columns", JSON.stringify(columns));
  }, [columns]);

  const adicionarColuna = (titulo: string, quadroId: string) => {
    const novaColuna: Column = {
      id: crypto.randomUUID(),
      titulo,
      quadroId,
    };
    setColumns((prev) => [...prev, novaColuna]);
  };

  const removerColuna = (id: string) => {
    setColumns((prev) => prev.filter((col) => col.id !== id));
  };

  console.log(columns);

  return (
    <ColumnContext.Provider value={{ columns, adicionarColuna, removerColuna }}>
      {children}
    </ColumnContext.Provider>
  );

}

export default function useColumns(quadroId?: string | undefined) {
  const context = useContext(ColumnContext);

  if (!context) {
    throw new Error("useColumns deve ser usado dentro de um ColumnProvider");
  }

  return {
    // Retorna apenas as colunas do quadro atual
    columns: quadroId
      ? context.columns.filter((c) => c.quadroId === quadroId)
      : context.columns,
    // Cria uma função que já sabe em qual quadro adicionar
    adicionarColuna: (titulo: string) => {
      if (quadroId) context.adicionarColuna(titulo, quadroId);
    },
    removerColuna: context.removerColuna,
  };
}
