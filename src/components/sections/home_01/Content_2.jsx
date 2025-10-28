const Content_2 = () => {
  return (
    <section id='content-section-2'>
      {/* Section Spacer */}
      <div className='pb-10 xl:pb-[50px] mt-20 pt-8'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-14 xl:gap-16 xxl:gap-12'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/data.jpg'
                alt='content-image-2'
                className='w-full h-auto max-w-[550px] mx-auto'
                style={{ maxHeight: '450px' }}
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6 text-colorBlue'>
                <h7>From Data Overload to Data Mastery
                </h7>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.5] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Drowning in supply chain data? Logpilot AI transforms this into a powerful advantage. As your supply chain's intelligent brain, it autonomously sifts vast datasets – inventory, suppliers, logistics, demand – pinpointing critical signals. Understanding data intricacies, Logpilot delivers clear, actionable insights. Move beyond reactive analysis to proactive, data-driven strategies optimizing all operations.


               
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
