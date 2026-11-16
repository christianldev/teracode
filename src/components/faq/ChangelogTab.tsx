import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export const faqData = [
  {
    id: 1,
    question: '¿Cómo es el proceso de trabajo?',
    answer:
      'Primero entendemos tus objetivos, definimos una propuesta y diseñamos la experiencia. Después desarrollamos, probamos y publicamos el sitio contigo.',
  },
  {
    id: 2,
    question: '¿Qué necesito para empezar?',
    answer:
      'Solo necesitamos conocer tu idea, los servicios que ofreces y tus objetivos. Si ya tienes logo, fotos o textos, los incorporamos al proyecto.',
  },
  {
    id: 3,
    question: '¿Puedo solicitar cambios durante el diseño?',
    answer:
      'Sí. Presentamos una propuesta visual antes de desarrollar para que podamos ajustar colores, contenido y estructura según tus comentarios.',
  },
  {
    id: 4,
    question: '¿Cómo se publica mi sitio web?',
    answer:
      'Nos encargamos de configurar el dominio, la publicación y los ajustes finales para que tu sitio quede listo para recibir visitas.',
  },
  {
    id: 5,
    question: '¿Recibiré soporte después de publicar?',
    answer:
      'Sí. Te acompañamos durante el lanzamiento y puedes contratar soporte continuo para actualizaciones, mejoras y nuevos contenidos.',
  },
  {
    id: 6,
    question: '¿Puedo conectar WhatsApp, pagos o formularios?',
    answer:
      'Claro. Integramos WhatsApp, formularios, catálogos, pagos y las herramientas que tu negocio necesite para vender y atender mejor.',
  },
];

const ChangelogTab = () => {
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

export default ChangelogTab;
