const Content_02 = () => {
  return (
    <section id='section-content-2' className='relative z-[1] -mt-[56px] lg:-mt-[90px] xl:-mt-[112px]'>
      <div className='bg-colorLinenRuffle'>
        {/* Section Spacer */}
        <div className='py-20 xl:py-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid items-start gap-10 md:grid-cols-[2fr_3fr] lg:gap-[60px] xl:gap-x-[94px]'>
              <div className='jos order-1 mt-8 lg:mt-10' data-jos_animation='fade-left'>
                <div className='overflow-hidden rounded-[10px]'>
                  <img
                    src='assets/img/th-1/wautomation.png'
                    alt='content-img-2'
                    width={526}
                    height={550}
                    className='h-auto w-full'
                  />
                </div>
              </div>
              <div className='jos order-2 mt-8 lg:mt-10' data-jos_animation='fade-right'>
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[60px]'>
                    Workflow automation
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Stoqr automates end-to-end warehouse and supply chain workflows, eliminating repetitive manual tasks and ensuring every operation flows smoothly from start to finish. From receiving to picking, packing, dispatching, and reconciliation, Stoqr triggers each step automatically based on predefined rules, real-time data, and system events. This ensures faster processing, fewer errors, and consistent execution across teams and locations. 
                With intelligent routing, automated alerts, and seamless coordination between modules, Stoqr turns complex warehouse operations into a fully connected, self-running workflow.
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
                      Hands-free task progression from one step to the next.
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
                      Real-time alerts to reduce delays and prevent bottlenecks.
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
                      Consistent, error free execution across all warehouse activities.
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
                      Reduced manual workload so teams can focus on value added tasks.
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
