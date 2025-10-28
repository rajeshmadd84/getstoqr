import { Link } from 'react-router-dom';

const Integrates = () => {
  return (
    <section id='content-intregrates-section pt-6'>
      <div className='relative z-[1] overflow-hidden bg-colorLightblue text-white'>
        {/* Section Spacer */}
        <div className='py-20 xl:py-[60px]'>
          {/* Section Spacer */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1fr)_.8fr] xl:gap-28 xxl:gap-[134px]'>
              <div className='jos'>
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[55px]'>
                  Integrate with your ERP instantly.
                  </h2>
                </div>
                {/* Section Content Block */}
                
                <ul className='my-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] leading-[1.28] tracking-[1px] lg:text-[28px]'>
                <li className='flex items-center gap-x-3 font-spaceGrotesk group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                         <img
                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Plug & Play integrations
                      </li>
                      <li className='flex items-center gap-x-3 font-spaceGrotesk group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-checkmark-filled.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Activate directly from Logpilot
                      </li>
                </ul>
                
              </div>
              <div className='flex flex-col gap-4 overflow-hidden rounded-[30px] bg-gradient-to-t from-[rgba(255,255,255,.1)] to-[rgba(0,0,0,0.5)] py-[74px]'>
                {/* Logo Horizontal Animation */}
                <div className='horizontal-slide-from-right-to-left flex w-[1161px] gap-x-6'>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/bcentral.svg'
                      alt='Dynamic business central'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/visma.svg'
                      alt='Visma ERP'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/xentral.svg'
                      alt='Xentral ERP'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/fortnox.svg'
                      alt='Fortnox'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/weclapp.svg'
                      alt='Outlook'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/katana.svg'
                      alt='Gmail'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/sage.svg'
                      alt='icon-flat-color-slack'
                    />
                  </div>
                  
                  
                </div>
                {/* Logo Horizontal Animation */}
                {/* Logo Horizontal Animation */}
                <div className='horizontal-slide-from-left-to-right flex w-[1161px] gap-x-6'>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/bcentral.svg'
                      alt='Microsoft Dynamics business central'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/xentral.svg'
                      alt='Xentral ERP'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/visma.svg'
                      alt='Visma ERP'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/fortnox.svg'
                      alt='Fortnox'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/weclapp.svg'
                      alt='Outlook'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-1/katana.svg'
                      alt='Gmail'
                    />
                  </div>
                  <div className='flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-white'>
                    <img
                      src='assets/img/th-2/sage.svg'
                      alt='icon-flat-color-slack'
                    />
                  </div>
                  
                  
              
                </div>
                {/* Logo Horizontal Animation */}
              </div>
            </div>
          </div>
          {/* Section Spacer */}
        </div>
        {/* Section Spacer */}
        <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5636C7] to-[#5028DD] blur-[250px]'></div>
      </div>
    </section>
  );
};

export default Integrates;
