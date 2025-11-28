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
            One Stop Shop for your operations!
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
                <div className='flex-1 font-spaceGrotesk text-2xl leading-[1.33] min-h-[64px]'>
                Enterprise Resource Planning (ERP)
                </div>
              </div>
              <p className='mb-7 text-[21px] font-inter leading-[1.4]'>
              Stoqr ERP gives you complete control over your operations and inventory through intelligent, automated workflows. From Procurement, Sales to invoicing, Stoqr streamlines every step of your business process, reducing manual effort and improving visibility across teams.
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
                <div className='flex-1 font-spaceGrotesk text-2xl leading-[1.33] min-h-[64px]'>
                  Warehouse Management System (WMS)
                </div>
              </div>
              <p className='mb-7 text-[20px] font-inter leading-[1.4]'>
              Stoqr WMS automates and optimizes every warehouse operation — from inbound receiving to outbound shipments. Using AI-driven insights and barcode-based tracking, it ensures faster picking, accurate order fulfillment, and efficient space utilization.
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
                <div className='flex-1 font-spaceGrotesk text-2xl leading-[1.33] min-h-[64px]'>
                  Invoicing & Payouts
                </div>
              </div>
              <p className='mb-7 text-[20px] font-inter leading-[1.4]'>
              Stoqr AI automates the entire invoicing and payment cycle — eliminating delays and manual errors. It generates and sends GST-compliant invoices instantly, tracks payments in real time, and integrates seamlessly with accounting tools like Tally and QuickBooks.
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
