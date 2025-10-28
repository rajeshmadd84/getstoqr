const Content_2 = () => {
  return (
    <section id='content-section-2'>
      {/* Section Spacer */}
      <div className='pb-10 xl:pb-[50px] mt-20 '>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/inventory.jpeg'
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
                <h7>Data-Driven Supply Chains
                </h7>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px] font-spaceGrotesk-light'>
                <p className='mb-7 last:mb-0'>
                In today’s fast-paced world, supply chains generate millions of data points every day. But knowing how to leverage this data effectively can be challenging. That’s where Logpilot AI steps in. 
                <br></br><br></br>Our cutting-edge, proprietary AI understands every dataset your supply chain produces, transforming raw data into actionable insights that drive complete supply chain automation.
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

export default Content_2;
