import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import Service_Section from '../../components/sections/inner-pages/erp/service_section/Service_Section';
import Testimonial_Section from '../../components/sections/inner-pages/platform/testimonial/Testimonial_Section';
import Content_01 from '../../components/sections/inner-pages/erp/Content_01';
import Content_02 from '../../components/sections/inner-pages/erp/Content_02';
import Hero from '../../components/sections/inner-pages/erp/Hero';
import Content_03 from '../../components/sections/inner-pages/erp/Content_03';
import Content_04 from '../../components/sections/inner-pages/erp/Content_04';
import Content_05 from '../../components/sections/inner-pages/erp/Content_05';
import Content_06 from '../../components/sections/inner-pages/erp/Content_06';
import Contact from '../../components/contact/Contact';
const Erp = () => {
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
        <Content_05 />
        <Content_04 />
        <Content_06 />
        <Content_02 />
        {/*...::: Hero Section Start :::... */}
        {/*...::: Content Section Start :::... */}
        {/*<Service_Section />*/}
        {/*...::: Service Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
        {/*<Content_02 />
        {/*...::: Content Section End :::... */}
        
        {/*...::: Content Section Start :::... */}
        {/* <Faq_Section /> */}
        {/*...::: FAQ Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        {/* <Testimonial_Section /> */}
        {/*...::: Testimonial Section Start :::... */}
        <Contact />
        {/*...::: About Contact Section End :::... */}
      </main>
    </>
  );
};

export default Erp;
