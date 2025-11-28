import { Link } from 'react-router-dom';


const Content_01 = () => {
  return (
    <>
      {/*...::: Content Section Start_1 :::... */}
      <section id='content-section-1'>
        {/* Section Spacer */}
        
        <div className='pb-20 pt-20 xl:pb-[150px] bg-colorLinenRuffle'>
          {/* Section Container */}
          <div className='global-container'>
          <div className='jos mb-10 text-left sm:mx-auto sm:text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h4 className='font-spaceGrotesk text-3xl font-medium leading-[1.06] sm:text-[34px] lg:text-[46px] xl:text-[55px] text-colorBlue'>
              Automate your Supply chains!
            </h4>
          </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-10 xl:gap-12 xxl:gap-10'>
              {/* Content Left Block */}
              <div
                className='jos order-2 overflow-hidden rounded-md md:order-1'
                data-jos_animation='fade-left'
              >
                <img
                  src='assets/img/th-1/procurementautomation.jpeg'
                  alt='content-image-1'
                  width='526'
                  height='450'
                  
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div
                className='jos order-1 md:order-2'
                data-jos_animation='fade-right'
              >
                {/* Section Content Block */}
                
                {/* Section Content Block */}
                <div className='text-lg leading-[1.5] lg:text-[20px] xl:text-[20px]'>
                <p className='mb-7 font-inter last:mb-0'>
                Stoqr AI brings full-scale automation to supply chains — eliminating manual tasks and data entry through intelligent, self-operating workflows. It automates order processing, inventory forecasting, supplier communications, and document handling in real time. With AI-driven precision, Stoqr enhances accuracy, reduces operational costs, and boosts efficiency — creating a fully automated, connected, and intelligent supply chain ecosystem.
                  </p>
                 
                  
                  <div className="mt-8 flex justify-left lg:mt-12">
  <Link
    to="/Ai" target='_blank'
    className="px-6 py-3 bg-colorBlue text-white text-lg font-bold rounded-lg shadow-lg hover:bg-Blue focus:outline-none focus:ring-4 focus:ring-blue-300"
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
      {/*...::: Content Section End_1 :::... */}
    </>
  );
};

export default Content_01;
