import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id='hero-section'>
      <div className='relative overflow-hidden rounded-bl-[10px] rounded-br-[10px] pb-16 pt-16 lg:pb-20 lg:pt-20 xl:pt-28 xxl:pb-[120px] xxl:pt-[160px] hero-background'>
        {/* Section Spacer */}
        <div className='pb-4 pt-8 md:pb-32 lg:pt-20 xl:pb-[60px] xl:pt-[60px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,_0.95fr)_0.1fr]'>
              {/* Hero Content */}
              <div>
                <h1 className='jos mb-6 max-w-md break-words text-white font-spaceGrotesk text-4xl font-medium leading-14 text-colorBlue md:max-w-full md:text-4xl lg:text-5xl xl:text-7xl xxl:text-[80px]'>
                The OS for Construction Supply Chains.
                </h1>
                
                <Link
                  rel='noopener noreferrer'
                  to='https://calendly.com/hello-logpilot/30min'
                  target='_blank'
                  className='jos button font-spaceGrotesk text-[18px] relative z-[1] inline-flex items-center gap-3 rounded-[10px] border-none bg-colorBlue py-[12px] text-white after:bg-colorLightblue hover:text-white'
                >
                  Book Demo
                </Link>
              </div>
              {/* Hero Content */}
              {/* Hero Image */}

              {/* Hero Image */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </div>
    </section>
  );
};

export default Hero;