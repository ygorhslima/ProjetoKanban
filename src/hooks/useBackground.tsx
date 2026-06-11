import { useState } from "react";
import Wallpaper1 from "../assets/wallpaper-01.jpg";
import Wallpaper2 from "../assets/wallpaper-02.jpg";
import Wallpaper3 from "../assets/wallpaper-03.jpg";
import Wallpaper4 from "../assets/wallpaper-04.jpg";

export default function useBackground() {
  const listaMudarFundo = [
    {
      img: Wallpaper1,
    },
    {
      img: Wallpaper2,
    },
    {
      img: Wallpaper3,
    },
    {
      img: Wallpaper4,
    },
  ];
  
  const [showFormMudarFundo, setShowFormMudarFundo] = useState(false);
  const [background, setBackground] = useState(Wallpaper1);

  const handleMudarFundo = (novaImagem: string) => {
    setBackground(novaImagem);
    setShowFormMudarFundo(false);
  };

  return {
    background,
    showFormMudarFundo,
    setShowFormMudarFundo,
    handleMudarFundo,
    listaMudarFundo,
  };
}
