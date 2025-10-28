import { Link } from 'react-router-dom';

const Service1 = () => {
  return (
    <section id='service-section'>
      {/* Section Spacer */}
      <div className='pb-16 pt-16 xl:pb-[80px] xl:pt-[80px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-colorBlue sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
            Democratizing AI in Supply chains
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
                    src='assets/img/th-1/automation.png'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-colorBlue'>
                Intelligent Automation
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4] text-colorBlue'>
              Automate end-to-end processes, from procurement to delivery, reducing manual intervention.
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
                    src='assets/img/th-1/integration.png'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-colorBlue'>
                Seamless Integration
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4] text-colorBlue'>
              Connect data from various sources, ensuring a unified, real-time view of your entire supply chain.
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
                    src='assets/img/th-1/deeplearning.png'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33] text-colorBlue'>
                Continuous Learning
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4] text-colorBlue'>
              Our AI evolves with your business, continuously improving decision-making based on the latest data.
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

export default Service1;
