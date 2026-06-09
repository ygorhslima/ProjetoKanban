import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import PaginaQuadro from "./page/PaginaQuadro";
import Header from "./layout/Header";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quadro/:id" element={<PaginaQuadro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
