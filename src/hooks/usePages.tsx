/**hook específico para o funcionamento das páginas dinâmicas dentro da home */

import { useEffect, useState } from "react";

export interface Pages {
  id: string;
  nome: string;
}

export default function usePages() {
  const [quadros, setQuadros] = useState<Pages[]>(() => {
    const dadosQuadro = localStorage.getItem("kanban-quadros");
    if (dadosQuadro) {
      return JSON.parse(dadosQuadro);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("kanban-quadros", JSON.stringify(quadros));
  }, [quadros]);

  const adicionarQuadro = (nome: string) => {
    const novoQuadro: Pages = { id: crypto.randomUUID(), nome };
    setQuadros((prev) => [...prev, novoQuadro]);
  };

  return {
    quadros,
    setQuadros,
    adicionarQuadro,
  };
}
