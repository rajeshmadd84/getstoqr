import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Member_Social = ({ facebook, twitter, linkedin, instagram }) => {
  return (
    <ul className='mt-auto flex gap-x-[15px]'>
     
      
      <li>
        <Link
          rel='noopener noreferrer'
          to={linkedin}
          className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
        >
          <img
            src='assets/img/th-1/linkedin-icon-white.svg'
            alt='linkedin'
            width={14}
            height={14}
            className='opacity-100 group-hover:opacity-0'
          />
          <img
            src='assets/img/th-1/linkedin-icon-black.svg'
            alt='linkedin'
            width={14}
            height={14}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
          />
        </Link>
      </li>
      
    </ul>
  );
};

export default Member_Social;
