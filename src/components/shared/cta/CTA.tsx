import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import CTACheckList from './CTACheckList';
import CtaInputForm from './CtaInputForm';

interface CTAProps {
  className?: string;
  badgeClass?: string;
  ctaHeading?: string;
  spanText?: string;
  description?: string;
  btnClass?: string;
  ctaBtnText?: string;
  badgeText?: string;
  descriptionClass?: string;
  headingClass?: string;
  listTextClass?: string;
  inputFieldClass?: string;
  checkListVariant?: 'default' | 'gray';
}

const CTA = ({
  className,
  badgeClass,
  ctaHeading = 'Lleva tu negocio al',
  spanText = 'siguiente nivel digital',
  description = 'Déjanos tu WhatsApp o correo y recibe una asesoría gratuita con una propuesta a medida para tu proyecto en menos de 24 horas.',
  btnClass,
  ctaBtnText = 'Solicitar asesoría',
  badgeText,
  descriptionClass,
  headingClass,
  listTextClass,
  inputFieldClass,
  checkListVariant = 'default',
}: CTAProps) => {
  return (
    <section
      className={cn('py-[50px] md:py-20 lg:py-28', className)}
      aria-label="Sección de llamada a la acción"
    >
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-0">
          <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
            {badgeText && (
              <RevealAnimation delay={0.3}>
                <span className={cn('badge badge-green', badgeClass)}>{badgeText}</span>
              </RevealAnimation>
            )}

            <div className="space-y-3">
              <RevealAnimation delay={badgeText ? 0.4 : 0.3}>
                <h2 className={cn('md:text-heading-2 text-heading-5', headingClass)} aria-label="cta-heading">
                  {ctaHeading}
                  {spanText && <span className="text-[#1E62F5]"> {spanText}</span>}
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={badgeText ? 0.5 : 0.4}>
                <p aria-label="cta-description" className={cn(descriptionClass)}>
                  {description}
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* Formulario de contacto rápido */}
          <div
            className={cn(
              'w-full max-w-[562px] space-y-6 lg:pl-9 xl:pl-[96px]',
              badgeText && 'mt-[40px] space-y-6 lg:mt-[67px]',
            )}
          >
            <CtaInputForm
              btnClass={cn('!bg-[#1E62F5] hover:!bg-blue-700 !text-white', btnClass)}
              ctaBtnText={ctaBtnText}
              inputFieldClass={inputFieldClass}
            />
            <CTACheckList
              className="gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-0 xl:justify-start"
              ctaCheckListData={[
                {
                  id: '1',
                  text: 'Cotización 100% gratis',
                },
                {
                  id: '2',
                  text: 'Respuesta en menos de 24h',
                },
              ]}
              listTextClass={listTextClass}
              checkListVariant={checkListVariant}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;