const Content_02 = () => {
  return (
    <section id='section-content-2'>
      <div className='bg-colorLinenRuffle'>
        {/* Section Spacer */}
        <div className='py-20 xl:py-[70px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid items-top gap-10 md:grid-cols-[2fr_3fr] lg:gap-[60px] xl:gap-x-[94px]'>
              <div className='jos order-1' data-jos_animation='fade-left'>
                <div className='overflow-hidden rounded-[10px]'>
                  <img
                    src='assets/img/th-1/salesorder.png'
                    alt='content-img-2'
                    width={526}
                    height={400}
                    className='max-h-[400px] w-full object-contain'
                  />
                </div>
              </div>
              <div className='jos order-2' data-jos_animation='fade-right'>
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[34px] lg:text-[46px] xl:text-[50px]' style={{ color: '#1D97FF' }}>
               Order management
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Stoqr simplifies and automates the entire order-to-fulfillment lifecycle. Orders flow seamlessly from capture to delivery with intelligent validation, real-time stock checks, automated routing, and coordinated warehouse execution. Stoqr ensures every order is processed with speed, accuracy, and minimal manual intervention — enabling teams to scale operations effortlessly.
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
                      Reduced processing time through elimination of manual reviews.
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
                      Instant order validation using real-time stock, pricing, and credit checks.
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
                      Live order tracking for sales teams and customers. 
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
