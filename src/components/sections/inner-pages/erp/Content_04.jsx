const Content_02 = () => {
  return (
    <section id='section-content-2'>
      <div className='bg-colorLinenRuffle'>
        {/* Section Spacer */}
        <div className='py-10 xl:py-[60px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid items-center gap-10 md:grid-cols-[2fr_3fr] lg:gap-[60px] xl:gap-x-[94px]'>
              <div className='jos order-1' data-jos_animation='fade-left'>
                <div className='overflow-hidden rounded-[10px]'>
                  <img
                    src='assets/img/th-1/clientportal.png'
                    alt='content-img-2'
                    width={526}
                    height={550}
                    className='h-auto w-full'
                  />
                </div>
              </div>
              <div className='jos order-2' data-jos_animation='fade-right'>
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[60px]' style={{ color: '#1D97FF' }}>
                    Client Portal
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className=''>
                  <p className='mb-8 text-lg leading-[1.4] last:mb-0 lg:text-[20px] font-inter'>
                  The Stoqr Client Portal gives customers a seamless, self-service platform to manage all their purchasing needs. From browsing products to tracking orders and accessing invoices, the portal delivers a smooth, transparent experience that reduces dependency on sales teams and boosts repeat business.
                  </p>
                  <ul className='flex flex-col gap-y-2 font-semibold text-base md:text-xl text-black lg:mt-12 lg:text-[18px]'>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/tick.svg'
                          alt='tick'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                     Generate periodical reports on procurement.
                    </li>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/tick.svg'
                          alt='tick'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Conversational analytics for procurement teams.
                    </li>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/tick.svg'
                          alt='tick'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                     Fetch data from suppliers and cusotmers in real time.
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
