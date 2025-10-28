import { Link } from 'react-router-dom';
import useTabs from '../../../../hooks/useTabs';

const Pricing_Section = () => {
  const [activeTab, handleTab] = useTabs();
  return (
    <section className='pricing-section'>
      {/* Section Spacer */}
      <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[80px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-12'>
            <div className='mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]'>
              <h2>Plans and Pricing tailored for your usage</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Pricing Block */}
          <div className='container mx-auto'>
            {/* Tab buttons */}
            <div className='jos flex justify-center' data-jos_delay='0.3'>
              <div className='font-spaceGrotesk inline-flex space-x-4 rounded-[50px] border-4 border-colorBlue font-semibold'>
                <button
                  className={`font-spaceGrotesk tab-button price-button ${
                    activeTab === 0 ? 'active' : ''
                  }`}
                  onClick={() => handleTab(0)}
                  data-tab='monthly'
                >
                  Monthly
                </button>
                <button
                  className={`font-spaceGrotesk tab-button price-button ${
                    activeTab === 1 ? 'active' : ''
                  }`}
                  onClick={() => handleTab(1)}
                  data-tab='annually'
                >
                  Quarterly
                </button>
              </div>
            </div>
            {/* Pricing Block */}
            <div className='mt-12 lg:mt-16 xl:mt-20'>
              {/* Price List */}
              {activeTab === 0 && (
                <ul
                  id='monthly'
                  className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3'
                >
                  {/* Price Item */}
                  <li
                    className='font-spaceGrotesk jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-colorLightblue'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='font-spaceGrotesk flex flex-wrap font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Basic
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      2 user accounts
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-spaceGrotesk text-4xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-5xl lg:text-7xl xl:text-[60px]'>
                      €299
                      <span className='text-lg font-spaceGrotesk font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-base text-black transition-all duration-300 ease-linear group-hover:text-white'>
                    For SMBs in E-commerce, production and distribution. 
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Up to 5000 data entries.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        ERP & WMS integration
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Email communications.
                      </li>
                    </ul>
                    {/* Price Info List */}
                    
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group font-spaceGrotesk flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-colorLightblue'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      PRO
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 5 user accounts
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-spaceGrotesk text-4xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                      €499
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Suitable for medium scale e-commerce, and manufacturing companies.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Everything from Basic plan
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Up to 10000 data entries.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Unified API for ERPs.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Frieght management included.
                      </li>
                    </ul>
                    {/* Price Info List */}
                   
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex font-spaceGrotesk flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-colorLightblue'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      MAX
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 10 user accounts
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-spaceGrotesk text-4xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                      €999
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                     Suitable for medium to large E-commerce, manufacturing and distribution companies.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Everything from PRO plan
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Up to 20000 Data entries.
                      </li>
                      <li className='flex items-top gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Predictive analytics for Procurement automation.
                      </li>
                      <li className='flex items-top gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Predictive analytics for Demand management.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Dockpilot included.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Dockpilot included.
                      </li>
                    </ul>
                    {/* Price Info List */}
                    
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  
                  {/* Price Item */}
                </ul>
              )}
              {/* Price List */}

              {/* Price List */}
              {activeTab === 1 && (
                <ul
                  id='Quarterly'
                  className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3'
                >
                 {/* Price Item */}
                 <li
                    className='jos group font-spaceGrotesk flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-colorLightblue'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Basic
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      2 user accounts
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-spaceGrotesk text-4xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                      €279
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-base text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Ideal for Small businesses. 
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Up to 5000 data entries.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        ERP & WMS integration
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Email communications.
                      </li>
                    </ul>
                    {/* Price Info List */}
                   
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex font-spaceGrotesk flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-colorLightblue'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      PRO
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 5 user accounts
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-spaceGrotesk text-4xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                      €479
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Suitable for medium scale e-commerce, and manufacturing companies.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Everything from Basic plan
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Up to 10000 data entries.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Unified API for ERPs.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Frieght management included.
                      </li>
                    </ul>
                    {/* Price Info List */}
                    
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col font-spaceGrotesk rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-colorLightblue'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      MAX
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 10 user accounts
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-spaceGrotesk text-4xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                      €979
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                     Suitable for medium E-commerce, manufacturing and distribution companies.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Everything from PRO plan
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Up to 20000 Data entries.
                      </li>
                      <li className='flex items-top gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Predictive analytics for Procurement automation.
                      </li>
                      <li className='flex items-top gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Predictive analytics for Demand management.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Dockpilot included.
                      </li>
                      <li className='flex items-center gap-x-3 text-base font-light group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-white-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Dockpilot included.
                      </li>
                    </ul>
                    {/* Price Info List */}
                    
                  </li>
                  {/* Price Item */}
                 
                </ul>
              )}
              {/* Price List */}
            </div>
            {/* Pricing Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Pricing_Section;
