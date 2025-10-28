import { Link } from 'react-router-dom';

const Footer_03 = () => {
  return (
    <footer id='section-footer-3'>
      <div className='bg-colorLightblue text-white '>
        {/* Section Spacer */}
        <div className='py-20 xl:py-[10px]'>
          {/* Footer Top */}
          <div>
            {/* Section Container */}
            <div className='global-container mt-4'>
              {/* Footer Content */}
              <div className='grid-col-1 grid items gap-10 md:grid-cols-2'>
                {/* Section Content Block */}
                <div>
                  <h2 className='font-spaceGrotesk text-white'>Let’s talk</h2>
                  <ul className='flex flex-col gap-y-5 font-spaceGrotesk-Bold text-xl leading-tight tracking-tighter text-black lg:mt-12 lg:text-[24px]'>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Communicate with suppliers autonomously
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Generate purchase orders autonomously
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                     Making dynamic chnages to inbound logistics
                    </li>
                    
                  </ul>
                </div>
                {/* Section Content Block */}
                <div className='jos flex flex-col gap-10 md:gap-[50px]'>
                <li className='flex flex-col gap-y-4 text-2xl font-bold'>
            Follow us:
            <ul className='mt-auto flex gap-x-[15px]'>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='http://www.facebook.com'
                  className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                >
                  <img
                    src='assets/img/th-1/facebook-icon-white.svg'
                    alt='facebook'
                    width={14}
                    height={14}
                    className='opacity-100 group-hover:opacity-0'
                  />
                  <img
                    src='assets/img/th-1/facebook-icon-black.svg'
                    alt='facebook'
                    width={14}
                    height={14}
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                  />
                </Link>
              </li>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='http://www.twitter.com'
                  className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                >
                  <img
                    src='assets/img/th-1/twitter-icon-white.svg'
                    alt='twitter'
                    width={14}
                    height={14}
                    className='opacity-100 group-hover:opacity-0'
                  />
                  <img
                    src='assets/img/th-1/twitter-icon-black.svg'
                    alt='twitter'
                    width={14}
                    height={14}
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                  />
                </Link>
              </li>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='http://www.linkedin.com'
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
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='http://www.instagram.com'
                  className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                >
                  <img
                    src='assets/img/th-1/instagram-icon-white.svg'
                    alt='instagram'
                    width={14}
                    height={14}
                    className='opacity-100 group-hover:opacity-0'
                  />
                  <img
                    src='assets/img/th-1/instagram-icon-black.svg'
                    alt='instagram'
                    width={14}
                    height={14}
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                  />
                </Link>
              </li>
            </ul>
          </li>
                </div>
              </div>
              {/* Footer Content */}
              {/* Footer Contact */}
              <div className='mt-11 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
              
              </div>
              
              {/* Footer Contact */}
            </div>
            {/* Section Container */}
          </div>
          {/* Footer Top */}
          {/* Footer Bottom */}
        <div className='py-9 text-center'>
          <p>
            © Copyright {new Date().getFullYear()}, Krutrima Medho OÜ
          </p>
        </div>
        {/* Footer Bottom */}
        </div>
        {/* Section Spacer */}
      </div>
    </footer>
  );
};

export default Footer_03;
