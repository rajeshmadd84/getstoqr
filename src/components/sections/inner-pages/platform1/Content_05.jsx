const Content_01 = () => {
  return (
    <section id='content-section-1'>
      {/* Section Spacer */}
      <div className='pb-8 xl:pb-[40px] mt-8 '>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/sc_decision.jpg'
                alt='content-image-2'
                width={450}
                height={400}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6 text-colorBlue'>
                <h7>Autonomous Decision-Making 
                </h7>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px] font-spaceGrotesk-light'>
                <p className='mb-7 last:mb-0'>
                Why react when you can anticipate? Logpilot doesn’t just predict issues; it autonomously makes decisions to ensure your supply chain remains optimized. Whether it’s adjusting inventory levels, rerouting shipments, or reallocating resources, Logpilot ensures seamless, real-time adaptability.
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
