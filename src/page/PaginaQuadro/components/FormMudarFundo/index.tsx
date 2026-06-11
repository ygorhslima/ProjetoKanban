import useBackground from "../../../../hooks/useBackground";
import "./style.css";

interface FormMudarFundoProps {
  onSelect: (novaImagem: string) => void;
  onCancel: () => void;
  onColorChange: (cor: string) => void;
  onColorFontChange: (fonte: string) => void;
  corAtual: string;
  corFonte: string;
}

export default function FormMudarFundo({
  onSelect,
  onCancel,
  onColorChange,
  onColorFontChange,
  corAtual,
  corFonte,
}: FormMudarFundoProps) {
  const { listaMudarFundo } = useBackground();

  return (
    <div className="wallpapers-list-container">
      <div className="colors">
        <div>
          <p>Escolha as cores que terá na colunas</p>
          <input
            type="color"
            value={corAtual}
            onChange={(e) => onColorChange(e.target.value)}
          />
        </div>

        <div>
          <p>Escolha a cor que terá na fonte</p>
          <input
            type="color"
            value={corFonte}
            onChange={(e) => onColorFontChange(e.target.value)}
          />
        </div>
      </div>
      <div className="items">
        {listaMudarFundo.map((el, index) => {
          return (
            <button key={index} onClick={() => onSelect(el.img)}>
              <img src={el.img} className="imgs" />
            </button>
          );
        })}
      </div>
      <button onClick={onCancel} id="btn_sair">
        Sair
      </button>
    </div>
  );
}
