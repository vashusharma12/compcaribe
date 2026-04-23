const WhyChooseUs = () => {
    return (
        <div>
            <section className="aboutus container">
            <div className="why_chooseus">
                <div className="page_title"><h2>Why Choose Us</h2></div>
                <div className="flex_container">
                    <div className="info_card">
                        <div className="info_image"><img src="/images/extensive_product.jpg" alt=""/></div>
                        <h5>Extensive Product Range</h5>
                        <p>From small tools to heavy-duty machinery, we have everything you need.</p>
                    </div>
                    <div className="info_card">
                        <div className="info_image"><img src="/images/flexible_rental.jpg" alt=""/></div>
                        <h5>Flexible Rental Options</h5>
                        <p>Short-term and long-term plans to fit your project schedule.</p>
                    </div>
                    <div className="info_card">
                        <div className="info_image"><img src="/images/competitive_pricing.jpg" alt=""/></div>
                        <h5>Competitive Pricing</h5>
                        <p>Cost-effective solutions without compromising on quality.</p>
                    </div>
                    <div className="info_card">
                        <div className="info_image"><img src="/images/dedicated_support.jpg" alt=""/></div>
                        <h5>Dedicated Support</h5>
                        <p>Personalized service and expert guidance at every step.</p>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default WhyChooseUs;