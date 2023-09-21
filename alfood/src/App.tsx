import { Routes, Route } from "react-router-dom";
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoRestaurantes from "./paginas/Administracao/Restaurantes/AdministracaoRestaurantes"
import FormularioRestaurante from "./paginas/Administracao/Restaurantes/FormularioRestaurante";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdministracaoRestaurantes/>}></Route>
      <Route path="/admin/restaurantes/novo" element={<FormularioRestaurante/>}></Route>
      <Route path="/admin/restaurantes/:id" element={<FormularioRestaurante/>}></Route>
    </Routes>
  );
}

export default App;
