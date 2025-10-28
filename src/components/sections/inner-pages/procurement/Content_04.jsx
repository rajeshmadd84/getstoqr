const Content_02 = () => {
  return (
    <section id='section-content-2'>
      <div className='bg-colorLinenRuffle'>
        {/* Section Spacer */}
        <div className='py-20 xl:py-[60px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid items-center gap-8 md:grid-cols-[1.3fr_minmax(0,_1fr)] lg:gap-[60px] xl:gap-x-[94px]'>
              <div className='jos order-2' data-jos_animation='fade-left'>
                
                <div className='overflow-hidden rounded-[10px]'>
                  <img
                    src='assets/img/th-1/decision.jpeg'
                    alt='content-img-2'
                    width={200}
                    height={200}
                    className='h-auto w-full'
                  />
                </div>
              </div>
              <div className='jos order-1' data-jos_animation='fade-right'>
                {/* Section Content Block */}
                <div className='mb-6 text-colorBlue'>
                <h7>Freight Management with AI
                </h7>
              </div>
                {/* Section Content Block */}
                <div className=''>
                  <p className='font-spaceGrotesk-light mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-xl'>
                  <strong>Say goodbye to manual freight hassles and hello to intelligent automation.</strong> Logpilot makes freight management effortless by automating critical logistics processes. With advanced AI capabilities, Logpilot ensures smooth operations, cost savings, and improved communication across your supply chain.
                  </p>
                  <ul className='flex flex-col gap-y-5 font-spaceGrotesk text-xl leading-tight tracking-tighter text-black lg:mt-12 lg:text-[24px]'>
                    <li className='font-spaceGrotesk  flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Autonomous Freight Quoting.
                    </li>
                    <li className='font-spaceGrotesk flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      AI-Driven Negotiation.
                    </li>
                    <li className='font-spaceGrotesk flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Optimized Warehousing.
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
