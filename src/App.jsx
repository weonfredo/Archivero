import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IniciarSesion } from "./modules/pages/IniciarSesion";
import { RestablecerContrasena } from "./modules/pages/RestablecerContrasena";
import { NuevaContrasena } from "./modules/pages/NuevaContrasena";
import { PaginaPrincipal } from "./modules/pages/PaginaPrincipal";
import { CrearUsuario } from "./modules/pages/CrearUsuario";
import { PerfilUsuario } from "./modules/pages/PerfilUsuario"; 
import { VistaResoluciones } from "./modules/pages/VistaResoluciones";
import { VerResolucion } from "./modules/pages/VerResolucion";
import { CrearResolucion } from "./modules/pages/CrearResolucion";
import { VistaGrados } from "./modules/pages/VistaGrados";
import { VerGrado } from "./modules/pages/VerGrado";
import { CrearGrado } from "./modules/pages/CrearGrado";
import { VistaPosgrados } from "./modules/pages/VistaPosgrados";
import { VerPosgrado } from "./modules/pages/VerPosgrado";
import { CrearPosgrado } from "./modules/pages/CrearPosgrado";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  useEffect(() => {
    // Verificar si es la primera vez que se inicia la aplicación en el entorno de desarrollo
    if (process.env.NODE_ENV === 'development') {
      const isFirstTime = localStorage.getItem('isFirstTime');
      if (!isFirstTime) {
        // Limpiar el localStorage y establecer la bandera
        localStorage.clear();
        localStorage.setItem('isFirstTime', 'true');
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* ruta inicial */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Rutas protegidas */}
          <Route path="/paginaprincipal" element={<PrivateRoute><PaginaPrincipal /></PrivateRoute>} />

          <Route path="/perfil" element={<PrivateRoute><PerfilUsuario /></PrivateRoute>} />
          <Route path="/create" element={<PrivateRoute><CrearUsuario /></PrivateRoute>} />

          <Route path="/resoluciones" element={<PrivateRoute><VistaResoluciones /></PrivateRoute>} />
          <Route path="/verresolucion" element={<PrivateRoute><VerResolucion /></PrivateRoute>} />
          <Route path="/createresolucion" element={<PrivateRoute><CrearResolucion/></PrivateRoute>} />
          
          <Route path="/grados" element={<PrivateRoute><VistaGrados /></PrivateRoute>} />
          <Route path="/vergrado" element={<PrivateRoute><VerGrado /></PrivateRoute>} />
          <Route path="/creategrado" element={<PrivateRoute><CrearGrado/></PrivateRoute>} />
          
          <Route path="/posgrados" element={<PrivateRoute><VistaPosgrados/></PrivateRoute>} />
          <Route path="/verposgrado" element={<PrivateRoute><VerPosgrado /></PrivateRoute>} />
          <Route path="/createposgrado" element={<PrivateRoute><CrearPosgrado/></PrivateRoute>} />
          
          {/* demas rutas */}
          <Route path="/login" element={<IniciarSesion />} /> 
          <Route path="/restore" element={<RestablecerContrasena />} />
          <Route path="/newpassword" element={<NuevaContrasena />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
