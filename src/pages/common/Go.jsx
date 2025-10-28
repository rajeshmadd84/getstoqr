import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import Service_Section from '../../components/sections/inner-pages/go/service_section/Service_Section';
import Testimonial_Section from '../../components/sections/inner-pages/go/testimonial/Testimonial_Section';
import Content_01 from '../../components/sections/inner-pages/go/Content_01';
import Content_02 from '../../components/sections/inner-pages/go/Content_02';
import Hero from '../../components/sections/inner-pages/go/Hero';
import Content_03 from '../../components/sections/inner-pages/go/Content_03';
import Content_04 from '../../components/sections/inner-pages/go/Content_04';
import Integrates from '../../components/sections/inner-pages/go/Integrates';
import Contact from '../../components/contact/Contact';
import Pricing_Section from '../../components/sections/inner-pages/go/Pricing_Section';
import Feature from '../../components/sections/inner-pages/go/Feature';
const Go = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        {/* <Breadcrumb title='' link='S' /> */}
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Service Section Start :::... */}
        <Hero />
        {/*...::: Content Section End :::... */}
        {/*...::: Hero Section Start :::... */}
        <Content_01 />
        <Content_03 />
        
        <Integrates/>
        {/*...::: Hero Section Start :::... */}
        {/*...::: Content Section Start :::... */}
        <Service_Section />
        {/*...::: Service Section End :::... 
        <Feature />
        {/*...::: FAQ Section Start :::... */}
        
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
        {/*<Content_02 />
        {/*...::: Content Section End :::... */}
        <Content_04 />
        
        <Pricing_Section />
        {/*...::: Content Section Start :::... */}
        {/* <Faq_Section /> */}
        {/*...::: FAQ Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        {/* <Testimonial_Section /> */}
        {/*...::: Testimonial Section Start :::... */}
        
      </main>
    </>
  );
};

export default Go;
