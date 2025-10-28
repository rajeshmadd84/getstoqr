import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <section id='service-section'>
      {/* Section Spacer */}
      <div className='pb-16 pt-16 xl:pb-[80px] xl:pt-[80px] bg-colorLinenRuffle'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-colorBlue sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
            Stay ahead of the unexpected!
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Service List */}
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] border-4 border-colorBlue bg-white p-[30px]'
              data-jos_delay='0.1'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[70px] w-[70px]'>
                  <img
                    src='assets/img/th-1/pa.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-colorBlue'>
                Predictive analytics
                </div>
              </div>
              <p className='mb-7 font-inter text-[18px] leading-[1.4] text-black'>
              Get the best of Logpilot with inventory optimization, demand forecasting, and supply chain risk predictions.
              </p>
             
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group bg-white border-4 border-colorBlue rounded-[10px]  p-[30px]'
              data-jos_delay='0.2'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[70px] w-[70px]'>
                  <img
                    src='assets/img/th-1/di.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-colorBlue'>
                Proactive decisions
                </div>
              </div>
              <p className='mb-7 font-inter text-[18px] leading-[1.4] text-black'>
              Logpilot will make proactive supply chain decisions based on real time data to minimize supply chain risks.
              </p>
              
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] border-4 border-colorBlue bg-white p-[30px]'
              data-jos_delay='0.3'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[70px] w-[70px]'>
                  <img
                    src='assets/img/th-1/value.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-colorBlue'>
                Data Integration
                </div>
              </div>
              <p className='mb-7 font-inter text-[18px] leading-[1.4] text-black'>
              Seamlessly integrates and consolidates data from diverse sources, ensuring all stakeholders have access to unified and real-time information.
              </p>
             
            </li>
            {/* Service Item */}
           
            {/* Service Item */}
          </ul>
          {/* Service List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Service;
