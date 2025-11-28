const Content_01 = () => {
  return (
    <section id='content-section-1'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px] mt-20 '>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/procurement.png'
                alt='content-image-2'
                width={626}
                height={550}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[34px] lg:text-[46px] xl:text-[50px]' style={{ color: '#1D97FF' }}>Procurement Automation</h3>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Stoqr streamlines the entire purchasing cycle by autonomously forecasting inventory needs, processing purchase requests, validating documents, coordinating with suppliers, and triggering downstream actions without manual effort. 
                By predicting stock requirements before shortages occur, it reduces errors, accelerates order fulfillment, and ensures every procurement step is executed efficiently, proactively, and consistently.
                </p>
              </div>
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
                      Unwavering surveillance of your supply chain ecosystem.
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
                      Sophisticated models that forecast risks with precision.
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
                     Aligns supply chain operations with overall business strategy. 
                    </li>
                    
                  </ul>
            </div>
            {/* Content Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_01;
