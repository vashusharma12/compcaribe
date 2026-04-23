import ShopBanner from "../../components/ShopBanner";
import ShopByBrand from "../../components/ShopByBrand";
import ShopCategories from "../../components/ShopCategories";
import ShopPopularProducts from "../../components/ShopPopularProducts";
import ShopPromotion from "../../components/ShopPromotion";


function ShopIndex() {
    return (
        <>
            <ShopBanner />
            <ShopCategories />
            <ShopPopularProducts />
            <ShopPromotion />
            <ShopByBrand />
        </>
    )
}

export default ShopIndex;