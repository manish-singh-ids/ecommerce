import { BrowserRouter } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routers from "../../router/Router";


const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
