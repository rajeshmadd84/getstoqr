import { Link } from 'react-router-dom';
import useTabs from '../../../hooks/useTabs';

const Pricing = () => {
  const [activeTab, handleTab] = useTabs();
  return (
    <>
      {/*...::: Pricing Section Start :::... */}
      <section className='pricing-section'>
        {/* Section Spacer */}
        <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='jos mb-10 text-center lg:mb-12'>
              <div className='font-spaceGrotesk mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
                <h2>Start using Logpilot instantly</h2>
              </div>
            </div>
            {/* Section Content Block */}
            {/* Pricing Block */}
            <div className='container mx-auto'>
              {/* Tab buttons */}
              <div
                className='jos flex justify-center'
                
              >
                <div className='inline-flex space-x-4 rounded-[50px] border-2 border-colorBlue font-semibold'>
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
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-colorBlue'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        Basic
                      </h3>
                     

                      <div className='my-5 h-[3px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-spaceGrotesk text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                        €299
                        <span className='text-lg font-semibold'>
                          /Per month
                        </span>
                      </h4>
                      <p className='mb-10 font-spaceGrotesk font-light text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        For SMBs in E-commerce, production and distribution.
                      </p>
                      <Link
                        to='/pricing'
                        className='font-spaceGrotesk button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorLightblue hover:border-white hover:text-black group-hover:border-white group-hover:text-white'
                      >
                        Know more
                      </Link>
                      
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-colorBlue'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        Pro
                      </h3>
                      

                      <div className='my-5 h-[3px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-spaceGrotesk text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                        €499
                        <span className='text-lg font-semibold'>
                          /Per month
                        </span>
                      </h4>
                      <p className='font-spaceGrotesk font-light mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Suitable for medium scale e-commerce, and manufacturing companies.
                      </p>
                      <Link
                        to='/pricing'
                        className='font-spaceGrotesk button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorLightblue hover:border-white hover:text-white group-hover:border-white group-hover:text-white'
                      >
                        Know more
                      </Link>
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-colorBlue'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        Max
                      </h3>
                     

                      <div className='my-5 h-[3px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-spaceGrotesk text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                        €999
                        <span className='text-lg font-semibold'>
                          /Per month
                        </span>
                      </h4>
                      <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Suitable for medium to large E-commerce, manufacturing and distribution companies.
                      </p>
                      <Link
                        to='/pricing'
                        className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorLightblue hover:border-white hover:text-black group-hover:border-white group-hover:text-white'
                      >
                        Know more
                      </Link>
                    </li>
                    {/* Price Item */}
                  </ul>
                )}
                {/* Price List */}
                {/* Price List */}
                {activeTab === 1 && (
                  <ul
                    id='annually'
                    className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3'
                  >
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-colorBlue'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        Basic
                      </h3>
                     

                      <div className='my-5 h-[3px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-spaceGrotesk text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-5xl lg:text-7xl xl:text-[60px]'>
                        €279
                        <span className='text-lg font-semibold'>
                          /Per month
                        </span>
                      </h4>
                      <p className='mb-10 font-spaceGrotesk font-light text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        For SMBs in E-commerce, production and distribution.
                      </p>
                      
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-colorBlue'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        Pro
                      </h3>
                      

                      <div className='my-5 h-[3px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-spaceGrotesk text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                        €479
                        <span className='text-lg font-semibold'>
                          /Per month
                        </span>
                      </h4>
                      <p className='font-spaceGrotesk font-light mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Suitable for medium scale e-commerce, and manufacturing companies.
                      </p>
                     
                    </li>
                    {/* Price Item */}
                    {/* Price Item */}
                    <li
                      className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-colorBlue'
                      data-jos_animation='flip'
                      data-jos_delay='0'
                    >
                      <h3 className='font-spaceGrotesk text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                        Max
                      </h3>
                     

                      <div className='my-5 h-[3px] w-full bg-[#DBD6CF]'></div>
                      <h4 className='mb-4 font-spaceGrotesk text-4xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[60px]'>
                        €979
                        <span className='text-lg font-semibold'>
                          /Per month
                        </span>
                      </h4>
                      <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Suitable for medium to large E-commerce, manufacturing and distribution companies.
                      </p>
                      
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
      {/*...::: Pricing Section End :::... */}
    </>
  );
};

export default Pricing;
