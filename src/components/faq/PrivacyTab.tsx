import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqData = [
  {
    id: 1,
    question: '¿Qué información recopilan en mi sitio web?',
    answer:
      'Solo recopilamos la información necesaria para atender consultas, mejorar el sitio y prestar nuestros servicios, como datos de contacto enviados mediante formularios.',
  },
  {
    id: 2,
    question: '¿Cómo protegen los datos de mi negocio?',
    answer:
      'Aplicamos buenas prácticas de seguridad y trabajamos con proveedores confiables para proteger la información y los accesos de tu sitio web.',
  },
  {
    id: 3,
    question: '¿Comparten mis datos con terceros?',
    answer:
      'No vendemos tus datos. Solo compartimos información con servicios necesarios para operar el sitio, como hosting, formularios o analítica, cuando corresponde.',
  },
  {
    id: 4,
    question: '¿Los mensajes de mis clientes son privados?',
    answer:
      'Sí. Los mensajes se utilizan únicamente para gestionar la consulta o solicitud correspondiente y no se destinan a fines ajenos a tu atención.',
  },
  {
    id: 5,
    question: '¿Puedo solicitar la eliminación de mis datos?',
    answer:
      'Sí. Puedes escribirnos para solicitar acceso, corrección o eliminación de tus datos personales cuando ya no sean necesarios.',
  },
  {
    id: 6,
    question: '¿Dónde puedo leer la política de privacidad?',
    answer:
      'Puedes revisar nuestra política de privacidad en el enlace disponible en el sitio o solicitarla directamente a nuestro equipo.',
  },
];

const PrivacyTab = () => {
  return (
    <Accordion
      className="mx-auto w-full max-w-[850px] space-y-4"
      defaultValue="1"
      enableScrollAnimation={true}
      animationDelay={0.1}>
      {faqData.map((item) => (
        <AccordionItem
          className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
          key={item.id}
          value={item.id.toString()}>
          <AccordionTrigger
            titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
            className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
            value={item.id.toString()}
            iconType="arrow">
            {item.question}
          </AccordionTrigger>
          <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PrivacyTab;
