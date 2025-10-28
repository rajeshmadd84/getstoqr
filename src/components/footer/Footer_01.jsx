import { Link } from "react-router-dom";

const Footer_01 = () => {
  return (
    <footer className="relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px] pt-100px">
      <div className="global-container">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        {/* Footer Center */}
        <div className="grid grid-cols-1 gap-10 py-[60px] md:grid-cols-4 xl:gap-20 xl:py-[50px]">
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-y-6 font-inter">
            <Link to="/" className="inline-block">
              <img
                src="assets/img/th-1/Logpilot.svg"
                alt="logo"
                width={136}
                height={64}
              />
            </Link>
            <p>
              Our mission is to democratize AI in supply chains. Bridge the gap
              between Enterprises and SMBs in adopting AI and making supply
              chains efficient. 
              
            </p>
          </div>

          {/* Column 2: Address and Email */}
          <div className="flex flex-col gap-y-6">
            <h4 className="font-spaceGrotesk text-[21px] font-semibold capitalize text-black">
              HQ - London
            </h4>
            <ul className="font-spaceGrotesk-light flex flex-col gap-y-[10px]">
              <li>
                <b>Logpilot Limited</b>
                <br />
                51 Millennium House
                <br />
                TW13 4AB, London
                <br />
                United Kingdom
              </li>
              <li>
                <a
                  href="mailto:hello@logpilot.io"
                  className="transition-all duration-300 ease-linear hover:text-colorlightblue text-colorBlue"
                >
                  hello@logpilot.io
                </a>
              </li>
              <li>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  to="https://www.linkedin.com/company/logpilot"
                  className="group relative flex h-[60px] w-[60px] items-center justify-center rounded-[50%]"
                >
                  <img
                    src="assets/img/th-1/linkedin_blue.svg"
                    alt="linkedin"
                    width={54}
                    height={54}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-6">
            <h4 className="font-spaceGrotesk text-[21px] font-semibold capitalize text-black">
              Germany
            </h4>
            <ul className="font-spaceGrotesk-light flex flex-col gap-y-[10px]">
              <li>
                <b>C/O Digital Hub Logistics</b>
                <br />
                Am Sandtorkai 32
                <br />
                20457 Hamburg
                <br />
                Germany
              </li>
            </ul>
          </div>

          {/* Sweden Office */}
          <div className="flex flex-col gap-y-6">
            <h4 className="font-spaceGrotesk text-[21px] font-semibold capitalize text-black">
              Sweden 
            </h4>
            <ul className="font-spaceGrotesk-light flex flex-col gap-y-[10px]">
              <li>
              <b>Hoveberg AB</b>
              <br />
                Vendevägen 89
                <br />
                182 32 Danderyd
                <br />
                Sweden
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Center */}
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        {/* Footer Bottom */}
        <div className="py-9 text-center">
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            <strong> Logpilot</strong>
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
    </footer>
  );
};

export default Footer_01;
