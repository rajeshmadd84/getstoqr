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
                    src='assets/img/th-1/visibility2.jpeg'
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
                  <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[60px]'>
                  Supply chain Visbility
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className=''>
                  <p className='font-spaceGrotesk-light mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-xl'>
                  Transform your supply chain management with Logpilot’s real-time visibility solution. 
                  Our platform autonomously monitors your supply chains, gathering crucial data on goods movement from suppliers and transport companies.<br></br><br></br>
                  Get accurate ETAs, identify delays, and anticipate disruptions before they impact your operations. 
                  With Logpilot, you’ll navigate uncertainties with confidence, ensuring your supply chain remains resilient and responsive.<br></br>
                  Embrace the future of supply chain visibility today!
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
                    Real time tracking of shipments from suppliers.
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
                      Dynamic changes to Logistics plans.
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
                     Optimizing warehousing opertions with visib.
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
