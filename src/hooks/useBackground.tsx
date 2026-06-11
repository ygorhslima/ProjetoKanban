import { useState } from "react";
import Wallpaper1 from "../assets/wallpaper-01.jpg";
import Wallpaper2 from "../assets/wallpaper-02.jpg";
import Wallpaper3 from "../assets/wallpaper-03.jpg";
import Wallpaper4 from "../assets/wallpaper-04.jpg";
import Wallpaper5 from "../assets/wallpaper-05.jpg";
import Wallpaper6 from "../assets/wallpaper-06.jpg";
import Wallpaper7 from "../assets/wallpaper-07.jpg";
import Wallpaper8 from "../assets/wallpaper-08.jpg";
import Wallpaper9 from "../assets/wallpaper-09.jpg";
import Wallpaper10 from "../assets/wallpaper-010.jpg";

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
    {
      img: Wallpaper5,
    },
    {
      img: Wallpaper6,
    },
    {
      img: Wallpaper7,
    },
    {
      img: Wallpaper8,
    },
    {
      img: Wallpaper9,
    },
    {
      img: Wallpaper10,
    }
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
