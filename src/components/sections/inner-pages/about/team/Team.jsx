import { Link } from 'react-router-dom';
import data from './data.json';
import Member from '../../../../../components/widget/team/Member';

const Team = () => {
  return (
    <section id='team-section'>
      {/* Section Spacer */}
      <div className='py-20 xl:py-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 flex flex-wrap items-center justify-between lg:mb-12 xl:mb-20'>
            <div className='max-w-sm lg:max-w-3xl xl:max-w-[745px]'>
              <h2>People behind Logpilot</h2>
            </div>
            <Link
              to='/team'
              className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
            >
              Join our team
            </Link>
          </div>
          {/* Section Content Block */}
          {/* Team Member List */}
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Team Member Item */}
            {data.map((member, index) => (
              <Member key={index} {...member} />
            ))}
            {/* Team Member Item */}
            <li
                  className='jos min-h-[400px] rounded-[20px] bg-colorLinenRuffle p-[20px]'
                  data-jos_animation='flip'
                  data-jos_delay='0.9'
                >
                  <div className='flex h-full flex-col items-center justify-center text-center'>
                    <div className='text-3xl font-semibold leading-[1.2] tracking-[-1px] text-black xl:text-[40px]'>
                      You want to join our amazing team
                    </div>
                    <p className='mb-6 mt-4 text-lg leading-[1.4] xl:mb-[30px] xl:text-[21px]'>
                      Specify the job you are applying for and introduce
                      yourself
                    </p>
                    <Link
                      to='/team'
                      className='button block w-full rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                    >
                      Join our team
                    </Link>
                  </div>
                </li>
          </ul>
          {/* Team Member List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Team;
