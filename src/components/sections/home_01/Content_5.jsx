const Content_5 = () => {
  return (
    <section id='content-section-1'>
      {/* Section Spacer */}
      <div className='pt-16 pb-8 xl:pb-[40px] mt-8 bg-white'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-14 xl:gap-16 xxl:gap-12'>
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
                
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6 text-colorBlue'>
                <h7>The End of Manual Supply Chain Tasks? 
                </h7>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[19px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Reclaim valuable time and minimize errors with Logpilot's intelligent workflow automation. We automate tedious tasks like document processing, seamless communication with partners, instant responses to supplier inquiries, swift purchase order validation, and precise stock allocation against sales. By automating these critical workflows, Logpilot reduces your manual workload by up to 50% and cuts data errors by an impressive 90%. Empower your team to focus on strategic growth while Logpilot ensures efficient, error-free operations.
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

export default Content_5;
