import { Outlet } from "react-router-dom";
import HeaderShop from "../components/HeaderShop";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <HeaderShop />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}

export default Layout;