import { Link } from 'react-router-dom';

const Content_01 = () => {
  return (
    <section id='section-content-1'>
      {/* Section Spacer */}
      <div className='py-20 xl:py-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]'>
            <div className='jos' data-jos_animation='fade-left'>
              <div className='overflow-hidden rounded-[10px]'>
                <img
                  src='assets/img/th-1/winsc.jpg'
                  alt='content-img-2'
                  width={550}
                  height={550}
                  className='h-auto w-full'
                />
              </div>
            </div>
            <div className='jos' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h4 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-black sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                  Women in Supply Chains!
                </h4>
              </div>
              {/* Section Content Block */}
              <div>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px] font-satoshi'>
                  Women in Supply Chains is a community that aims to empower women in supply chains. Our aim to bring out the stories of women working in supply chains and their journey.
                </p>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px] font-satoshi'>
                  Our research shows that women in supply chains are often overlooked, over loaded with work and underrepresented. They are always under pressure to perform and are not given the recognition they deserve. They take their work with them to home and are not able to balance their personal and professional life.
                </p>
                <Link
                  rel='noopener noreferrer'
                  to='https://www.linkedin.com/groups/10121150/'
                  target='_blank'
                  className='button inline-block h-full rounded border-none bg-colorBlue py-3 text-base text-white'
                >
                  Join the community
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_01;
