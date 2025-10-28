const CoreValue = () => {
  return (
    <section id='core-value'>
      {/* Section Spacer */}
      <div className='jos bg-colorBlue lg:px-[100px] xl:py-[130px] pb-20'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='mb-10 text-center lg:mb-12 xl:mb-20'>
            <div className='mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px] pt-20'>
              <h2 className='text-white'>Core functionalities of Logpilot</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Horizontal Separator */}
          <div className='mb-6 h-[4px] w-full rounded bg-white sm:mb-0' />
          {/* Core Value list */}
          <ul className='grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap'>
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px]  sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <div className='h-[30px] w-[30px]'>
                  <img
                    src='assets/img/th-3/icon-black-work-process-2.svg'
                    alt='core-value-icon-1'
                    width={30}
                    height={30}
                  />
                </div>
                <h4 className='flex-1 text-white'>Automation</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                Automate supply chain processes with real time data.
              </p>
            </li>
            {/* Core Value Item */}
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px]   sm:pt-6 lg:pt-10'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <div className='h-[30px] w-[30px]'>
                  <img
                    src='assets/img/th-3/icon-black-work-process-3.svg'
                    alt='core-value-icon-2'
                    width={30}
                    height={30}
                  />
                </div>
                <h4 className='flex-1 text-white'>Integration</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                Seamlessly integrate with Enterprise systems.
              </p>
            </li>
            
            {/* Core Value Item */}
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorLightblue after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 '>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <div className='h-[30px] w-[30px]'>
                  <img
                    src='assets/img/th-3/icon-black-work-process-5.svg'
                    alt='core-value-icon-3'
                    width={30}
                    height={30}
                  />
                </div>
                <h4 className='flex-1 text-white'>Anticipation</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                Anticipate and mitigate risks in real time.
              </p>
            </li>
            {/* Core Value Item */}
            
          </ul>
          {/* Core Value list */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default CoreValue;
