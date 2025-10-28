import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import Service_Section from '../../components/sections/inner-pages/platform/service_section/Service_Section';
import Testimonial_Section from '../../components/sections/inner-pages/platform/testimonial/Testimonial_Section';
import Content_01 from '../../components/sections/inner-pages/platform/Content_01';
import Content_02 from '../../components/sections/inner-pages/platform/Content_02';
import Hero from '../../components/sections/inner-pages/platform/Hero';
import Content_03 from '../../components/sections/inner-pages/platform/Content_03';
import Content_04 from '../../components/sections/inner-pages/platform/Content_04';
import Contact from '../../components/contact/Contact';
const Platform = () => {
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
        {/*...::: Hero Section Start :::... */}
        {/*...::: Content Section Start :::... */}
        <Service_Section />
        {/*...::: Service Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <Content_03 />
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <Content_02 />
        {/*...::: Content Section End :::... */}
        <Content_04 />
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

export default Platform;
