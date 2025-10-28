import { Link } from 'react-router-dom';

const Usecases = () => {
  return (
    <section id='service-section'>
      {/* Section Spacer */}
      <div className='pb-20 pt-10 xl:pb-[130px] xl:pt-[100px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-colorBlue sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
            Get your supply chain in order!
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Service List */}
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-colorLinenRuffle p-[30px]'
              data-jos_delay='0.1'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-1/forecast.png'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Collaboration
                </div>
              </div>
              <p className='mb-7 text-[21px] font-inter leading-[1.4]'>
              Logpilot autonomously forecasts demand & inventory with real-time data from ERP systems, and data gathered from suppliers & customers.
              </p>
              <Link
                to='/ai'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-1/forward.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-1/forward.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-colorLinenRuffle p-[30px]'
              data-jos_delay='0.2'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-1/automation.png'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Automation
                </div>
              </div>
              <p className='mb-7 text-[20px] font-inter leading-[1.4]'>
                Logpilot will automate repititive manual tasks like generating purchase orders & sales orders, validating purchase orders, stock allocation, etc.
              </p>
              <Link
                to='/go'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-1/forward.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-1/forward.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-colorLinenRuffle p-[30px]'
              data-jos_delay='0.3'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-1/comms.png'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Communications
                </div>
              </div>
              <p className='mb-7 text-[20px] font-inter leading-[1.4]'>
              Get relief from never-ending email threads and focus on your core business. LogPilot will send emails to relevant suppliers and customers to gather information.
              </p>
              <Link
                to='/go'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-1/forward.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-1/forward.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
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

export default Usecases;
