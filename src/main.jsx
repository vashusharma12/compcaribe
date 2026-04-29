import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import LayoutRental from "./layouts/LayoutRental.jsx";
import LayoutShop from "./layouts/LayoutShop.jsx";

import Home from './pages/rental/Home.jsx';
import ShopIndex from './pages/shop/ShopIndex.jsx';
import ShopCategorys from './pages/shop/ShopCategorys.jsx';
import ProductDetailPage from './pages/rental/ProductDetailPage.jsx';

import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';

import Faq from './pages/Faq.jsx';
import ContactUs from './pages/ContactUs.jsx';
import DeliveryInfo from './pages/DeliveryInfo.jsx';
import WarrantyInfo from './pages/WarrantyInfo.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsCondition from './pages/TermsCondition.jsx';
import AboutUs from './pages/AboutUs.jsx';

import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";


const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <LayoutRental />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: ":category", element: <ShopCategorys /> },
      { path: "product/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> }
    ]
  },

  {
    path: "/shop-index",
    element: (
      <>
        <ScrollToTop />
        <LayoutShop />
      </>
    ),
    children: [
      { index: true, element: <ShopIndex /> },
      { path: "product/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },

      { path: "faq", element: <Faq /> },
      { path: "contact", element: <ContactUs /> },
      { path: "delivery-info", element: <DeliveryInfo /> },
      { path: "warranty-info", element: <WarrantyInfo /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-condition", element: <TermsCondition /> },
      { path: "about-us", element: <AboutUs /> },

      { path: ":category", element: <ShopCategorys /> }
    ]
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);