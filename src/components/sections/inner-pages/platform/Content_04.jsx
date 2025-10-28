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
                    Data driven supply chain decisions
                  </h3>
                </div>
                {/* Section Content Block */}
                <div className=''>
                  <p className='font-spaceGrotesk-light mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-xl'>
                  Logpilot offers continuous monitoring of your supply chains, providing real-time data that seamlessly integrates with your ERP systems. 
                  This powerful functionality empowers you to make informed decisions based on the most current information available, ensuring your operations remain agile and efficient.
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
                     Generate periodical reports on procurement.
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
                      Conversational analytics for procurement teams.
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
