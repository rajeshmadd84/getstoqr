import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id='about-conact'>
      {/* Section Spacer */}
      <div className='bg-colorBlue pb-40 pt-20 xl:pb-[150px] xl:pt-[40px]'>
        {/* Section Container */}
        <div className='global-container'>
          
            {/* Content Left Block */}
            
            {/* Content Left Block */}
            {/* Content Right Block */}
            
              {/* Section Content Block */}
              <div className=' mb-3 md:max-w-max'>
                <h2 className='text-white mb-10'>
                Get one month free trail now
                </h2>
                <div
                className='jos flex flex-wrap justify-center gap-6 '
                data-jos_animation='fade'
              >
                <Link
                  to='/contact'
                  className='font-spaceGrotesk text-xl button rounded-[50px] border-black bg-white py-4 text-black after:bg-white hover:border-colorBlue hover:text-colorBlue border-4 border-colorBlue'
                >
                  Contact Now
                </Link>
                <Link
                  to='https://calendly.com/hello-logpilot/30min'
                  target='_blank'
                  className='font-spaceGrotesk text-xl button rounded-[50px] border-4  bg-colorLightblue py-4 text-white after:bg-colorLightblue hover:border-colorLightblue hover:text-white'
                >
                  Book Demo
                </Link>
              </div>
              </div>
              {/* Section Content Block */}
              
              
            
            {/* Content Right Block */}
         
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Contact;
