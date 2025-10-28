import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id='hero-section'>
      <div className='relative overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-20 xl:pt-40 xxl:pb-[133px] xxl:pt-[105px]'>
        {/* Section Spacer */}
        <div className='pb-28 pt-28 md:pb-40 lg:pt-28 xl:pb-[90px] xl:pt-[122px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,_1fr)_1fr]'>
              {/* Hero Content */}
              <div>
                <h1 className='jos mb-6 max-w-md break-words font-spaceGrotesk text-5xl font-medium leading-none text-colorBlue md:max-w-full md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[80px]'>
                Goodbye Manual Work!
                </h1>
                <h4 className='jos font-spaceGrotesk text-black mb-11'>
                Hello Automated Supply Chains with Logpilot.
                 
                </h4>
                <Link
                  rel='noopener noreferrer'
                  to='/contact'
                  className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white'
                >
                  Start Chatting for Free
                  <img
                    src='assets/img/th-2/icon-white-long-arrow-right.svg'
                    alt='icon-white-long-arrow-right'
                  />
                </Link>
              </div>
              {/* Hero Content */}
              {/* Hero Image */}
              <div className='hero-img overflow-hidden rounded-2xl bg-black text-right'>
                <img
                  src='assets/img/th-1/lpscreen1.png'
                  alt='hero-img-2'
                  width={1556}
                  height={768}
                  className='h-auto w-full'
                />
              </div>
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
