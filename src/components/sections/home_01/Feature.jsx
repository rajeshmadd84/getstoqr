const Feature = () => {
  return (
    <section id='feature-section'>
      {/* Section Spacer */}
      <div className='bg-colorBlue mt-[-50px] pb-20 pt-24 xl:pb-[130px] xl:pt-[153px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-left sm:mx-auto sm:text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h3 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[65px] text-white'>
              Future of Supply Chains
            </h3>
          </div>
          {/* Section Content Block */}
          {/* Feature List */}
          <ul className='grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3'>
            {/* Feature Item */}
            <li
              className='jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row'
              data-jos_delay='0.1'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                <img
                  src='assets/img/th-1/setup.svg'
                  alt='icon-feature-1'
                  width={49}
                  height={45}
                />
              </div>
              <div className='flex flex-1 flex-col gap-y-5'>
                <div className='font-spaceGrotesk text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5 text-white'>
                  Thinking
                </div>
                <p class='text-white italic'>
                  No need to spend time on setting up Logpilot.
                </p>
              </div>
            </li>
            {/* Feature Item */}
            {/* Feature Item */}
            <li
              className='jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row'
              data-jos_delay='0.2'
            >
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                <img
                  src='assets/img/th-1/training.svg'
                  alt='icon-feature-2'
                  width={45}
                  height={45}
                />
              </div>
              <div className='flex flex-1 flex-col gap-y-5'>
                <div className='font-spaceGrotesk text-white text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5'>
                  Learning
                </div>
                <p class='text-white italic'>
                  No need to train your staff on how to use Logpilot.
                </p>
              </div>
            </li>
            {/* Feature Item */}
            {/* Feature Item */}
            <li
              className='jos flex flex-col gap-x-[30px] gap-y-6 sm:flex-row'
              data-jos_delay='0.3'
            >
              <div className='text-white flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                <img
                  src='assets/img/th-1/switch.svg'
                  alt='icon-feature-3'
                  width={36}
                  height={45}
                />
              </div>
              <div className='flex flex-1 flex-col gap-y-5'>
                <div className='ffont-spaceGrotesk text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5 text-white'>
                  Evolving
                </div>
                <p class='text-white italic'>
                  No need to replace your existing enteprise solutions with Logpilot.
                </p>
              </div>
            </li>
            {/* Feature Item */}
          </ul>
          {/* Feature List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Feature;
