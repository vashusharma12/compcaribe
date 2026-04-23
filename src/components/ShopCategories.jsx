import { Link } from "react-router-dom"

const ShopCategories = () => {
    return (
        <div>
            <div className="shop_view">
                <section className="category_block">
                    <div className="container">
                        <div className="page_title"><h2>Shop by Category</h2></div>
                        <div className="row">
                            <div className="col-lg col-md-12 mb-3">
                                <div className="category_item">
                                    <div className="category_image"><Link to="monitor-shop"><img src="images/monitor_img.png" alt="" /></Link></div>
                                    <div className="category_info">
                                        <h3>Monitors & Displays</h3>
                                        <ul>
                                            <li><Link to="monitor-shop">Monitors</Link></li>
                                            <li><Link to="monitor-shop">Gaming Monitors</Link></li>
                                            <li><Link to="monitor-shop">OLED Monitors</Link></li>
                                            <li><Link to="monitor-shop">Business Monitors</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-md-12 mb-3">
                                <div className="category_item">
                                    <div className="category_image"><Link to="desktop-shop"><img src="images/desktop_img.png" alt="" /></Link></div>
                                    <div className="category_info">
                                        <h3>Desktop</h3>
                                        <ul>
                                            <li><Link to="desktop-shop">Gaming PCs</Link></li>
                                            <li><Link to="desktop-shop">Business PCs</Link></li>
                                            <li><Link to="desktop-shop">Windows 11 PCs</Link></li>
                                        </ul>
                                    </div>
                                </div>                              
                            </div>
                            <div className="col-lg col-md-12 mb-3">
                                <div className="category_item">
                                    <div className="category_image"><Link to="laptop-shop"><img src="images/laptop_img.png" alt="" /></Link></div>
                                    <div className="category_info">
                                        <h3>Laptops</h3>
                                        <ul>
                                            <li><Link to="laptop-shop">Monitors</Link></li>
                                            <li><Link to="laptop-shop">Gaming Laptops</Link></li>
                                            <li><Link to="laptop-shop">AI-Ready Laptops</Link></li>
                                            <li><Link to="laptop-shop">Windows 11 Laptops</Link></li>
                                        </ul>
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-lg col-md-12 mb-3">
                                <div className="category_item">
                                    <div className="category_image"><Link to="servers-shop"><img src="images/servers_img.png" alt="" /></Link></div>
                                    <div className="category_info">
                                        <h3>Servers & Racks</h3>
                                        <ul>
                                            <li><Link to="servers-shop">Custom Servers</Link></li>
                                            <li><Link to="servers-shop">GPU Servers</Link></li>
                                            <li><Link to="servers-shop">Storage Servers</Link></li>
                                        </ul>
                                    </div>
                                </div>                               
                            </div>
                            <div className="col-lg col-md-12 mb-3">
                                <div className="category_item">
                                    <div className="category_image"><Link to="office-shop"><img src="images/components_img.png" alt="" /></Link></div>
                                    <div className="category_info">
                                        <h3>Office Components</h3>
                                        <ul>
                                            <li><Link to="office-shop">Graphics Cards</Link></li>
                                            <li><Link to="office-shop">Motherboards</Link></li>
                                            <li><Link to="office-shop">Processors</Link></li>
                                        </ul>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ShopCategories