import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact_Section from '../../components/sections/inner-pages/contact/contact_section/Contact_Section';
import Map from '../../components/sections/inner-pages/contact/Map';
import Hero from '../../components/sections/inner-pages/contact/Hero';

const Contact = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        {/*<Breadcrumb title='' link='' />*/}
        <Hero />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Contact Section Start :::... */}
        <Contact_Section />
        {/*...::: Contact Section End :::... */}
        {/*...::: Map Section Start :::... */}
        
        {/* <Map /> */}
        {/*...::: Map Section Start :::... */}
      </main>
    </>
  );
};

export default Contact;
