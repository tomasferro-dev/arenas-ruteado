import perfo2 from "../assets/perfo2.jpg";
import agua from "../assets/agua.jpg";
import agua1 from "../assets/agua1.jpg";
import filmacion1 from "../assets/filmacion1.jpg";
import pesca5 from "../assets/pesca5.jpg";
import pesca6 from "../assets/pesca6.jpg";
import pesca7 from "../assets/pesca7.jpg";
import estudio2 from "../assets/estudio2.jpg";
import estudiogeologico from "../assets/estudio-geologico.jpg";
import mant from "../assets/mant-rehab3.jpg";
import venta4 from "../assets/venta4.png";
import venta55 from "../assets/venta55.jpg";
import reparacion1 from "../assets/reparacion1.jpg";
import limpieza1 from "../assets/limpieza1.jpg";
import bobinados2 from "../assets/bobinados2.jpg";
// import caneria from "../assets/caneria.jpg";
import extrac1 from "../assets/extrac1.jpg";
import limpieza from '../assets/IMG_0097 2.jpg';
import proy2 from '../assets/proy2.jpg';
import a1 from '../assets/perforaciones/25-de-mayo/1.jpg';
import a2 from '../assets/perforaciones/25-de-mayo/2.jpg';
import a3 from '../assets/perforaciones/25-de-mayo/3.jpg';
import a4 from '../assets/perforaciones/25-de-mayo/4.jpg';
import b1 from '../assets/perforaciones/bianchetti/1.jpg';
import b2 from '../assets/perforaciones/bianchetti/2.jpg';
import b3 from '../assets/perforaciones/bianchetti/3.jpg';
import b4 from '../assets/perforaciones/bianchetti/4.jpg';
import b5 from '../assets/perforaciones/bianchetti/5.jpg';
import b6 from '../assets/perforaciones/bianchetti/6.jpg';
import c1 from '../assets/perforaciones/blanco/c1.jpg';
import c2 from '../assets/perforaciones/blanco/c2.jpg';
import c3 from '../assets/perforaciones/blanco/c3.jpg';
import d1 from '../assets/perforaciones/doutre/d1.jpg';
import d2 from '../assets/perforaciones/doutre/d2.jpg';
import d3 from '../assets/perforaciones/doutre/d3.jpg';
import e1 from '../assets/perforaciones/independiente/e1.jpg';
import e2 from '../assets/perforaciones/independiente/e2.jpg';
import e3 from '../assets/perforaciones/independiente/e3.jpg';
import f1 from '../assets/perforaciones/olivum/f1.jpg';
import f2 from '../assets/perforaciones/olivum/f2.jpg';
import f3 from '../assets/perforaciones/olivum/f3.jpg';
import f4 from '../assets/perforaciones/olivum/f4.jpg';
import g1 from '../assets/perforaciones/oreste/g1.jpg';
import h1 from '../assets/perforaciones/pistacho/h1.jpg';
import h2 from '../assets/perforaciones/pistacho/h2.jpg';
import h3 from '../assets/perforaciones/pistacho/h3.jpg';
import h4 from '../assets/perforaciones/pistacho/h4.jpg';
import h5 from '../assets/perforaciones/pistacho/h5.jpg';
import h6 from '../assets/perforaciones/pistacho/h6.jpg';
import h7 from '../assets/perforaciones/pistacho/h7.jpg';
import i1 from '../assets/perforaciones/rolar-de-cuyo/i1.jpg';
import i2 from '../assets/perforaciones/rolar-de-cuyo/i2.jpg';
import i3 from '../assets/perforaciones/rolar-de-cuyo/i3.jpg';
import i4 from '../assets/perforaciones/rolar-de-cuyo/i4.jpg';
import i5 from '../assets/perforaciones/rolar-de-cuyo/i5.jpg';
import i6 from '../assets/perforaciones/rolar-de-cuyo/i6.jpg';
import i7 from '../assets/perforaciones/rolar-de-cuyo/i7.jpg';
import i8 from '../assets/perforaciones/rolar-de-cuyo/i8.jpg';
import i9 from '../assets/perforaciones/rolar-de-cuyo/i9.jpg';
import j1 from '../assets/perforaciones/rolar-de-cuyo/j1.jpg';
import j2 from '../assets/perforaciones/rolar-de-cuyo/j2.jpg';
import j3 from '../assets/perforaciones/rolar-de-cuyo/j3.jpg';
import j4 from '../assets/perforaciones/rolar-de-cuyo/j4.jpg';
import j5 from '../assets/perforaciones/rolar-de-cuyo/j5.jpg';
import j6 from '../assets/perforaciones/rolar-de-cuyo/j6.jpg';
import j7 from '../assets/perforaciones/rolar-de-cuyo/j7.jpg';
import j8 from '../assets/perforaciones/rolar-de-cuyo/j8.jpg';
import j9 from '../assets/perforaciones/rolar-de-cuyo/j9.jpg';
import k1 from '../assets/perforaciones/rolar-de-cuyo/k1.jpg';
import k2 from '../assets/perforaciones/rolar-de-cuyo/k2.jpg';
import k3 from '../assets/perforaciones/rolar-de-cuyo/k3.jpg';
import k4 from '../assets/perforaciones/rolar-de-cuyo/k4.jpg';
import k5 from '../assets/perforaciones/rolar-de-cuyo/k5.jpg';
import k6 from '../assets/perforaciones/rolar-de-cuyo/k6.jpg';
import k7 from '../assets/perforaciones/rolar-de-cuyo/k7.jpg';
import k8 from '../assets/perforaciones/rolar-de-cuyo/k8.jpg';
import k9 from '../assets/perforaciones/rolar-de-cuyo/k9.jpg';
import l1 from '../assets/perforaciones/torres/l1.jpg';
import l2 from '../assets/perforaciones/torres/l2.jpg';
import l3 from '../assets/perforaciones/torres/l3.jpg';
import l4 from '../assets/perforaciones/torres/l4.jpg';
import l5 from '../assets/perforaciones/torres/l5.jpg';
import l6 from '../assets/perforaciones/torres/l6.jpg';
import l7 from '../assets/perforaciones/torres/l7.jpg';
import l8 from '../assets/perforaciones/torres/l8.jpg';
import l9 from '../assets/perforaciones/torres/l9.jpg';
import m1 from '../assets/perforaciones/torres/m1.jpg';
import m2 from '../assets/perforaciones/torres/m2.jpg';
import n1 from '../assets/perforaciones/luigi-bosca/n1.png';
import n2 from '../assets/perforaciones/luigi-bosca/n2.png';
import n3 from '../assets/perforaciones/luigi-bosca/n3.png';
import n4 from '../assets/perforaciones/luigi-bosca/n4.png';

export interface Service {
  id: string;
  slug: string;
  slug2: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  details: string[];
  image: string;
  images: string[];
  imageDetail: string;
  icon: string;
  gradient: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  images: (string | any)[];
  pulgadas: string;
  profundidad: string;
  descripcion: string;
  ubicacion: string;
}

// ─────────────────────────────────────────────
// SERVICIOS
// ─────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "11",
    slug: "perforaciones",
    slug2: "",
    title: "Perforaciones de Pozos",
    shortDescription:
      "Realizamos perforaciones de pozos de agua en Mendoza y San Juan para uso doméstico, agrícola e industrial, con estudios geológicos previos para garantizar resultados óptimos.",
    fullDescription:
      "Nuestro servicio de perforación de pozos es el más completo de la región. Contamos con equipos de perforación de última generación capaces de alcanzar hasta 1000 metros de profundidad, operados por personal altamente calificado. Cada proyecto comienza con un estudio geológico e hidrogeológico del terreno para determinar la mejor ubicación, profundidad y método de perforación. Trabajamos en proyectos rurales, residenciales, industriales y municipales en toda la provincia de Mendoza y San Juan.",
    features: [
      "Hasta 1000 metros de profundidad",
      "Equipos de última generación",
      "Garantía de calidad escrita",
      "Estudio geológico previo incluido",
    ],
    details: [
      "Perforación con método rotativo y percusión",
      "Entubado con cañería certificada",
      "Cementación y sello sanitario",
      "Informe técnico y registro de perforación",
      "Aforo y prueba de bombeo",
      "Cobertura en Mendoza y San Juan",
    ],
    image: perfo2,
    images: [perfo2, agua],
    imageDetail: agua1,
    icon: "Droplet",
    gradient: "from-orange-500 to-red-600",
  },{
    id: "6",
    slug: "limpieza",
    slug2: "",
    title: "Limpieza de Perforaciones",
    shortDescription:
      "Limpieza exhaustiva de pozos surgentes y perforaciones para reactivar caudal y mejorar la calidad del agua.",
    fullDescription:
      "Con el tiempo, los pozos acumulan sedimentos, incrustaciones calcáreas y biológicas que reducen significativamente el caudal y deterioran la calidad del agua. Nuestro servicio de limpieza y rehabilitación devuelve el pozo a su capacidad óptima mediante técnicas mecánicas, químicas y neumáticas, según el diagnóstico de cada caso.",
    features: [
      "Reactivación de caudal original",
      "Pozos surgentes y bombeados",
      "Técnicas mecánicas y químicas",
      "Mejora comprobada y documentada",
    ],
    details: [
      "Diagnóstico previo con filmación",
      "Limpieza mecánica por agitación",
      "Desarrollo con compresor de alta presión",
      "Tratamiento químico anti-incrustante",
      "Aforo comparativo antes y después",
      "Análisis bacteriológico opcional",
    ],
    images: [limpieza1,limpieza],
    image: limpieza1,
    imageDetail: perfo2,
    icon: "Sparkles",
    gradient: "from-green-500 to-teal-600",
  },{
    id: "9",
    slug: "desarrollo",
    slug2: "",
    title: "Desarrollo de Perforaciones",
    shortDescription:
      "Optimización y desarrollo de pozos de agua para mejorar caudal, limpieza y rendimiento en sistemas existentes.",
    fullDescription:
      "El desarrollo de perforaciones consiste en la limpieza, estimulación y optimización del pozo para mejorar su rendimiento hidráulico. Aplicamos técnicas específicas para eliminar sedimentos, mejorar la filtración y aumentar el caudal disponible, asegurando un funcionamiento eficiente y prolongando la vida útil de la perforación.",
    features: [
      "Mejora del caudal del pozo",
      "Limpieza profunda de perforaciones",
      "Optimización del rendimiento hidráulico",
      "Eliminación de sedimentos y obstrucciones",
      "Mayor vida útil del pozo",
      "Intervenciones rápidas y efectivas",
    ],
    details: [
      "Desarrollo mediante aire comprimido",
      "Limpieza con bombeo intensivo",
      "Remoción de arenas y sedimentos",
      "Estimulación de acuíferos",
      "Pruebas de caudal posteriores",
      "Evaluación del rendimiento",
      "Ajustes para mejorar eficiencia",
      "Aplicación en pozos nuevos o existentes",
    ],
    image: proy2,
    images: [proy2, perfo2],
    imageDetail: proy2,
    icon: "Droplet",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "10",
    slug: "mantenimiento",
    slug2: "",
    title: "Mantenimiento y Rehabilitación de Pozos",
    shortDescription:
      "Servicios de mantenimiento preventivo y correctivo de pozos existentes para optimizar su funcionamiento y vida útil.",
    fullDescription:
      "El mantenimiento periódico es la mejor inversión para prolongar la vida útil de un pozo y garantizar agua de calidad. Ofrecemos planes de mantenimiento preventivo adaptados a cada instalación, incluyendo inspección del sistema, revisión de la bomba, control de caudal y análisis de agua. También realizamos trabajos de rehabilitación de pozos deteriorados.",
    features: [
      "Mantenimiento preventivo programado",
      "Revisión completa del sistema",
      "Optimización de caudal",
      "Planes personalizados",
    ],
    details: [
      "Inspección visual y filmación periódica",
      "Control y ajuste de bomba y motor",
      "Revisión de cañería y cables",
      "Medición de caudal y presión",
      "Análisis fisicoquímico del agua",
      "Informe de estado y recomendaciones",
    ],
    images: [mant],
    image: mant,
    imageDetail: mant,
    icon: "Wrench",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "1",
    slug: "venta",
    slug2: "venta",
    title: "Venta de Electrobombas",
    shortDescription:
      "Comercialización de electrobombas en Mendoza, San Juan y resto de Argentina para uso doméstico, agrícola e industrial, con asesoramiento técnico para elegir el equipo adecuado.",
    fullDescription:
      "Ofrecemos venta especializada de electrobombas sumergibles y de superficie de primeras marcas para múltiples aplicaciones. Asesoramos a cada cliente según caudal requerido, profundidad, tipo de uso y características del terreno. Trabajamos con equipos confiables y eficientes, garantizando durabilidad y rendimiento óptimo en instalaciones domiciliarias, agrícolas e industriales.",
    features: [
      "Electrobombas nuevas con garantía oficial",
      "Armamos la Electrobomba con las características adecuadas para tu proyecto",
      "Equipos para uso doméstico, agrícola e industrial",
      "Asesoramiento técnico personalizado",
      "Stock permanente",
      "Entrega inmediata o programada",
    ],
    details: [
      "Venta de bombas sumergibles y de superficie",
      "Selección según caudal, altura y potencia",
      "Equipos monofásicos y trifásicos",
      "Potencias desde 0.2 HP hasta 300 HP",
      "Opciones para pozos, cisternas y riego",
      "Accesorios y repuestos originales",
      "Cobertura en Mendoza, San Juan y resto de Argentina",
    ],
    image: venta4,
    images: [venta4],
    imageDetail: venta55,
    icon: "Settings",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: "2",
    slug: "reparacion",
    slug2: "reparacion",
    title: "Reparación de Electrobombas",
    shortDescription:
      "Servicio técnico especializado en reparación de electrobombas en Mendoza, San Juan y resto de Argentina, con diagnóstico preciso, repuestos de calidad y prueba en banco.",
    fullDescription:
      "Brindamos un servicio integral de reparación de electrobombas sumergibles y de superficie. Realizamos diagnóstico eléctrico y mecánico completo, desmontaje, bobinado, reemplazo de componentes y armado bajo estándares técnicos exigentes. Cada equipo es sometido a pruebas de funcionamiento para asegurar su rendimiento antes de la entrega.",
    features: [
      "Diagnóstico técnico completo",
      "Bobinados profesionales",
      "Reparación integral garantizada",
      "Repuestos de alta calidad",
      "Prueba en banco de funcionamiento",
      "Servicio para todas las marcas",
    ],
    details: [
      "Desarme y evaluación del equipo",
      "Bobinado de motores eléctricos",
      "Cambio de rodamientos y sellos mecánicos",
      "Reparación de motores monofásicos y trifásicos",
      "Prueba de aislación eléctrica",
      "Control de rendimiento y consumo",
      "Armado y ajuste final",
      "Informe técnico del trabajo realizado",
    ],
    image: reparacion1,
    images: [reparacion1],
    imageDetail: reparacion1,
    icon: "Settings",
    gradient: "from-yellow-500 to-orange-600",
  },

  {
    id: "3",
    slug: "bobinados",
    slug2: "",
    title: "Bobinados",
    shortDescription:
      "Bobinado profesional de motores eléctricos sumergibles y de superficie para cualquier aplicación industrial o agrícola.",
    fullDescription:
      "El bobinado es una tarea que requiere precisión y experiencia. Nuestro equipo de técnicos especializados realiza bobinados completos o parciales de motores eléctricos de todo tipo. Utilizamos materiales de primera calidad: conductores de cobre electrolítico, barnices de impregnación y aislantes que garantizan la durabilidad y eficiencia del motor reparado.",
    features: [
      "Cobre electrolítico de primera calidad",
      "Barnizado e impregnación al vacío",
      "Control de calidad por etapas",
      "Garantía de funcionamiento",
    ],
    details: [
      "Bobinado de estátores monofásicos y trifásicos",
      "Bobinado de rotores y armaduras",
      "Impregnación al vacío con barniz epóxico",
      "Balanceo dinámico de rotores",
      "Ensayo dieléctrico post-bobinado",
      "Documentación técnica del trabajo",
    ],
    images: [bobinados2],
    image: bobinados2,
    imageDetail: bobinados2,
    icon: "Zap",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "4",
    slug: "extraccion",
    slug2: "",
    title: "Extracción y Colocación de Electrobombas",
    shortDescription:
      "Realizamos extracción e instalación de electrobombas en pozos de agua con herramientas especializadas y personal capacitado.",
    fullDescription:
      "Ofrecemos servicio profesional de extracción, reinstalación y colocación de electrobombas en pozos profundos y semi surgentes. Trabajamos con equipos adecuados para garantizar maniobras seguras, evitando daños en la instalación y optimizando el funcionamiento del sistema de bombeo.",
    features: [
      "Extracción segura de equipos instalados",
      "Instalación profesional en pozos",
      "Herramientas y equipos especializados",
      "Adaptación a distintas profundidades",
      "Maniobras rápidas y eficientes",
      "Personal técnico capacitado",
    ],
    details: [
      "Extracción de bombas sumergibles",
      "Colocación de electrobombas nuevas o reparadas",
      "Revisión de cañerías y cables",
      "Ajuste de profundidad de trabajo",
      "Verificación de funcionamiento",
      "Instalación de sistemas de sujeción",
      "Control eléctrico básico en sitio",
      "Cobertura en Mendoza y San Juan",
    ],
    images: [extrac1],
    image: extrac1,
    imageDetail: extrac1,
    icon: "Tool",
    gradient: "from-blue-500 to-purple-600",
  },

  {
    id: "5",
    slug: "filmaciones",
    slug2: "",
    title: "Filmaciones de Pozos",
    shortDescription:
      "Videofilmaciones hasta 500 metros para diagnóstico preciso del estado de la perforación, cañería y equipos instalados.",
    fullDescription:
      "Ofrecemos el servicio de videofilmación con cámara sumergible de alta definición hasta 500 metros de profundidad. Es la herramienta diagnóstica más efectiva para conocer el estado real de una perforación sin necesidad de intervención. Permite detectar filtraciones, obstrucciones, daños en filtros, depósitos de sedimentos y el estado general del entubado.",
    features: [
      "Cámara HD hasta 500 metros",
      "Diagnóstico preciso sin extracción",
      "Informe técnico con video incluido",
      "Detección de problemas ocultos",
    ],
    details: [
      "Cámara rotativa 360° con iluminación LED",
      "Grabación en alta definición",
      "Medición de profundidad en tiempo real",
      "Entrega de video y informe técnico",
      "Diagnóstico de filtros y cañerías",
      "Detección de acumulación de sedimentos",
    ],
    images: [filmacion1, filmacion1],
    image: "/assets/filmaciones.jpg",
    imageDetail: perfo2,
    icon: "Video",
    gradient: "from-indigo-500 to-purple-600",
  },
  
  {
    id: "7",
    slug: "pescas",
    slug2: "",
    title: "Pesca de Electrobombas",
    shortDescription:
      "Recuperación de electrobombas, cañerías y elementos caídos al interior de la perforación mediante técnicas especializadas.",
    fullDescription:
      "La pesca de electrobombas es una operación delicada que requiere equipos especiales y experiencia probada. Cuando una bomba o cañería cae al interior del pozo, es posible recuperarla mediante herramientas de pesca diseñadas específicamente para cada situación. Evitamos la pérdida total del equipo y la necesidad de abandono del pozo.",
    features: [
      "Recuperación sin daño al pozo",
      "Herramientas de pesca específicas",
      "Alta tasa de recuperación",
      "Evita perder la perforación",
    ],
    details: [
      "Diagnóstico previo con filmación",
      "Selección de herramienta de pesca adecuada",
      "Pesca con garfios, magnetos y arpones",
      "Operación cuidadosa sin dañar cañería",
      "Recuperación de bombas, cañerías y cables",
      "Informe del procedimiento realizado",
    ],
    images: [pesca5, pesca6],
    image: pesca5,
    imageDetail: pesca7,
    icon: "Anchor",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "8",
    slug: "estudios-geologicos",
    slug2: "",
    title: "Estudios Geológicos",
    shortDescription:
      "Análisis del terreno y estudios hidrogeológicos para determinar la mejor ubicación y profundidad de perforación.",
    fullDescription:
      "Antes de perforar, es fundamental conocer el subsuelo. Realizamos estudios geológicos e hidrogeológicos completos que incluyen el análisis de la litología local, la identificación de acuíferos y la determinación del nivel freático. Esta información es clave para seleccionar la ubicación óptima del pozo y estimar la profundidad y caudal esperados.",
    features: [
      "Análisis litológico del terreno",
      "Estudio de napas freáticas",
      "Informe técnico detallado",
      "Recomendación de ubicación",
    ],
    details: [
      "Relevamiento geológico superficial",
      "Análisis de registros de pozos vecinos",
      "Determinación de nivel freático",
      "Selección de método de perforación",
      "Estimación de caudal esperado",
      "Informe técnico escrito con planos",
    ],
    images: [estudio2],
    image: estudiogeologico,
    imageDetail: estudiogeologico,
    icon: "Mountain",
    gradient: "from-teal-500 to-cyan-600",
  },
];

export const PROJECTS: Project[] = [
  {
    id: '25-de-mayo',
    title: '25 de Mayo',
    category: 'Industrial',
    images: [a1, a2, a3 , a4 ],
    pulgadas: '12"',
    profundidad: '250 m',
    descripcion: '',
    ubicacion: '25 de Mayo, San Juan',
  },
  {
    id: 'bianchetti',
    title: 'Finca Bianchetti',
    category: 'Industrial',
    images: [b1,b2,b3,b4,b5 ,b6],
    pulgadas: '12"',
    profundidad: '',
    descripcion: 'Pozo surgente',
    ubicacion: 'Tunuyán, Mendoza',
  },
  {
    id: 'finca-blanco',
    title: 'Finca Blanco',
    category: 'Industrial',
    images: [c1,c2,c3],
    pulgadas: '12"',
    profundidad: '200 m',
    descripcion: '',
    ubicacion: 'Ugarteche, Mendoza',
  },
  {
    id: 'finca-pistacho',
    title: 'Finca de Pistacho',
    category: 'Industrial',
    images: [h1,h2,h3,h4,h5,h6,h7],
    pulgadas: '12"',
    profundidad: '250 m',
    descripcion: '',
    ubicacion: 'San Juan, Argentina',
  },
  {
    id: 'finca-doutre',
    title: 'Finca Doutre',
    category: 'Industrial',
    images: [d1,d2,d3],
    pulgadas: '12"',
    profundidad: '270 m',
    descripcion: '',
    ubicacion: 'Tupungato, Mendoza',
  },
  {
    id: 'independiente-rivadavia',
    title: 'Club Independiente Rivadavia',
    category: 'Institucional',
    images: [e1,e2,e3],
    pulgadas: '',
    profundidad: '',
    descripcion: '',
    ubicacion: '',
  },
  {
    id: 'luigi-bosca',
    title: 'Luigi Bosca',
    category: 'Industrial',
    images: [n1,n2,n3,n4],
    pulgadas: '12"',
    profundidad: '200 m',
    descripcion: '',
    ubicacion: '',
  },
  {
    id: 'olivum',
    title: 'Olivum',
    category: 'Industrial',
    images: [f1,f2,f3,f4],
    pulgadas: '',
    profundidad: '',
    descripcion: '',
    ubicacion: '',
  },
  {
    id: 'oreste',
    title: 'Oreste',
    category: 'Industrial',
    images: [g1],
    pulgadas: '',
    profundidad: '',
    descripcion: '',
    ubicacion: '',
  },
  {
    id: 'rolar-de-cuyo',
    title: 'Rolar de Cuyo',
    category: 'Industrial',
    images: [
      i1, i2, i3, i4, i5, i6, i7, i8, i9,
      j1, j2, j3, j4, j5, j6, j7, j8, j9,
      k1, k2, k3, k4, k5, k6, k7, k8, k9,
    ],
    pulgadas: '12"',
    profundidad: '200 m',
    descripcion: '',
    ubicacion: 'San Juan, Argentina',
  },
  {
    id: 'torres-del-sol',
    title: 'Torres del Sol',
    category: 'Industrial',
    images: [
      l9, l1, l2, l3, l4, l5, l6, l7, l8, l9,
      m1, m2,
    ],
    pulgadas: '14" y 12"',
    profundidad: '280 m',
    descripcion: '',
    ubicacion: 'San Juan, Argentina',
  },
];

// ─────────────────────────────────────────────
// CONTACTO
// ─────────────────────────────────────────────
export const CONTACT = {
  phones: [
    { label: 'Administración', number: '0261-212-0438', href: 'tel:2612120438' },
    { label: 'Sergio', number: '0261-206-6881', href: 'tel:2612066881' },
    { label: 'Chino (WhatsApp)', number: '0261-470 7318', href: 'tel:02614707318', whatsapp: '5492614707318' },
  ],
  email: 'arenasbombas@hotmail.com',
  address: '1536 Jesús Nazareno, M5515 Maipú, Mendoza, Argentina',
  hours: {
    weekdays: 'Lunes a Viernes: 8:00 - 17:00',
    saturday: 'Sábado: 8:00 - 12:00',
  },
  linkedin: 'https://linkedin.com/in/sergio-antonio-arenas-85ba7b96',
  whatsappNumber: '5492614707318',
  zones: ["Mendoza", "San Juan", "San Luis", "Buenos Aires", "Patagonia", "La Pampa", "Norte Argentino"],
  mapEmbedUrl: 'https://maps.app.goo.gl/ibTBbgPVCskm1RDg9',
};
