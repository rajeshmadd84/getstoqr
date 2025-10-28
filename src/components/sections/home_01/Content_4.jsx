import useAccordion from '../../../hooks/useAccordion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Content_04 = () => {
  const [activeIndex, handleAccordion] = useAccordion();
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <section id='content-section-4'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px] pt-20'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='jos' data-jos_animation='fade-right'>
            {/* Section Content Block */}
            <div className='mb-6'>
              <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-colorBlue sm:text-[44px] lg:text-[56px] xl:text-[70px] text-center'>
                Get unmatched supply chain efficiency!
              </h2>
            </div>
            {/* Section Content Block */}
            
            {/* Counter Scroll */}
            <ul ref={ref} className='mt-[50px] grid grid-cols-1 gap-5 text-center sm:grid-cols-3 sm:gap-10'>
              {/* Counter Items */}
              <li className="relative">
                <h3 className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] md:text-5xl lg:text-6xl xl:text-[70px]'>
                  <span className="block text-black text-[28px] mb-5">Save upto</span>
                  {inView && (
                    <>
                      <CountUp end={100} duration={2.5} className="text-colorBlue" />
                      <span className="text-colorBlue text-[24px] ml-4">hours</span>
                    </>
                  )}
                </h3>
                <span className='mt-4 block text-black text-[21px] font-normal'>
                  per Month
                </span>
                {/* Mobile Separator */}
                <div className="absolute bottom-[-10px] left-0 w-full h-[2px] bg-gray-400 sm:hidden"></div>
                {/* Desktop Separator */}
                <div className="hidden sm:block absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-[2px] h-[80%] bg-gray-200"></div>
              </li>
              {/* Counter Items */}
              {/* Counter Items */}
              <li className="relative">
                <h3 className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] md:text-5xl lg:text-6xl xl:text-[70px]'>
                  <span className="block text-black text-[28px] mb-5">Savings upto</span>
                  {inView && <CountUp end={5000} duration={2.5} prefix="€"  className="text-colorBlue" />}
                </h3>
                <span className='mt-4 block text-black text-[21px] font-normal'>
                  Per Month
                </span>
                {/* Mobile Separator */}
                <div className="absolute bottom-[-10px] left-0 w-full h-[2px] bg-gray-400 sm:hidden"></div>
                {/* Desktop Separator */}
                <div className="hidden sm:block absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-[2px] h-[80%] bg-gray-200"></div>
              </li>
              {/* Counter Items */}
              {/* Counter Items */}
              <li className="relative">
                <h3 className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] md:text-5xl lg:text-6xl xl:text-[70px]'>
                  <span className="block text-black text-[28px] mb-5">TIme to value</span>
                  {inView && (
                    <>
                      <CountUp end={4} duration={1.5} className="text-colorBlue" />
                      <span className="text-colorBlue text-[24px] ml-4">Weeks</span>
                    </>
                  )}
                </h3>
              </li>
              {/* Counter Items */}
            </ul>
            {/* Counter Scroll */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_04;
