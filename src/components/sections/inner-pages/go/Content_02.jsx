const Content_02 = () => {
  return (
    <section id='content-section-2'>
      {/* Section Spacer */}
      <div className='pb-20 Pt-20 mt-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='font-spaceGrotesk mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-[950px]'>
              <h2>Goodbye Manual Work!</h2>
            </div>
          </div>
          {/* Section Content Block */}
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,_1fr)_1.2fr] xl:gap-28 xxl:gap-32'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md md:order-1'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/communications.jpeg'
                alt='content-image-4'
                width={650}
                height={600}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div
              className='jos order-1 md:order-2'
              data-jos_animation='fade-right'
            >
              <ul className='flex flex-col gap-y-6'>
              <li>
                  <h4 className='mb-[10px] font-black font-satoshi lg:text-[20px] xl:text-[24px]'>
                    Document processing
                  </h4>
                  <p className='mb-7 last:mb-0 font-satoshi lg:text-[16px] xl:text-[16px]'>
                    Logpilot can process supply chain documents such as purchase orders,
                    sales orders, pack list data and transport documents. Logpilot will extract data 
                    and update ERPs and warehousing solutions in real time. Companies will always have real time data
                    in ERPs and warehousing solutions.
                  </p>
                </li>
                <li>
                
                
                  <h4 className='mb-[10px] font-black font-satoshi lg:text-[20px] xl:text-[24px]'>
                    Proactive communications
                  </h4>
                  <p className='mb-7 last:mb-0 font-satoshi font-satoshi lg:text-[16px] xl:text-[16px'>
                    Logpilot witll proactively communicate with suppliers to gather 
                    information such as Delivery lead times, supply chain disrutions and anyother
                    information critical for procurement decision making.
                  </p>
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

export default Content_02;
