import { Outlet } from "react-router-dom";
import HeaderRental from "../components/HeaderRental";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <HeaderRental />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}

export default Layout;