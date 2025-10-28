import Hero from '../../components/sections/home_01/Hero';
import Service1 from '../../components/sections/home_01/Service1';
import Content_1 from '../../components/sections/home_01/Content_1';
import Content_4 from '../../components/sections/home_01/Content_4';
import Content_3 from '../../components/sections/home_01/Content_3';
import Content_5 from '../../components/sections/home_01/Content_5';
import Content_20 from '../../components/sections/home_01/Content_20';
import Working from '../../components/sections/home_01/Working';
import Integrates from '../../components/sections/home_01/Integrates';
import Promo from '../../components/sections/home_01/Promo';
import FunFact from '../../components/sections/home_01/FunFact';
import Pricing from '../../components/sections/home_01/Pricing';
import Slider from '../../components/sections/home_01/Slider';
import Testimonial_Section from '../../components/sections/home_01/Testimonial_Section';
import CoreValue from '../../components/sections/home_01/CoreValue';
import Feature from '../../components/sections/home_01/Feature';
import Service from '../../components/sections/home_01/Service';
import Contact from '../../components/contact/Contact';
import Pricing_Section from '../../components/sections/inner-pages/pricing/Pricing_Section';
import Service_Section from '../../components/sections/home_01/service_section/Service_Section';
import Usecases from '../../components/sections/home_01/usecases';
const Home_01 = () => {
  return (
    <main className='main-wrapper relative overflow-hidden'>
      <Hero />
      {/*<Service /*/}
      
      <Content_1 />
      {/*<Content_20 />
      <Service_Section />*/}
      <Usecases />
      

      
      {/*<Content_20 />*/}
      <Service />
      <Content_4 />
      {/*<Content_5 />
      <Service1 />
      <Content_3 />
       {/*<Promo />
       <CoreValue />
       <Feature />
      {/*<Working/>*/}
      {/*<Integrates/>*/}
      
      {/*<FunFact />
      {/*<Pricing_Section />
      {/*<Pricing />*/}
       <Contact />
     
     {/* <Slider/> */}
      {/* <Testimonial_Section /> */}

      {/* Body Background Shape 1 */}
      <div className='blue-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]'></div>

      {/* Body Background Shape 2 */}
      <div className='blue-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]'></div>
    </main>
  );
};

export default Home_01;
