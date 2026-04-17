import { Award, Cog, Shield, Users } from 'lucide-react';
import ArenasImg from '../../assets/nosotros.jpg';

const reasons = [
  {
    icon: Award,
    title: 'Más de 20 Años de Experiencia',
    description:
      'Somos una empresa pionera en perforación de pozos de agua en Mendoza, con más de 20 años de experiencia en proyectos rurales, industriales y residenciales.',
    color: 'bg-red-700',
  },
  {
    icon: Cog,
    title: 'Equipos de Última Generación',
    description:
      'Contamos con maquinaria moderna y tecnología de punta para realizar trabajos eficientes, rápidos y de máxima calidad.',
    color: 'bg-indigo-700',
  },
  {
    icon: Shield,
    title: 'Garantía y Seguridad',
    description:
      'Todos nuestros trabajos cuentan con garantía escrita. Cumplimos con todas las normativas de seguridad vigentes.',
    color: 'bg-teal-700',
  },
  {
    icon: Users,
    title: 'Personal Calificado',
    description:
      'Nuestro equipo está formado por profesionales certificados con amplia experiencia en perforación y geología.',
    color: 'bg-lime-700',
  },
];

const stats = [
  { value: '20+', label: 'Años de Experiencia' },
  { value: '1000m', label: 'Profundidad Máxima' },
  { value: '100%', label: 'Trabajos Garantizados' },
  { value: '24/7', label: 'Disponibilidad' },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">
            ¿Por Qué Elegir Arenas Perforaciones?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Experiencia, tecnología y compromiso para garantizar tu acceso al agua.
          </p>

          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Brindamos servicios profesionales de{' '}
            <strong>perforación de pozos de agua en Mendoza, San Juan, San Luis, Noroeste, Noreste, Region Pampeana y Patagonia</strong>, incluyendo
            bobinados, filmaciones, limpieza de perforaciones, venta de bombas y asesoramiento
            técnico. Trabajamos con clientes{' '}
            <strong>rurales, residenciales e industriales en toda la región</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Image con overlay */}
          <div className="order-2 lg:order-1 relative">
            
            <img
              src={ArenasImg}
              className="rounded-lg shadow-xl w-full h-[500px] object-cover object-[center_40%]"
            />

            {/* Overlay oscuro con gradiente desde esquina */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>

          </div>

          {/* Reasons */}
          <div className="order-1 lg:order-2 space-y-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className={`${reason.color} rounded-lg p-4 flex items-center justify-center w-16 h-16 flex-shrink-0`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-red-700 mb-2">{s.value}</div>
              <div className="text-gray-600 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}