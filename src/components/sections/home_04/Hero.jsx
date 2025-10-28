import { Link } from 'react-router-dom';

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id='hero-section'>
          <div className='relative z-[1] overflow-hidden text-center text-white'>
            {/* Section Spacer */}
            <div className="bg-[url('/assets/img/th-1/hero-bg.jpg')] bg-cover bg-no-repeat pb-2 pt-28 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[224px]">
              {/* Section Container */}
              <div className='global-container'>
                <h1 className='jos mb-12 font-spaceGrotesk leading-none -tracking-[3px] text-white'>
                  What if your supply chain could think?
                </h1>
                <div className='mx-auto max-w-[1090px]'>
                  <p className='leading-[1.33] lg:text-xl xl:text-2xl'>
                    Logpilot is the new brain for Supply chains. It keeps your supply chains risk free by predicting risks and mitigating them with automated decisions.
                  </p>
                </div>
                
                
              </div>
              {/* Section Container */}
            </div>
            {/* Background Gradient */}
            <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#39FF14] to-[#37ff1467] blur-[250px]'></div>
          </div>
          {/* Section Spacer */}
        </section>
  );
};

export default Hero;
