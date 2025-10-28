import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget border border-gray-200 rounded-lg p-4 shadow-sm" 
      data-url="https://calendly.com/hello-logpilot/30min"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

const Contact_Section = () => {
  return (
    <section className="contact-section">
      <div className="pb-20 pt-20 xl:pb-[150px]">
        <div className="global-container">
          <div className="mb-8 text-left lg:mb-20 xl:mb-10">
            <div className="mx-auto md:mx-0 md:max-w-none">
              <h2>Get in touch with us</h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-12">
            {/* Left Side: Contact Persons and Addresses */}
            <div className="lg:w-1/2">
              {/* Addresses Section */}
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* HQ Address */}
                  <div className="flex flex-col gap-y-6">
                    <h4 className="font-spaceGrotesk text-colorBlue text-[28px] font-semibold capitalize text-black">
                      HQ - London
                    </h4>
                    <ul className="font-spaceGrotesk-light flex flex-col gap-y-[10px]">
                      <li className="bg-colorLinenRuffle p-6 rounded-2xl">
                        <b className="text-xl">Logpilot Limited</b>
                        <br />
                        51 High Street,
                        <br />
                        TW13 4AB, London
                        <br />
                        United Kingdom
                      </li>
                     
                    </ul>
                  </div>

                  {/* EU Office */}
                  <div className="flex flex-col gap-y-6">
                    <h4 className="font-spaceGrotesk text-colorBlue text-[28px] font-semibold capitalize text-black">
                      Germany
                    </h4>
                    <ul className="font-spaceGrotesk-light flex flex-col gap-y-[10px]">
                      <li className="bg-colorLinenRuffle p-6 rounded-2xl">
                        <b>C/O Digital Hub Logistics</b>
                        <br />
                        Am Sandtorkai 32,
                        <br />
                        20457 Hamburg
                        <br />
                        Germany
                      </li>
                    </ul>
                  </div>

                  {/* Sweden Office */}
                  <div className="flex flex-col gap-y-6">
                    <h4 className="font-spaceGrotesk text-colorBlue text-[28px] font-semibold capitalize text-black">
                      Sweden
                    </h4>
                    <ul className="font-spaceGrotesk-light flex flex-col gap-y-[10px]">
                      <li className="bg-colorLinenRuffle p-6 rounded-2xl">
                      <b>Hoveberg AB</b>
                      <br />
                        Vendevägen 89,
                        <br />
                        182 32 Danderyd
                        <br />
                        Sweden
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Calendly Embed */}
            <div className="lg:w-1/2">
              <h3 className="font-spaceGrotesk text-2xl font-bold mb-6">Schedule a Meeting</h3>
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Section;