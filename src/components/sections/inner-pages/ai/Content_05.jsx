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
                  <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[40px] lg:text-[50px] xl:text-[54px]'>
                 Intelligent Automation
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                  Tired of repetitive, manual tasks draining your team's time and energy? Logpilot's intelligent automation empowers your supply chain to operate with unprecedented efficiency. 
                  We don't just automate processes; we make them smarter. 
                  <br></br><br></br>Logpilot's intelligent automation goes beyond simply reading data from your ERP and WMS. It's designed for deep integration, meaning it can autonomously write data back to these systems, ensuring that changes and updates are reflected in real-time.
                  </p>
                  <ul className='flex flex-col gap-y-2 font-semibold text-base md:text-xl text-black lg:mt-12 lg:text-[18px]'>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/document.svg'
                          alt='document'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Automated document processing (purchase orders, packing lists).
                    </li>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/chat.svg'
                          alt='chat'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Autonomous communication with stakeholders.
                    </li>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/automation.svg'
                          alt='automation'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Free up staff from repetitive manual tasks.
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
