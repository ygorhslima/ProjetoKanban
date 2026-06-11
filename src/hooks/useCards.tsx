import { createContext, useContext, useEffect, useState } from "react";

export interface Card {
  id: string;
  titulo: string;
  descricao: string;
  colunaId: string;
}

interface CardsContextData {
  cards: Card[];
  adicionarCard: (titulo: string, descricao: string, colunaId: string) => void;
  atualizarCard: (id: string, campos: Partial<Omit<Card, "id">>) => void;
  removerCard: (id: string) => void;
  getCardsPorColuna: (colunaId: string) => Card[];
}

const CardsContext = createContext<CardsContextData>({} as CardsContextData);

export function CardsProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<Card[]>(() => {
    const dadosCard = localStorage.getItem("kanban-cards");
    if (dadosCard) {
      return JSON.parse(dadosCard);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("kanban-cards", JSON.stringify(cards));
  }, [cards]);

  const adicionarCard = (titulo: string, descricao: string, colunaId: string) => {
    const novoCard: Card = {
      id: crypto.randomUUID(),
      titulo,
      descricao,
      colunaId,
    };
    setCards((prevCards) => [...prevCards, novoCard]);
  };

  const atualizarCard = (id: string, campos: Partial<Omit<Card, "id">>) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, ...campos } : card)),
    );
  };

  const removerCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };


  return (
    <CardsContext.Provider
      value={{
        cards,
        adicionarCard,
        atualizarCard,
        removerCard,
        getCardsPorColuna: (colunaId: string) =>
          cards.filter((c) => c.colunaId === colunaId),
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}

export default function useCards() {
  return useContext(CardsContext);
}
