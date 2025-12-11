import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navber />
            <div className="min-h-[calc(100vh-5px)] pt-20  w-11/12 mx-auto">
                <Outlet />
            </div>
            <Footer /> 
      <ToastContainer />
        </div>
    );
};

export default RootLayout;