import { Link } from "react-router-dom";

const Rentalcategories = () => {
    return (
        <div>
            <section className="category_block">
                <div className="container">
                    <div className="page_title"><h2>Top Rented Categories</h2></div>
                    <div className="row">
                        <div className="col-lg col-sm-12 col-md-6 mb-3">
                            <div className="category_item">
                                <Link to="/laptop" className="category_item_link">
                                    <div className="category_info">
                                        <h3 className="text-rental">Laptops</h3>
                                        <div className="price_block">
                                            <p>From</p>
                                        <div className="price">£35.00</div>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="category_image"><img src="images/laptop_img.png" alt=""/></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg col-sm-12 col-md-6 mb-3">
                            <div className="category_item">
                                <Link to="/computer" className="category_item_link">
                                    <div className="category_info">
                                        <h3 className="text-rental">Desktop PCs</h3>
                                        <div className="price_block">
                                            <p>From</p>
                                        <div className="price">£35.00</div>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                <div className="category_image"><img src="/images/computerr-3.jpg" alt=""/></div>
                                </Link>
                            </div>                         
                        </div>
                        <div className="col-lg col-sm-12 col-md-6 mb-3">
                            <div className="category_item">
                                <Link to="tablet" className="category_item_link">
                                    <div className="category_info">
                                        <h3 className="text-rental">Tablet PC's</h3>
                                        <div className="price_block">
                                            <p>From</p>
                                        <div className="price">£35.00</div>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="category_image"><img src="images/tablet_img.png" alt=""/></div>
                                </Link>
                            </div>                          
                        </div>
                        <div className="col-lg col-sm-12 col-md-6 mb-3">
                            <div className="category_item">
                                <Link to="monitor" className="category_item_link">
                                    <div className="category_info">
                                        <h3 className="text-rental">Monitors</h3>
                                        <div className="price_block">
                                            <p>From</p>
                                        <div className="price">£35.00</div>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="category_image"><img src="images/monitor_img.png" alt=""/></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg col-sm-12 col-md-6 mb-3">
                            <div className="category_item">
                                <Link to="printer" className="category_item_link">
                                    <div className="category_info">
                                        <h3 className="text-rental">Printers</h3>
                                        <div className="price_block">
                                            <p>From</p>
                                        <div className="price">£35.00</div>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="category_image"><img src="/images/printer-2.webp" alt=""/></div>
                                </Link>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Rentalcategories;