import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, BookOpen, BrainCircuit, CheckCircle, Clock, Target, Users, Zap, Layers, BarChart3 } from 'lucide-react';

// --- BASE DE DATOS DE PRODUCTOS CON DISEÑO INTEGRADO ---
const productsDatabase: { [key: string]: any } = {
  'maestria-ejecutiva': {
    type: 'MAESTRIA',
    name: 'Maestría Ejecutiva en IA',
    title: 'Maestría Ejecutiva en IA: Liderazgo Estratégico',
    priceInCents: 5000000,
    selected_course: new Date().toISOString().split('T')[0],
    content: {
      hero: {
        subtitle: 'Programa Estrella',
        title: 'Liderazgo Estratégico en la Era de la IA',
        description: 'Transforma tu liderazgo y el de tu organización en solo 5 semanas.',
        target: 'Dirigido a alta gerencia, juntas directivas y líderes de transformación digital.'
      },
      infoCards: [
        { icon: Clock, title: '15 Horas', subtitle: '5 semanas intensivas' },
        { icon: Users, title: 'C-Level', subtitle: 'Alta gerencia' }
      ],
      programTitle: "Programa Detallado",
      program: [
        { week: 1, title: "El Despertar Digital", summary: "Sesión de impacto que transforma la percepción sobre la IA mediante casos de éxito, estadísticas reveladoras y demostraciones prácticas." },
        { week: 2, title: "Dominio de la Comunicación Inteligente", summary: "Masterclass práctica donde aprenderás a usar ChatGPT y Gemini como asistentes estratégicos personales." },
        { week: 3, title: "Revolución del Contenido Audiovisual", summary: "Crea videos corporativos, mensajes personalizados y contenido multimedia profesional usando avatares y clonación de voz." },
        { week: 4, title: "Presentaciones Ejecutivas 10X con IA", summary: "Genera slides persuasivos, informes visuales y pitches de inversión en tiempo récord." },
        { week: 5, title: "Gestión Estratégica con Automatización", summary: "Configura flujos de trabajo inteligentes para gestión de proyectos, asignaciones automáticas y seguimiento de equipos." },
      ],
      benefits: [
        'Productividad Triplicada', 'Dominio de Herramientas Líderes', 'Protocolos de Seguridad Empresarial', 'ROI Inmediato y Medible'
      ],
      deliverables: [
        'Biblioteca de prompts ejecutivos', 'Avatares digitales y voces clonadas', 'Checklist de seguridad y protocolo', 'Acceso a comunidad exclusiva'
      ]
    }
  },
  'masterclass-intensiva': {
    type: 'CURSO_EMPRESARIAL',
    name: 'Masterclass Intensiva',
    title: 'Masterclass Intensiva para Empresas',
    priceInCents: 150000000,
    selected_course: '2025-04-01',
    content: {
      hero: {
        subtitle: 'Formato Ejecutivo',
        title: 'Masterclass Intensiva: IA en 4 Horas',
        description: 'Una sesión de alto impacto que combina fundamentos estratégicos con el dominio práctico de una herramienta clave.',
        target: 'Ideal para equipos directivos (5-15 personas) que buscan una introducción sólida a la IA.'
      },
      infoCards: [
        { icon: Clock, title: '4 Horas', subtitle: 'Sesión única y enfocada' },
        { icon: Zap, title: 'Alto Impacto', subtitle: 'Resultados inmediatos' }
      ],
      programTitle: "Contenido del Programa",
      program: [
        { week: 1, title: "Bloque 1: El Despertar Digital (90 min)", summary: "Análisis de la evolución de la IA, casos de transformación y aplicación del framework 'AI Radar' para identificar oportunidades de alto impacto en su propia empresa." },
        { week: 2, title: "Bloque 2: Dominio Práctico (150 min)", summary: "Taller práctico enfocado en una herramienta de IA (a elección), aplicando técnicas avanzadas a casos reales de su sector y creando plantillas para implementación inmediata." },
      ],
      benefits: [
        'Adopción Rápida y Efectiva', 'Validación de Interés en IA', 'Capacitación Focalizada', 'Productividad Inmediata'
      ],
      deliverables: [
        'Framework "AI Radar" aplicado', 'Plantillas personalizadas de la herramienta', 'Manual de buenas prácticas de seguridad', 'Certificado de participación'
      ]
    }
  },
   'masterclass-avanzada': {
    type: 'CURSO_EMPRESARIAL',
    name: 'Masterclass Avanzada',
    title: 'Masterclass Avanzada para Empresas',
    priceInCents: 250000000,
    selected_course: '2025-05-01',
    content: {
      hero: {
        subtitle: 'Inmersión Estratégica',
        title: 'Masterclass Avanzada: Transformación con IA',
        description: 'Un programa intensivo de 8 horas para profundizar en herramientas avanzadas y flujos de trabajo integrados.',
        target: 'Diseñado para equipos técnicos o semi-técnicos listos para una automatización y transformación integral.'
      },
      infoCards: [
        { icon: Clock, title: '8 Horas', subtitle: 'Inmersión completa' },
        { icon: Layers, title: 'Ecosistema Integrado', subtitle: 'Múltiples herramientas' }
      ],
      programTitle: "Contenido del Programa",
      program: [
        { week: 1, title: "Bloque 1: Despertar Digital Extendido (2 Horas)", summary: "Análisis profundo del impacto de IA, estudio de casos de éxito y fracaso, y aplicación colaborativa del framework 'AI Radar' a la empresa." },
        { week: 2, title: "Bloque 2: Especialización Avanzada (5.5 Horas)", summary: "Elija entre dominar una herramienta de automatización avanzada (N8N, Make) o integrar un ecosistema de productividad (ChatGPT + Gamma + Trello) para crear flujos de trabajo eficientes." },
        { week: 3, title: "Bloque 3: Implementación Estratégica (30 min)", summary: "Creación de un plan de adopción personalizado, identificación de KPIs y una hoja de ruta clara para el escalamiento organizacional." },
      ],
      benefits: [
        'Transformación Integral', 'Automatización de Procesos', 'Liderazgo en Innovación', 'Implementación Guiada'
      ],
      deliverables: [
        'Plan de implementación personalizado', 'Flujos de trabajo automatizados', 'Métricas de éxito (KPIs) definidas', 'Seguimiento post-programa de 30 días'
      ]
    }
  },
  'demo-pregrabado': {
      type: 'CURSO_PREGRABADO',
      name: 'Acceso Demo Cursos Pregrabados',
      title: 'Demo de Cursos Pregrabados',
      priceInCents: 1000000,
      selected_course: new Date().toISOString().split('T')[0],
      content: {
        hero: {
          subtitle: 'Aprende a tu Ritmo',
          title: 'Acceso a la Demo de Cursos Pregrabados',
          description: 'Descubre nuestra plataforma de aprendizaje con acceso a un módulo de demostración.',
          target: 'Para profesionales que buscan flexibilidad en su aprendizaje.'
        },
        infoCards: [
            { icon: Clock, title: 'Acceso Inmediato', subtitle: 'Contenido 24/7' },
            { icon: Users, title: 'Individual', subtitle: 'Aprende a tu ritmo' }
        ],
        programTitle: "Contenido de la Demo",
        program: [
            { week: 1, title: "Módulo de Introducción", summary: "Accede al primer módulo de nuestro curso más popular de IA generativa." },
            { week: 2, title: "Plataforma Interactiva", summary: "Explora los ejercicios prácticos y los recursos descargables que acompañan cada lección." },
        ],
        benefits: ['Flexibilidad Total', 'Aprendizaje Práctico', 'Contenido de Alta Calidad', 'Sin Compromisos'],
        deliverables: ['Acceso a un módulo de prueba', 'Ejemplos de recursos descargables', 'Vista previa del certificado']
      }
  }
};

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsDatabase[productId] : null;

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Producto no encontrado</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Volver al inicio</Link>
      </div>
    );
  }
  
  const { hero, infoCards, programTitle, program, benefits, deliverables } = product.content;

  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <section className="bg-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="w-8 h-8 text-blue-600" />
              <span className="text-blue-600 font-semibold text-lg">{hero.subtitle}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{hero.title}</h1>
            <p className="text-xl lg:text-2xl text-cyan-600 font-semibold mb-4">{hero.description}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{hero.target}</p>
          </div>
        </section>

        <section className="py-12 -mt-12">
            <div className="max-w-xl mx-auto grid grid-cols-2 gap-8">
                {infoCards.map((card: any, index: number) => (
                    <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                        <card.icon className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">{card.title}</div>
                        <div className="text-sm text-gray-500">{card.subtitle}</div>
                    </div>
                ))}
            </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><BookOpen className="w-8 h-8 text-blue-600 mr-3"/>{programTitle}</h3>
              <div className="space-y-4">
                {program.map((item: any, index: number) => (
                  <div key={index} className="p-4 bg-white rounded-lg border-l-4 border-blue-500 shadow-sm">
                    <p className="font-bold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Target className="w-8 h-8 text-blue-600 mr-3"/>Beneficios Clave</h3>
              <ul className="space-y-3">
                {benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Award className="w-8 h-8 text-blue-600 mr-3"/>Entregables</h3>
              <ul className="space-y-3">
                {deliverables.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <section id="inscripcion" className="py-20 bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto">
                <PaymentForm product={product} />
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ProductDetailPage;