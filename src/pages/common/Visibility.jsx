import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact from '../../components/contact/Contact';
import Content_01 from '../../components/sections/inner-pages/service_details/Content_01';
import Content_02 from '../../components/sections/inner-pages/service_details/Content_02';
import Content_03 from '../../components/sections/inner-pages/service_details/Content_03';
import FunFact from '../../components/sections/inner-pages/service_details/FunFact';
import Hero from '../../components/sections/inner-pages/service_details/Hero';
const Visibility= () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        {/* <Breadcrumb title='' link='' /> */}
        {/*...::: Breadcrumb Section End :::... */}
        <Hero />
        {/*...::: Content Section Start :::... */}
        <Content_01 />
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <Content_02 />
        {/*...::: Content Section End :::... */}
        {/*...::: Funfact Section Start :::... */}
        {/* <FunFact /> */}
        {/*...::: Funfact Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <Content_03 />
        {/*...::: Content Section End :::... */}
        {/*...::: About Contact Section Start :::... */}
        <Contact />
        {/*...::: About Contact Section End :::... */}
      </main>
    </>
  );
};

export default Visibility;
