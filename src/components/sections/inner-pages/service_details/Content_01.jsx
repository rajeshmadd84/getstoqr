const Content_01 = () => {
  return (
    <section id='content-section-1'>
      {/* Section Spacer */}
      <div className='pb-20 mt-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-top gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/visibility2.jpeg'
                alt='content-image-2'
                width={526}
                height={450}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h3>Supply chain Visbility</h3>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px]'>
                <p className='mb-4 last:mb-0'>
                Transform your supply chain management with Logpilot’s real-time visibility solution. 
                Our platform autonomously monitors your supply chains, gathering crucial data on goods movement from suppliers and transport companies.
                <br></br><br></br>
                Get accurate ETAs, identify delays, and anticipate disruptions before they impact your operations. With Logpilot, you’ll navigate uncertainties with confidence, ensuring your supply chain remains resilient and responsive. 
                Embrace the future of supply chain visibility today!

                </p>
              </div>
              
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
