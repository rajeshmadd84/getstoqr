const Content_02 = () => {
  return (
    <section id='content-section-2'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='font-spaceGrotesk mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-[950px]'>
              <h2>No more manual communications!</h2>
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
                src='assets/img/th-1/content-image-4.jpg'
                alt='content-image-4'
                width={529}
                height={500}
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
                  <h5 className='mb-[10px] font-spaceGrotesk'>Autonomous communications</h5>
                  <p className='font-spaceGrotesk-light mb-7 last:mb-0'>
                    Logpilot will communicate with suppliers proactively and gather 
                  transport plans for the goods, constantly communicate with transport companies and track shipments in 
                  real time based on the information provided.
                    
                  </p>
                </li>
                <li>
                  <h5 className='font-spaceGrotesk mb-[10px]'>
                    Freight Hub from Logpilot
                  </h5>
                  <p className='font-spaceGrotesk-light mb-7 last:mb-0'>
                    Customers can take bak control of their supply chains from suppliers with Freight Hub.
                    Freight Hub will communicate with transport companies to get quotes for the shipments, 
                    select the best transport option and monitor shipments in real time.
                  </p>
                </li>
                <li>
                  <h5 className='font-spaceGrotesk  mb-[10px]'>
                    Dockpilot for Yard management
                  </h5>
                  <p className='mb-7 last:mb-0'>
                  Efficiently plan your warehouse with Logpilot. Our platform updates warehousing systems in real time with incoming shipment data and 
                  leverages predictive analytics to optimize workforce requirements for handling goods. Streamline your operations today!
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
