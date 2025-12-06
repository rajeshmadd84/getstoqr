const Content_01 = () => {
  return (
    <section id='content-section-1'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px] mt-20 '>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/inbound.png'
                alt='content-image-2'
                width={626}
                height={550}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h3 className='font-spaceGrotesk text-2xl font-medium leading-[1.06] sm:text-[34px] lg:text-[46px] xl:text-[50px]' style={{ color: '#1D97FF' }}>Inbound Management</h3>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[20px] font-inter'>
                <p className='mb-7 last:mb-0'>
                Stoqr streamlines inbound receiving by guiding warehouse teams through a structured, error-free intake process. 
                Purchase orders are validated instantly, quantities and item details are checked in real time, and every received SKU is recorded with batch, lot, and bin information for complete traceability. Smart putaway suggestions help store goods efficiently, while discrepancies such as shortages or mismatches are flagged automatically. With live updates to the stock ledger and ERP, Stoqr ensures accurate, immediate visibility of all incoming inventory.
                </p>
              </div>
              <ul className='flex flex-col gap-y-2 font-semibold text-base md:text-xl text-black lg:mt-12 lg:text-[18px]'>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/tick.svg'
                          alt='tick'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Instant PO validation to ensure accurate and compliant receiving.
                    </li>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/tick.svg'
                          alt='tick'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Error-free item capture with barcode scans and real-time checks.
                    </li>
                    <li className='font-inter flex items-start gap-x-3'>
                      <div className='mt-[1.5px] h-[24px] w-[24px]'>
                        <img
                          src='assets/img/th-1/tick.svg'
                          alt='tick'
                          width='24'
                          height='24'
                          className='h-full w-full'
                        />
                      </div>
                      Faster receiving cycles with guided, streamlined workflows.
                    </li>
                    
                  </ul>
            </div>
            {/* Content Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_01;
