import RevealAnimation from '../animation/RevealAnimation';
import TestimonialV2 from '../shared/TestimonialV2';

const Testimonial = () => {
  return (
    <section className="py-16 sm:py-20 md:py-[75px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[35px] sm:space-y-[50px] md:space-y-[70px]">
          <div className="space-y-3 text-center sm:space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan inline-block">Casos de éxito</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>
                  Negocios que ya
                  <span className="text-primary-500"> impulsan sus ventas </span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto w-full max-w-[628px]">
                  Conoce cómo ayudamos a marcas y emprendimientos a digitalizar su catálogo y automatizar sus pedidos.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <TestimonialV2 />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
