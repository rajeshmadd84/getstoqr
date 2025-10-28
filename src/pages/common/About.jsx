import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Hero1 from '../../components/sections/inner-pages/about/Hero1';
import FunFact from '../../components/sections/inner-pages/about/FunFact';
import Content_02 from '../../components/sections/inner-pages/about/Content_02';
import Content_03 from '../../components/sections/inner-pages/about/Content_03';
import Content_01 from '../../components/sections/inner-pages/about/Content_01';
import Hero from '../../components/sections/inner-pages/about/Hero';
import CoreValue from '../../components/sections/inner-pages/about/CoreValue';
import Team from '../../components/sections/inner-pages/about/team/Team';
import Contact from '../../components/contact/Contact';
import Slider from '../../components/sections/inner-pages/about/Slider';

const About = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        {/*<Breadcrumb title='About Us' link='About' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: About Us Section Start :::... */}
        <Hero />
        {/*...::: About Us Section End :::... */}
        {/*...::: About Funfact Start :::... */}
        {/*<FunFact />
        {/*...::: About Funfact Start :::... */}
        {/*...::: Content Section Start :::... */}
        <Content_02 />
        <Content_01 />
        {/*...::: Content Section End :::... */}
        {/*...::: Core Value Section Start :::... 
         {/*<CoreValue />*/}
        <Slider />
        {/*...::: Core Value Section End :::... */}
        {/*...::: Team Section Start :::... */}
        <Team />
        {/*...::: Team Section End :::... */}
        {/*...::: About Contact Section Start :::... */}
        <Contact />
        {/*...::: About Contact Section End :::... */}
      </main>
    </>
  );
};

export default About;
