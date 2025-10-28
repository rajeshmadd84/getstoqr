const Content_01 = () => {
  return (
    <section id='content-section-1'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px] mt-20 '>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/scvisibility.jpeg'
                alt='content-image-2'
                width={626}
                height={550}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h3>Zero Setup, Zero training</h3>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Imagine gaining actionable insights into your supply chain performance without lengthy deployments or complex integrations. With Logpilot, you can. Our intuitive setup process takes just one hour, allowing you to quickly connect your existing ERP and warehousing systems.<br></br><br></br>

But speed isn't everything – it's the results that truly matter. Logpilot works silently in the background, analyzing your data and delivering clear, concise findings directly within the tools your team already uses. Expect to see tangible improvements in efficiency, cost savings, and decision-making within 2-3 weeks of implementation.

 at warehouse. 
                  This helps to reduce stockout costs and improve customer satisfaction.
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
