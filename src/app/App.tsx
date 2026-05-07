import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import SubpageLayout from './layouts/SubpageLayout';

// Pages — nivel 1
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ProyectosPage from './pages/ProyectosPage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';

// Pages — nivel 2 (servicios individuales)
import ServicioDetallePage from './pages/servicios/ServicioDetallePage';

// Pages — nivel 2 (proyectos individuales)
import ProyectoDetallePage from './pages/proyectos/ProyectoDetallePage';

// Página dedicada "Cómo Trabajamos" de Reparación
import ReparacionPage from './pages/ReparacionPage';

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Layout principal con hero completo */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Route>

        {/* Layout de subpáginas con nav y breadcrumb */}
        <Route element={<SubpageLayout />}>
          {/* Primer nivel */}
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />

          {/* Segundo nivel — servicio individual */}
          <Route path="/servicios/:slug" element={<ServicioDetallePage />} />

          {/* Segundo nivel — proyecto individual */}
          <Route path="/proyectos/:id" element={<ProyectoDetallePage />} />

          {/* Página "Cómo Trabajamos" de Reparación */}
          <Route path="/reparacion" element={<ReparacionPage />} />
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
