const Promo = () => {
  return (
    <section id='promo-section'>
      <div className=' bg-colorLinenRuffle'></div>
      {/* Section Spacer */}
      <div className='rounded-bl-[30px] rounded-br-[30px] pb-20 pt-20 xl:pb-[130px] xl:pt-[150px] '>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[1000px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[60px]'>
            Stay ahead of the unexpected!
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Promo List */}
          <ul className='grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
            {/* Promo Item */}
            <li className='jos text-center md:text-left' data-jos_delay='0.1'>
              <div className='mx-auto mb-[30px] inline-flex h-10 w-auto justify-center md:justify-normal xxl:h-[100px]'>
                <img
                  src='assets/img/th-1/pa.svg'
                  alt='icon-black-promo-1'
                  width={200}
                  height={200}
                  className='h-full w-auto'
                />
              </div>
              <div className='mb-5 font-spaceGrotesk text-2xl font-bold leading-[1.9] text-black xl:text-3xl'>
                Predictive analytics
              </div>
              <p className='text-lg leading-[1.42] xl:text-[21px]'>
              Get the best of Logpilot with inventory optimization, demand forecasting, and supply chain risk predictions.
              </p>
            </li>
            {/* Promo Item */}
            {/* Promo Item */}
            <li className='jos text-center md:text-left' data-jos_delay='0.2'>
              <div className='mx-auto mb-[30px] inline-flex h-10 w-auto justify-center md:justify-normal xxl:h-[100px]'>
                <img
                  src='assets/img/th-1/di.svg'
                  alt='decision-intelligence'
                  width={70}
                  height={60}
                  className='h-full w-auto'
                />
              </div>
              <div className='mb-5 font-spaceGrotesk text-2xl font-bold leading-[1.33] text-black xl:text-3xl'>
                Proactive decisions
              </div>
              <p className='text-lg leading-[1.42] xl:text-[21px]'>
              Logpilot will make proactive supply chain decisions based on real time data to minimize supply chain risks.
              </p>
            </li>
            {/* Promo Item */}
            {/* Promo Item */}
            <li className='jos text-center md:text-left' data-jos_delay='0.3'>
              <div className='mx-auto mb-[30px] inline-flex h-10 w-auto justify-center md:justify-normal xxl:h-[100px]'>
                <img
                  src='assets/img/th-1/value.svg'
                  alt='icon-black-promo-1'
                  width={67}
                  height={60}
                  className='h-full w-auto'
                />
              </div>
              <div className='mb-5 font-spaceGrotesk text-2xl font-bold leading-[1.33] text-black xl:text-3xl'>
              Automated Data Integration
              </div>
              <p className='text-lg leading-[1.42] xl:text-[21px]'>
              Seamlessly integrates and consolidates data from diverse sources, ensuring all stakeholders have access to unified and real-time information.
              </p>
            </li>
            {/* Promo Item */}
          </ul>
          {/* Promo List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Promo;
