import { Route, Routes } from 'react-router-dom';
import Home_01 from './pages/home/Home_01';
import About from './pages/common/About';
import Home_02 from './pages/home/Home_02';
import Home_03 from './pages/home/Home_03';
import Home_04 from './pages/home/Home_04';
import Ai from './pages/common/Ai';
import Go from './pages/common/Go';
import Stoqr_ai from './pages/common/Stoqr_ai';
import Blog_details from './pages/common/Blog_details';
import Blog from './pages/common/Blog';
import Contact from './pages/common/Contact';
import Error_404 from './pages/common/Error_404';
import Faq_02 from './pages/common/faq/faq_02/Faq_02';
import Login from './pages/common/Login';
import Portfolio_details from './pages/common/Portfolio_details';
import Portfolio from './pages/common/Portfolio';
import Pricing from './pages/common/Pricing';
import Reset_password from './pages/common/Reset_password';
import Services from './pages/common/Services';
import Signup from './pages/common/Signup';
import Team_details from './pages/common/Team_details';
import Team from './pages/common/team/Team';
import useJOSAnimation from './hooks/useJOSAnimation';
import Layout from './components/layout/Layout';
import Faq_01 from './pages/common/faq/faq_01/Faq_01';
import Platform1 from './pages/common/Platform1';
import Visibility from './pages/common/Visibility';
import Terms from './pages/common/Terms';
import Privacy from './pages/common/Privacy';
import Platform from './pages/common/Platform';
import Procurement from './pages/common/Procurement';
import GoogleAnalytics from './components/GoogleAnalytics';
import './i18n';
import Service_details from './pages/common/Service_details';
function App() {
  // Init JOS Animation
  useJOSAnimation();

  return (
    <>
      <GoogleAnalytics />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home_01 />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog-details' element={<Blog_details />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='portfolio-details' element={<Portfolio_details />} />
          <Route path='faq-1' element={<Faq_01 />} />
          <Route path='faq-2' element={<Faq_02 />} />
          <Route path='team' element={<Team />} />
          <Route path='team-details' element={<Team_details />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='reset-password' element={<Reset_password />} />
          <Route path='services' element={<Services />} />
          <Route path='error-404' element={<Error_404 />} />
          <Route path='*' element={<Error_404 />} />
          <Route path='platform1' element={<Platform1 />} />
          {/* Keep existing AI page, add renamed routes for ERP/WMS */}
          <Route path='ai' element={<Ai />} />
          <Route path='erp' element={<Ai />} />
          <Route path='wms' element={<Go />} />
          <Route path='stoqr-ai' element={<Stoqr_ai />} />
          <Route path='procurement' element={<Procurement />} />
          <Route path='platform' element={<Platform />} />
          <Route path='visibility' element={<Visibility />} />
          <Route path='terms' element={<Terms />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='service-details' element={<Service_details />} />
        </Route>
        <Route path='home-2' element={<Home_02 />} />
        <Route path='home-3' element={<Home_03 />} />
        <Route path='home-4' element={<Home_04 />} />
      </Routes>
    </>
  );
}

export default App;
