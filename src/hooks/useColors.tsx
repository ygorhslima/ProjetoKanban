import { useState, useEffect } from "react"

export default function useColors(quadroId: string | undefined) {
    const storageKey = quadroId ? `kanban-colors-${quadroId}` : null;

    const [corEscolhida, setCorEscolhida] = useState(() => {
        if (!storageKey) return "#24241B";
        const salvo = localStorage.getItem(storageKey);
        return salvo ? JSON.parse(salvo).corEscolhida : "#24241B";
    });

    const [corFonte, setCorFonte] = useState(() => {
        if (!storageKey) return "#fff";
        const salvo = localStorage.getItem(storageKey);
        return salvo ? JSON.parse(salvo).corFonte : "#fff";
    });

    useEffect(() => {
        if (storageKey) {
            localStorage.setItem(storageKey, JSON.stringify({ corEscolhida, corFonte }));
        }
    }, [corEscolhida, corFonte, storageKey]);

    return {
        corEscolhida,
        setCorEscolhida,
        corFonte,
        setCorFonte
    }
}