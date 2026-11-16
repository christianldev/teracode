import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqData = [
  {
    id: 1,
    question: '¿Qué son los términos y condiciones?',
    answer:
      'Son las reglas que definen el alcance de nuestros servicios, las responsabilidades de cada parte y las condiciones para trabajar juntos de forma transparente.',
  },
  {
    id: 2,
    question: '¿Por qué debo aceptar los términos y condiciones?',
    answer:
      'Aceptarlos confirma que conoces el proceso, los entregables, los plazos y las políticas aplicables a tu proyecto.',
  },
  {
    id: 3,
    question: '¿Pueden cambiar los términos y condiciones?',
    answer:
      'Podemos actualizarlos cuando sea necesario. Los cambios importantes se comunicarán de forma clara antes de que afecten a un servicio activo.',
  },
  {
    id: 4,
    question: '¿Qué ocurre si no se cumplen los términos?',
    answer:
      'Primero buscaremos una solución conversando contigo. En casos necesarios, podremos pausar el servicio conforme a lo establecido en la propuesta aprobada.',
  },
  {
    id: 5,
    question: '¿Dónde puedo leer los términos completos?',
    answer:
      'Están disponibles en la página de términos y condiciones del sitio. También puedes solicitarlos a nuestro equipo antes de iniciar un proyecto.',
  },
  {
    id: 6,
    question: '¿Qué actividades no están permitidas?',
    answer:
      'No desarrollamos ni alojamos contenido ilegal, engañoso o que infrinja derechos de terceros. Cada proyecto debe cumplir la normativa aplicable.',
  },
];

const TermsConditionsTab = () => {
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

export default TermsConditionsTab;
