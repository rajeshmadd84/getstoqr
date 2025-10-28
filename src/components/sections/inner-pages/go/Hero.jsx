import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section id='section-hero'>
        <div
          className='relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-cover bg-center bg-no-repeat pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[40px] xxl:pt-[195px]'
          style={{ backgroundImage: "url('assets/img/th-1/hero-bg.jpg')" }}
        >
          <div className='global-container'>
            <div className='mb-14 flex flex-col items-center text-center lg:mb-2'>
              <h2 className='font-spaceGrotesk jos slide-from-bottom max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px] text-white'>
                AI on the Go!
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default Hero;
