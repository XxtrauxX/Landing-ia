import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿IA Academy provee las licencias de herramientas?",
      answer: "No, se orienta sobre la opción mínima recomendada, pero cada participante gestiona su suscripción. Proporcionamos guías detalladas sobre qué plan contratar para cada herramienta según sus necesidades empresariales."
    },
    {
      question: "¿Requiere conocimientos técnicos previos?",
      answer: "No. Está diseñado específicamente para directivos y ejecutivos, sin necesidad de experiencia técnica. Nos enfocamos en el uso estratégico y práctico de las herramientas desde una perspectiva de liderazgo empresarial."
    },
    {
      question: "¿Qué herramientas se usan y en qué planes?",
      answer: "• ChatGPT: Recomendado ChatGPT Plus (USD 20/mes)\n• Microsoft Copilot: Microsoft 365 + Copilot (USD 30/mes)\n• HeyGen: Plan Creator para voz/avatar\n• ElevenLabs: Plan Starter (USD 5/mes)\n• Gamma/Plus AI: Requieren versión Plus (USD 10/mes aprox.)\n• Trello/Butler: Plan Free suficiente para los ejercicios"
    },
    {
      question: "¿Se puede personalizar la formación para mi empresa?",
      answer: "Sí. Ofrecemos programas in-company completamente ajustados a metas específicas, industria y cultura organizacional. Incluye diagnóstico previo, contenido personalizado y seguimiento post-implementación con KPIs específicos."
    },
    {
      question: "¿Puedo tomar la Maestría completamente online?",
      answer: "Sí. Puedes elegir entre modalidad híbrida, presencial en nuestro campus, o 100% virtual en vivo. Todas las modalidades mantienen la misma calidad académica y acceso a consultoría post-programa."
    },
    {
      question: "¿Qué certificación recibo al completar el programa?",
      answer: "Recibes certificación empresarial de IA Academy reconocida por empresas Fortune 500. Incluye badge digital para LinkedIn, certificado físico y acceso permanente a la comunidad de alumni ejecutivos."
    },
    {
      question: "¿Cuál es la política de garantía?",
      answer: "Ofrecemos garantía de satisfacción total. Si no estás completamente satisfecho en las primeras 2 semanas, reembolsamos el 100% de tu inversión. Además, garantizamos resultados medibles en productividad o extendemos la consultoría sin costo."
    },
    {
      question: "¿Qué soporte tengo durante y después del programa?",
      answer: "Durante: Instructor dedicado, comunidad privada 24/7, y sesiones de Q&A semanales. Después: 3 meses de consultoría estratégica, acceso a actualizaciones de contenido, y red de alumni para networking empresarial."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="w-8 h-8 text-cyan-600" />
            <span className="text-cyan-600 font-semibold text-lg">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resolvemos Tus Dudas
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber sobre nuestros programas ejecutivos
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            Ver Todas las Preguntas Frecuentes
          </button>
          <p className="text-gray-500 mt-2">
            ¿No encuentras tu respuesta? Contáctanos directamente
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;