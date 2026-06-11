import { useParams } from "react-router-dom";
import { CardsProvider } from "../../hooks/useCards";
import { ColumnProvider } from "../../hooks/useColumns";
import PaginaQuadroContent from "./components/PaginaQuadroContent";

export default function PaginaQuadro() {
  const { id } = useParams();

  return (
    <ColumnProvider>
      <CardsProvider>
        <PaginaQuadroContent id={id} />
      </CardsProvider>
    </ColumnProvider>
  );
}