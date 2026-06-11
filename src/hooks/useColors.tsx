import { useState } from "react"

export default function useColors(){
    const [corEscolhida, setCorEscolhida] = useState("#24241B");
    const [corFonte, setCorFonte] = useState("#fff");
    return {
        corEscolhida,
        setCorEscolhida,
        corFonte,
        setCorFonte
    }
}