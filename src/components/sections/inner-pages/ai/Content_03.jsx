const Content_02 = () => {
  return (
    <section id='section-content-2'>
      <div className='bg-colorLinenRuffle'>
        {/* Section Spacer */}
        <div className='py-20 xl:py-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid items-top gap-10 md:grid-cols-[1.3fr_minmax(0,_1fr)] lg:gap-[60px] xl:gap-x-[94px]'>
              <div className='jos order-2' data-jos_animation='fade-left'>
                <div className='overflow-hidden rounded-[10px]'>
                  <img
                    src='assets/img/th-1/risk.jpg'
                    alt='content-img-2'
                    width={526}
                    height={550}
                    className='h-auto w-full'
                  />
                </div>
              </div>
              <div className='jos order-1' data-jos_animation='fade-right'>
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[34px] lg:text-[46px] xl:text-[50px]'>
               Proactive Risk management
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                  In today's volatile landscape, supply chain risks can strike anytime, anywhere. Logpilot empowers you to move beyond reactive firefighting and embrace proactive prevention. 
                  Our powerful LLMs and predictive models work tirelessly, continuously monitoring your supply chain data, gathering critical intelligence from suppliers and customers, and rigorously assessing if your supply chain plans align with your overarching business strategy.
                  </p>
                  <ul className='flex flex-col gap-y-2 font-semibold text-base md:text-xl text-black lg:mt-12 lg:text-[18px]'>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/security.svg'
                          alt='security'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Unwavering surveillance of your supply chain ecosystem.
                    </li>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/analytics.svg'
                          alt='analytics'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Sophisticated models that forecast risks with precision.
                    </li>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/strategy.svg'
                          alt='strategy'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                     Aligns supply chain operations with overall business strategy. 
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </div>
    </section>
  );
};

export default Content_02;
