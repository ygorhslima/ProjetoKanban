import useBackground from "../../../../hooks/useBackground";
import "./style.css";

interface FormMudarFundoProps {
  onSelect: (novaImagem: string) => void;
  onCancel: () => void;
}

export default function FormMudarFundo({
  onSelect,
  onCancel,
}: FormMudarFundoProps) {
  const { listaMudarFundo } = useBackground();
  
  return (
    <div className="wallpapers-list-container">
      <div className="items">
        {listaMudarFundo.map((el, index) => {
          return (
            <button key={index} onClick={() => onSelect(el.img)}>
              <img src={el.img} className="imgs" />
            </button>
          );
        })}
      </div>
      <button onClick={onCancel} id="btn_sair">Sair</button>
    </div>
  );
}
