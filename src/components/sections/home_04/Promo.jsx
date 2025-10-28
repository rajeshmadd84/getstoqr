const Promo = () => {
  return (
    <div id='promo-section'>
      <div className='relative z-[1] pt-20 md:-mt-[135px] md:pt-0'>
        {/* Section Container */}
        <div className='global-container'>
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <li
              className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
              data-jos_delay='0.1'
            >
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/setup-white.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Monitor Data
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
                Start using Logpilot just under 5 minutes.
              </p>
            </li>
            <li
              className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
              data-jos_delay='0.2'
            >
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/training.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Predict risks
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
                No need to train staff on Logpilot.
              </p>
            </li>
            <li
              className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
              data-jos_delay='0.3'
            >
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/integration.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Mitigate Risks
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
                Connect your ERP systems with ready to use integrations.
              </p>
            </li>
          </ul>
        </div>
        {/* Section Container */}
      </div>
    </div>
  );
};

export default Promo;
