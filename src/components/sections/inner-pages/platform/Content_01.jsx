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
                src='assets/img/th-1/inventory.jpeg'
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
                <h3>Procurement Automation</h3>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px] font-spaceGrotesk-light'>
                <p className='mb-7 last:mb-0'>
                 Let logpilot take care of your procurement requirements. Logpilot 
                  can forecast inventory requirements, delivery leadtimes, supply chain disruptions
                  and plan procurement such that you will always have a optimal inventory at warehouse. 
                  This helps to reduce stockout costs and improve customer satisfaction.
                </p>
              </div>
              <ul className='mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-1 xl:mt-14 xl:grid-cols-2'>
                <li className='flex flex-col gap-y-4 '>
                  <div className='h-[50px] w-[50px] '>
                    <img
                      src='assets/img/th-1/trendingdown.svg'
                      alt='trending-up-icon'
                      width={50}
                      height={50}
                      className='h-full w-full object-cover '
                    />
                  </div>
                  <h4>Less stock-outs</h4>
                  <p className='text-lg font-spaceGrotesk-light'>
                    Logpilot will reduce stock-outs by procuring right products in right time.
                  </p>
                </li>
                <li className='flex flex-col gap-y-4'>
                  <div className='h-[50px] w-[50px]'>
                    <img
                      src='assets/img/th-1/trendingup.svg'
                      alt='cog-icon'
                      width={50}
                      height={50}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <h4>Improved efficiency</h4>
                  <p className='text-lg font-spaceGrotesk-light'>
                    Logpilot will improve overall procurement effciency by minimizing data errors.
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

export default Content_01;
