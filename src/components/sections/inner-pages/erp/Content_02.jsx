const Content_02 = () => {
  return (
    <section id='content-section-2'>
      <div className='bg-colorLinenRuffle'>
      {/* Section Spacer */}
      <div className='pb-20 pt-[56px] mt-[56px] xl:pb-[150px] xl:pt-[91px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='font-spaceGrotesk mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-[950px]'>
              <h2 style={{ color: '#1D97FF' }}>Zero manual effort, zero errors!</h2>
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
                  <h4 className='mb-[10px] font-spaceGrotesk' style={{ color: '#1D97FF' }}>Autonomous communications</h4>
                  <p className='mb-7 last:mb-0 text-lg leading-[1.4] lg:text-[20px] font-inter'>
                  Stoqr proactively communicates with suppliers to gather updates on delays or disruptions, enabling smarter and more accurate procurement planning.
                    
                  </p>
                </li>
                <li>
                  <h4 className='mb-[10px] font-spaceGrotesk' style={{ color: '#1D97FF' }}>
                    Document processing
                  </h4>
                  <p className='mb-7 last:mb-0 text-lg leading-[1.4] lg:text-[20px] font-inter'>
                  Stoqr extracts data from POs, sales orders, packing lists, and transport documents and updates ERP/WMS in real time for always-accurate supply chain data.
                  </p>
                </li>
                <li>
                  <h4 className='mb-[10px] font-spaceGrotesk' style={{ color: '#1D97FF' }}>
                    Proactive communications
                  </h4>
                  <p className='mb-7 last:mb-0 text-lg leading-[1.4] lg:text-[20px] font-inter'>
                  Stoqr proactively collects supplier updates—lead times, delays, and disruptions—to enable faster, smarter procurement decisions.
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
      </div>
    </section>
  );
};

export default Content_02;
