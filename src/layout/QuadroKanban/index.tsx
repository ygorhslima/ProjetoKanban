import './style.css'
import type React from "react"

interface PropsQuadroKanban{
    children: React.ReactNode;
}
export default function QuadroKanban({children}:PropsQuadroKanban){
    return(
        <div className="quadro-kanban-container">
            {children}
        </div>
    )
}