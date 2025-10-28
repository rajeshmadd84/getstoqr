import { Link } from 'react-router-dom';

const Contact_Info = () => {
  return (
    <div className='order-2 flex flex-col md:order-1'>
      {/* Section Content Block */}
      <div className='mb-8 text-left lg:mb-16 xl:mb-6'>
        <div className='mx-auto md:mx-0 md:max-w-none'>
          <h2>Get in touch with us directly</h2>
        </div>
      </div>
      {/* Section Content Block */}
      <div className='text-lg leading-[1.4] lg:text-[21px]'>
        
        <ul className='mt-12 flex flex-col gap-y-8 lg:gap-y-12'>
          <li className='font-spaceGrotesk flex flex-col gap-y-4 text-2xl font-bold'>
            Send us an email:
            <a
              href='mailto:hello@logpilot.io'
              className='text-2xl font-normal leading-loose hover:text-colorBlue lg:text-3xl'
            >
              hello@logpilot.io
            </a>
          </li>
         
          <p className='font-spaceGrotesk mb-7 last:mb-0'>
          <strong>Company Details:</strong><br></br><br></br>
          Krutrima Medho OÜ<br></br>Kotzebue 5-2,<br></br>10412, Tallinn<br></br>Estonia 
          <br></br><br></br><strong>Registry Code: 17026558</strong>
        
        </p>
          
        </ul>
      </div>
    </div>
  );
};

export default Contact_Info;
