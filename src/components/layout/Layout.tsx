import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LogoSprite from '../common/LogoSprite';

export default function Layout() {
  return (
    <>
      <LogoSprite />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
