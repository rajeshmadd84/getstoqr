const Content_3 = () => {
  return (
    <section id='content-section-2 '>
      {/* Section Spacer */}
      <div className='pb-20 mt-30 xl:pb-[50px]  bg-colorLinenRuffle'>
        {/* Section Container */}
        <div className='global-container pt-10'>
          {/* Section Content Block */}
          
          {/* Section Content Block */}
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md md:order-1'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/risk.jpeg'
                alt='content-image-4'
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
                <h7>Predict Risks Before They Happen
                </h7>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px] font-spaceGrotesk-light'>
                <p className='mb-7 last:mb-0'>
                Logpilot’s AI continuously monitors your supply chain in real time, identifying potential risks before they escalate. From demand fluctuations to transportation delays, our predictive models analyze patterns and offer proactive solutions to mitigate disruptions—keeping your operations resilient and efficient.
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

export default Content_3;
