const Content_05 = () => {
  return (
    <section id='section-content-2'>
      <div className=''>
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
                  <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[40px] lg:text-[50px] xl:text-[54px]' style={{ color: '#1D97FF' }}>
                 Inventory Management
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Stoqr delivers intelligent, real-time inventory control built for accuracy, speed, and multi-location visibility. It acts as the central nervous system of your stock operations—tracking every movement, maintaining precise SKU-level records, and ensuring the right products are always available. With predictive insights and automated workflows, Stoqr transforms inventory management from a manual burden into a proactive, data-driven system.
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
                      AI demand forecasting to prevent stockouts and overstocking.
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
                      Full SKU traceability with a complete stock ledger and audit trail.
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
                      Automated allocation for fast and accurate fulfillment.
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

export default Content_05;
