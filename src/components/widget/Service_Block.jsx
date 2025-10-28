import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Service_Block = ({ icon_black, icon_orange, title, text }) => {
  return (
    <li className='group bg-white p-[30px] transition-all duration-300'>
      <div className='relative mb-9 h-[100px] w-[100px]'>
        <img
          src={icon_black}
          alt='service-icon-black-1'
          width={120}
          height={120}
        />
        
      </div>
      <h3 className='font-spaceGrotesk mb-4 block text-xl leading-tight -tracking-[0.5px] xl:text-[24px] xxl:text-[24px] text-colorLightblue'>
        <Link to='/service-details'>
          {title}
        </Link>
      </h3>
      <p className='font-satoshi mb-12 duration-300 xl:text-[18px] xxl:text-[18px]'>{text}</p>
     
    </li>
  );
};

export default Service_Block;
