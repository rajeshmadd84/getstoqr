import { Link } from 'react-router-dom';

const Content_02 = () => {
  return (
    <>
      {/*...::: Content Section Start_2 :::... */}
      <section id='content-section-2'>
        {/* Section Spacer */}
        <div className='pb-20 mt-10 xl:pb-[40px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-14 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-16'>
              {/* Content Left Block */}
              <div
                className='jos order-2 overflow-hidden rounded-md'
                data-jos_animation='fade-left'
              >
                <img
                  src='assets/img/th-1/scvisibility.jpeg'
                  alt='content-image-2'
                  width='526'
                  height='450'
                  className='h-auto w-full'
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div className='jos order-1' data-jos_animation='fade-right'>
                {/* Section Content Block */}
                <div className='font-spaceGortesk mt-3 mb-6 text-colorBlue'>
                  <h3>“AI on the Go” with Logpilot</h3>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.5] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Unleash the power of Logpilot AI with our ready-to-roll solution designed for SMBs. Logpilot AI effortlessly transforms your operations, instantly automating those time-draining manual tasks like document wrangling, email chains, and stakeholder coordination.
                  </p>
                  <ul className='flex flex-col gap-y-2 font-inter font-semibold text-base md:text-lg text-black lg:mt-10 lg:text-[18px]'>
                    <li className='flex items-center gap-x-3'>
                      <div className='h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/zero-training.svg'
                          alt='zero-training'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Skip the learning curve – your team needs zero training.
                    </li>
                    <li className='flex items-center gap-x-3'>
                      <div className='h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/plug-play.svg'
                          alt='plug-play'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Plug and play with your existing ERP and WMS platforms.
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/monitoring.svg'
                          alt='monitoring'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Proactive supply chain monitoring.
                    </li>
                  </ul>
                  <div className="mt-8 flex justify-left lg:mt-12">
  <Link
    to="/go" target='_blank'
    className="px-6 py-3 bg-colorLightblue text-white text-lg font-bold rounded-lg shadow-lg hover:bg-Blue focus:outline-none focus:ring-4 focus:ring-blue-300"
  >
    Learn More
  </Link>
</div>
                </div>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Content Section End :::... */}
    </>
  );
};

export default Content_02;
