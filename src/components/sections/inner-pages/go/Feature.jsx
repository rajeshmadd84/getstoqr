import { useTranslation } from 'react-i18next';

const Feature = () => {
  const { t } = useTranslation();

  return (
    <section id='feature-section'>
      {/* Section Spacer */}
      <div className='pb-20 pt-1 xl:pb-[130px] xl:pt-[53px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-left sm:mx-auto sm:text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-spaceGortesk text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[78px]'>
              {t('feature.title')}
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Feature List */}
          <ul className='grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3'>
            {/* Feature Item */}
            <li
              className='jos flex flex-row items-start gap-x-4'
              data-jos_delay='0.1'
            >
              <div className='flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white p-2 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                <img
                  src='assets/img/th-1/one.svg'
                  alt='icon-feature-1'
                  width={40}
                  height={40}
                />
              </div>
              <div className='flex flex-1 flex-col gap-y-3'>
                <div className='font-satoshitext-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5'>
                  {t('feature.steps.signup.title')}
                </div>
                <p className="font-satoshi text-base">
                  {t('feature.steps.signup.description')}
                </p>
              </div>
            </li>
            {/* Feature Item */}
            {/* Feature Item */}
            <li
              className='jos flex flex-row items-start gap-x-4'
              data-jos_delay='0.2'
            >
              <div className='flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white p-2 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                <img
                  src='assets/img/th-1/two.svg'
                  alt='icon-feature-2'
                  width={18}
                  height={18}
                />
              </div>
              <div className='flex flex-1 flex-col gap-y-3'>
                <div className='font-spaceGortesk text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5'>
                  {t('feature.steps.connect.title')}
                </div>
                <p className="font-satoshi text-base">
                  {t('feature.steps.connect.description')}
                </p>
              </div>
            </li>
            {/* Feature Item */}
            {/* Feature Item */}
            <li
              className='jos flex flex-row items-start gap-x-4'
              data-jos_delay='0.3'
            >
              <div className='flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white p-2 shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]'>
                <img
                  src='assets/img/th-1/three.svg'
                  alt='icon-feature-3'
                  width={14}
                  height={18}
                />
              </div>
              <div className='flex flex-1 flex-col gap-y-3'>
                <div className='font-spaceGortesk text-[22px] font-medium leading-6 lg:text-[28px] lg:leading-5'>
                  {t('feature.steps.start.title')}
                </div>
                <p className="font-satoshi text-base">
                  {t('feature.steps.start.description')}
                </p>
              </div>
            </li>
            {/* Feature Item */}
          </ul>
          {/* Feature List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Feature;
