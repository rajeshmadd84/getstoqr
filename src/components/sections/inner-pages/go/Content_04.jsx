const Content_02 = () => {
  return (
    <section id='section-content-2'>
      <div className='bg-colorLinenRuffle'>
        {/* Section Spacer */}
        <div className='py-20 xl:py-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid items-center gap-10 md:grid-cols-[1.3fr_minmax(0,_1fr)] lg:gap-[60px] xl:gap-x-[94px]'>
              <div className='jos order-2' data-jos_animation='fade-left'>
                <div className='overflow-hidden rounded-[10px]'>
                  <img
                    src='assets/img/th-1/decision.jpeg'
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
                    Workflow automation
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                  At Logpilot, we understand that your logistics operations are built on established processes. That's why Logpilot is built with a unique "technology for process" approach. Instead of requiring you to adapt to a rigid system, Logpilot is designed to seamlessly integrate with your existing workflows and automate them intelligently. 
                  This means you can harness the power of automation without the disruption and complexity of overhauling your current ERP and WMS procedures.
                  </p>
                  <ul className='flex flex-col gap-y-2 font-satoshi text-[18px] text-black lg:mt-12 lg:text-[20px]'>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                     Generate and Update purchase orders.
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Generate sales orders with stock allocation.
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                     Communciate with suppliers and cusotmers.
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                     Send RFP and RFQ to suppliers.
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
