import { Outlet } from 'react-router-dom';
import Footer_01 from '../footer/Footer_01';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div className='page-wrapper relative z-[1] bg-white'>
      {/*...::: Header Start :::... */}
      <Header
        loginCSS='button hidden rounded-[50px] border-2 border-colorBlue bg-colorBlue text-white after:bg-white hover:border-colorBlue hover:text-colorBlue lg:inline-block'
        signupCSS='button hidden rounded-[50px] border-2 border-colorLightblue bg-transperant text-colorLightblue after:bg-colorLightblue hover:border-colorBlue hover:text-white lg:inline-block'
      />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
};

export default Layout;
