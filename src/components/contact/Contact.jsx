import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id='about-conact'>
      {/* Section Spacer */}
      <div className='bg-colorBlue pb-40 pt-20 xl:pb-[150px] xl:pt-[40px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='flex flex-col items-center gap-14'>
            {/* Content Block */}
            <div className='text-center'>
              {/* Section Content Block */}
              <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10'>
                Ready for Autonomous Supply chains?
              </h2>
              <div
                className='jos flex flex-wrap justify-center gap-6'
                data-jos_animation='fade'
              >
               
                <Link
                  to='https://calendly.com/hello-logpilot/30min'
                  target='_blank'
                  className='font-spaceGrotesk text-l button rounded-[10px] border-4  bg-colorLightblue text-white after:bg-colorLightblue hover:border-colorLightblue hover:text-white'
                >
                  Book Demo
                </Link>
              </div>
              {/* Section Content Block */}
            </div>
            {/* Content Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Contact;