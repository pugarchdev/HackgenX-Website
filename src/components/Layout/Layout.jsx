import { Outlet } from "react-router-dom";

import Footer from './../FooterContacts/FooterContact'
import Header from "../Header/Header";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
