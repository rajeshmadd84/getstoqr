import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import Service_Section from '../../components/sections/inner-pages/platform1/service_section/Service_Section';
import Testimonial_Section from '../../components/sections/inner-pages/platform1/testimonial/Testimonial_Section';
import Content_2 from '../../components/sections/inner-pages/platform1/Content_2';
import Content_3 from '../../components/sections/inner-pages/platform1/Content_3';
import Hero from '../../components/sections/inner-pages/platform1/Hero';
import Content_03 from '../../components/sections/inner-pages/platform1/Content_03';
import Content_04 from '../../components/sections/inner-pages/platform1/Content_04';
import Content_05 from '../../components/sections/inner-pages/platform1/Content_05';
import Contact from '../../components/contact/Contact';
import Service from '../../components/sections/inner-pages/platform1/Service';
const Platform1 = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        {/* <Breadcrumb title='' link='S' /> */}
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Service Section Start :::... */}
        {/*<Hero /> */}
        {/*...::: Content Section End :::... */}
        {/*...::: Hero Section Start :::... */}
        <Content_2 />
        {/*...::: Hero Section Start :::... */}
        {/*...::: Content Section Start :::... */}
       
        {/*...::: Service Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
       {/* <Content_3 /> */}
        {/*<Content_05 />*/}
       {/* <Service /> */}
        {/*<Service_Section />*/}
        {/*<Content_03 />*/}
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
       
        {/*...::: Content Section End :::... */}
        {/*<Content_04 />*/}
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

export default Platform1;
