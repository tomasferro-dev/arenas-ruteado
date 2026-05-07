import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arenas Perforaciones',
  description:
    'Empresa especializada en perforación de pozos de agua en Mendoza y San Juan. Más de 20 años de experiencia. Servicios de electrobombas, bobinados, filmaciones y más.',
  url: 'https://arenasperforaciones.com.ar',
  telephone: '+5402614707318',
  email: 'arenasbombas@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1536 Jesús Nazareno',
    addressLocality: 'Maipú',
    addressRegion: 'Mendoza',
    postalCode: 'M5515',
    addressCountry: 'AR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
  areaServed: ['Mendoza', 'San Juan', 'San Luis', 'Buenos Aires', 'Patagonia', 'La Pampa'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Perforación de Pozos y Electrobombas',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Perforación de pozos de agua' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Limpieza de perforaciones' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo de perforaciones' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venta de electrobombas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reparación de electrobombas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estudios geológicos' } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Perforación de Pozos de Agua en Mendoza y San Juan"
        description="Arenas Perforaciones: perforación de pozos de agua hasta 1000m, venta y reparación de electrobombas, estudios geológicos, filmaciones y más. +20 años de experiencia en Mendoza y San Juan."
        canonical="/"
        jsonLd={localBusinessJsonLd}
      />
      <Hero />
      <Services preview />
      <WhyChooseUs />
      <Gallery preview />
      <Contact compact />
    </>
  );
}
