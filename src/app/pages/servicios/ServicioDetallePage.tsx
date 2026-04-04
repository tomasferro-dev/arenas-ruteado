// import { useParams, Link, Navigate } from "react-router-dom";
// import {
//   Droplet,
//   Wrench,
//   Video,
//   Sparkles,
//   Settings,
//   Zap,
//   Mountain,
//   Anchor,
//   ArrowLeft,
//   Phone,
//   CheckCircle2,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { SERVICES, CONTACT } from "../../data";
// import Breadcrumb from "../../components/Breadcrumb";

// const ICON_MAP: Record<string, React.ElementType> = {
//   Droplet,
//   Wrench,
//   Video,
//   Sparkles,
//   Settings,
//   Zap,
//   Mountain,
//   Anchor,
// };

// export default function ServicioDetallePage() {
//   const { slug } = useParams<{ slug: string }>();
//   const service = SERVICES.find((s) => s.slug === slug);

//   if (!service) return <Navigate to="/servicios" replace />;

//   const Icon = ICON_MAP[service.icon] ?? Droplet;
//   const waMsg = encodeURIComponent(
//     `Hola! Me gustaría consultar sobre el servicio de ${service.title}.`,
//   );
//   const waUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${waMsg}`;

//   // Suggested related services (up to 3, excluding current)
//   const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

//   return (
//     <>
//       <Breadcrumb label={service.title} />
//       {/* Hero banner con imagen */}
//       <div className="relative text-white">
//         {/* Imagen de fondo */}
//         <img
//           src={service.imageDetail || service.image}
//           alt={service.title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlay oscuro */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Contenido */}
//         <div className="relative">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             <Link
//               to="/servicios"
//               className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Volver a Servicios
//             </Link>

//             <div className="flex items-start gap-6 max-w-3xl">
//               <div className="bg-white/20 rounded-2xl p-5 flex-shrink-0">
//                 <Icon className="w-12 h-12 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
//                   {service.title}
//                 </h1>
//                 <p className="text-white/90 text-lg leading-relaxed">
//                   {service.shortDescription}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Content */}
//           <div className="lg:col-span-2 space-y-10">
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                 Descripción del Servicio
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-lg">
//                 {service.fullDescription}
//               </p>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//                 ¿Qué incluye?
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {service.details.map((detail) => (
//                   <div
//                     key={detail}
//                     className="flex items-start gap-3 bg-gray-50 rounded-lg p-4"
//                   >
//                     <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 text-sm">{detail}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//                 Características Principales
//               </h2>
//               <ul className="space-y-3">
//                 {service.features.map((f) => (
//                   <li key={f} className="flex items-center gap-3">
//                     <span className="w-2 h-2 rounded-full bg-red-700 flex-shrink-0" />
//                     <span className="text-gray-700">{f}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Sidebar CTA */}
//           <div className="space-y-6">
//             <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 ¿Necesitás este servicio?
//               </h3>
//               <p className="text-gray-600 text-sm mb-6">
//                 Contactanos ahora para un presupuesto sin costo ni compromiso.
//               </p>
//               <div className="space-y-3">
//                 <a
//                   href={waUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-medium transition-colors"
//                 >
//                   <FaWhatsapp className="w-5 h-5" />
//                   Consultar por WhatsApp
//                 </a>
//                 <a
//                   href={`tel:${CONTACT.phones[0].href.replace("tel:", "")}`}
//                   className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-4 rounded-lg font-medium transition-colors"
//                 >
//                   <Phone className="w-5 h-5" />
//                   Llamar Ahora
//                 </a>
//                 <Link
//                   to="/contacto"
//                   className="w-full flex items-center justify-center gap-2 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-6 py-4 rounded-lg font-medium transition-colors"
//                 >
//                   Formulario de Contacto
//                 </Link>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <p className="text-xs text-gray-500 text-center">
//                   Atención Lun–Vie 8:00–17:00 · Sáb 8:00–12:00
//                 </p>
//               </div>
//             </div>

//             {/* Coverage zones */}
//             <div className="bg-red-50 border border-red-100 rounded-xl p-5">
//               <h4 className="font-semibold text-red-800 mb-2">
//                 Zonas de Cobertura
//               </h4>
//               <p className="text-red-700 text-sm">
//                 Mendoza, San Juan, San Luis, Noroeste, Noreste, Region Pampeana y Patagonia.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related services */}
//       <div className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-8">
//             Otros Servicios
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {related.map((s) => {
//               const RelIcon = ICON_MAP[s.icon] ?? Droplet;
//               return (
//                 <Link
//                   key={s.id}
//                   to={`/servicios/${s.slug}`}
//                   className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
//                 >
//                   <div
//                     className={`inline-flex bg-gradient-to-br ${s.gradient} p-3 rounded-lg mb-4`}
//                   >
//                     <RelIcon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
//                     {s.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm line-clamp-2">
//                     {s.shortDescription}
//                   </p>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState, useEffect, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Droplet,
  Wrench,
  Video,
  Sparkles,
  Settings,
  Zap,
  Mountain,
  Anchor,
  ArrowLeft,
  ArrowRight,
  Phone,
  CheckCircle2,
  MapPin,
  Images,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SERVICES, PROJECTS, CONTACT } from "../../data";
import Breadcrumb from "../../components/Breadcrumb";

const ICON_MAP: Record<string, React.ElementType> = {
  Droplet,
  Wrench,
  Video,
  Sparkles,
  Settings,
  Zap,
  Mountain,
  Anchor,
};

// Mapeo entre slug del servicio y categoría de proyecto
const SERVICE_TO_CATEGORY: Record<string, string> = {
  perforaciones: "Perforación",
  electrobombas: "Mantenimiento",
  bobinados: "Mantenimiento",
  filmaciones: "Mantenimiento",
  limpieza: "Limpieza",
  pescas: "Mantenimiento",
  "estudios-geologicos": "Perforación",
  mantenimiento: "Mantenimiento",
};

const CATEGORY_COLORS: Record<string, string> = {
  Perforación: "bg-orange-100 text-orange-800",
  Limpieza: "bg-green-100 text-green-800",
  Mantenimiento: "bg-blue-100 text-blue-800",
  Municipal: "bg-purple-100 text-purple-800",
  Institucional: "bg-indigo-100 text-indigo-800",
};

const VISIBLE = 3; // cuántos proyectos se muestran a la vez

function ProjectsCarousel({ slug }: { slug: string }) {
  const category = SERVICE_TO_CATEGORY[slug];
  const related = category
    ? PROJECTS.filter((p) => p.category === category)
    : [];

  const [startIndex, setStartIndex] = useState(0);

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < related.length;

  const prev = useCallback(() => {
    if (canPrev) setStartIndex((i) => i - 1);
  }, [canPrev]);

  const next = useCallback(() => {
    if (canNext) setStartIndex((i) => i + 1);
  }, [canNext]);

  if (related.length === 0) return null;

  const visible = related.slice(startIndex, startIndex + VISIBLE);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-red-700 text-sm font-medium uppercase tracking-widest mb-1">
              Trabajos realizados
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              Proyectos relacionados
            </h2>
          </div>
          <Link
            to="/proyectos"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-red-700 font-medium hover:underline underline-offset-4"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={!canPrev}
            aria-label="Anterior"
            className={`absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all
              ${canPrev
                ? "bg-white text-gray-700 hover:bg-red-700 hover:text-white"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
            {visible.map((project) => (
              <Link
                key={project.id}
                to={`/proyectos/${project.id}`}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Images className="w-12 h-12 text-white/20" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <p className="text-white text-sm font-medium p-4">
                      Ver proyecto →
                    </p>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        CATEGORY_COLORS[project.category] ??
                        "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1.5 group-hover:text-red-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2 mb-2">
                    {project.description}
                  </p>
                  {project.location && (
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={!canNext}
            aria-label="Siguiente"
            className={`absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all
              ${canNext
                ? "bg-white text-gray-700 hover:bg-red-700 hover:text-white"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {related.map((_, i) => {
            const isVisible = i >= startIndex && i < startIndex + VISIBLE;
            return (
              <span
                key={i}
                className={`rounded-full bg-gray-300 transition-all duration-300 ${
                  isVisible ? "w-3 h-3 bg-red-600" : "w-2 h-2"
                }`}
              />
            );
          })}
        </div>

        {/* Mobile link */}
        <div className="text-center mt-6 sm:hidden">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm text-red-700 font-medium hover:underline underline-offset-4"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicioDetallePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/servicios" replace />;

  const Icon = ICON_MAP[service.icon] ?? Droplet;
  const waMsg = encodeURIComponent(
    `Hola! Me gustaría consultar sobre el servicio de ${service.title}.`
  );
  const waUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${waMsg}`;

  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <Breadcrumb label={service.title} />

      {/* Hero banner */}
      <div className="relative text-white">
        <img
          src={service.imageDetail || service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Servicios
            </Link>
            <div className="flex items-start gap-6 max-w-3xl">
              <div className="bg-white/20 rounded-2xl p-5 flex-shrink-0">
                <Icon className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
                  {service.title}
                </h1>
                <p className="text-white/90 text-lg leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Descripción del Servicio
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                ¿Qué incluye?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-start gap-3 bg-gray-50 rounded-lg p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Características Principales
              </h2>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-700 flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ¿Necesitás este servicio?
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Contactanos ahora para un presupuesto sin costo ni compromiso.
              </p>
              <div className="space-y-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-medium transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Consultar por WhatsApp
                </a>
                <a
                  href={`tel:${CONTACT.phones[0].href.replace("tel:", "")}`}
                  className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-4 rounded-lg font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
                <Link
                  to="/contacto"
                  className="w-full flex items-center justify-center gap-2 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-6 py-4 rounded-lg font-medium transition-colors"
                >
                  Formulario de Contacto
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Atención Lun–Vie 8:00–17:00 · Sáb 8:00–12:00
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <h4 className="font-semibold text-red-800 mb-2">
                Zonas de Cobertura
              </h4>
              <p className="text-red-700 text-sm">
                Mendoza, San Juan, San Luis, Noroeste, Noreste, Región Pampeana y Patagonia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ← CARRUSEL DE PROYECTOS RELACIONADOS → */}
      <ProjectsCarousel slug={service.slug} />

      {/* Otros servicios */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Otros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((s) => {
              const RelIcon = ICON_MAP[s.icon] ?? Droplet;
              return (
                <Link
                  key={s.id}
                  to={`/servicios/${s.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div
                    className={`inline-flex bg-gradient-to-br ${s.gradient} p-3 rounded-lg mb-4`}
                  >
                    <RelIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {s.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}