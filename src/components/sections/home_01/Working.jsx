import { Link } from 'react-router-dom';

const Working = () => {
  return (
    <section id='section-working-process'>
      <div className='px-5 sm:px-[50px] pb-10'>
        <div className='relative z-[1] mx-auto max-w-full rounded-[20px] bg-colorBlue'>
          {/* Section Spacer */}
          <div className='py-16 sm:px-10 md:px-20 lg:py-20 xl:px-[60px] xl:py-[60px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[1000px]'>
                <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[80px]'>
                  Making supply chains efficient!
                </h2>
              </div>
              {/* Section Content Block */}
              {/* Work Process List */}
              <div className='grid grid-flow-dense gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                {/* Work Process Item */}
                <div className='font-spaceGrotesk-light order-1 col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-colorLightblue'>
                  <div className='h-10 w-auto xxl:h-[60px]'>
                    <img
                      src='assets/img/th-3/icon-black-work-process-1.svg'
                      alt='working-process-icon'
                      width={62}
                      height={60}
                      className='h-full'
                    />
                  </div>
                  <div className='font-spaceGrotesk text-2xl font-bold leading-[1.33] lg:text-3xl'>
                    Data Analysis
                  </div>
                  <p className='text-xl leading-[1.33] lg:text-2xl'>
                    Logpilot can analyse loads of supply chain data making decision making easy.
                  </p>
                  
                </div>
                {/* Work Process Item */}
                {/* Work Process Item */}
                <div className='font-spaceGrotesk-light order-2 col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-colorLightblue'>
                  <div className='h-10 w-auto xxl:h-[60px]'>
                    <img
                      src='assets/img/th-3/icon-black-work-process-2.svg'
                      alt='working-process-icon'
                      width={60}
                      height={60}
                      className='h-full'
                    />
                  </div>
                  <div className='font-spaceGrotesk text-2xl font-bold leading-[1.33] lg:text-3xl'>
                    Automation
                  </div>
                  <p className='text-xl leading-[1.33] lg:text-2xl'>
                    Logpilot can automate document processsing, communications and transport management.
                  </p>
                  
                </div>
                {/* Work Process Item */}
                {/* Work Process Item */}
                <div className='font-spaceGrotesk-light order-3 col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-colorLightblue'>
                  <div className='h-10 w-auto xxl:h-[60px]'>
                    <img
                      src='assets/img/th-3/icon-black-work-process-3.svg'
                      alt='working-process-icon'
                      width={60}
                      height={60}
                      className='h-full'
                    />
                  </div>
                  <div className='font-spaceGrotesk text-2xl font-bold leading-[1.33] lg:text-3xl'>
                    Integration
                  </div>
                  <p className='text-xl leading-[1.33] lg:text-2xl'>
                    Logpilot can be integrated with ERP and Warehousing solutions just under 5 minutes.
                  </p>
                  
                </div>
                {/* Work Process Item */}
                <div className='font-spaceGrotesk-light order-1 col-span-full grid gap-6 lg:grid-cols-2 xl:order-2 xl:grid-cols-2'>
                  {/* Work Process Item */}
                  <div className='col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-colorLightblue'>
                    <div className='h-10 w-auto xxl:h-[60px]'>
                      <img
                        src='assets/img/th-3/icon-black-work-process-5.svg'
                        alt='working-process-icon'
                        width={65}
                        height={60}
                        className='h-full'
                      />
                    </div>
                    <div className='font-spaceGrotesk text-2xl font-bold leading-[1.33] lg:text-3xl'>
                    Risk Management
                    </div>
                    <p className='text-xl leading-[1.33] lg:text-2xl'>
                      Logpilot will assess &amp; mitigate risks more accurately by
                      analyzing data in real time &amp; reduce supply chain risks.
                      
                    </p>
                   
                  </div>
                  {/* Work Process Item */}
                  {/* Work Process Item */}
                  <div className='font-spaceGrotesk-light col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-colorLightblue'>
                    <div className='h-10 w-auto xxl:h-[60px]'>
                      <img
                        src='assets/img/th-3/icon-black-work-process-4.svg'
                        alt='working-process-icon'
                        width={40}
                        height={60}
                        className='h-full'
                      />
                    </div>
                    <div className='font-spaceGrotesk text-2xl font-bold leading-[1.33] lg:text-3xl'>
                    Cost Savings
                    </div>
                    <p className='text-xl leading-[1.33] lg:text-2xl'>
                    Logpilot can provide upto €5000 per month to SMBs in cost savings. 
                    </p>
                    
                  </div>
                  {/* Work Process Item */}
                </div>
              </div>
              {/* Work Process List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
          {/* Vertical Line */}
          <div className='absolute left-0 top-0 -z-[1] flex h-full w-full justify-evenly'>
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
          </div>
          {/* Vertical Line */}
        </div>
      </div>
    </section>
  );
};

export default Working;
