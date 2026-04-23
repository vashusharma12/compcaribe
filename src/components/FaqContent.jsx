const FaqContent = () => {
    return (
        <div>
            <section className="faqs container mb-3">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. What types of equipment do you offer for rent?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We offer a wide range of equipment, including construction tools, office systems, electronics, power tools, event gear, and more. Our inventory is regularly updated to ensure you always have access to high-quality, well-maintained products.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. Can I purchase equipment instead of renting?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes. In addition to rentals, we also provide sales of both new and pre-owned equipment. You can choose the option that best fits your needs and budget.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3. How do I rent equipment?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                You can browse our catalog online, select the items you need, and submit a rental request. Alternatively, you can contact our customer support team for assistance with bookings and availability.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingfour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                4. What documents are required for renting equipment?
                            </button>
                        </h2>
                        <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                For individuals, a valid government-issued ID and address proof are required. For businesses, company registration and authorization documents may be needed.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingfive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                5. How long can I rent the equipment?
                            </button>
                        </h2>
                        <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We offer flexible rental plans daily, weekly, or monthly depending on your project duration and requirements.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingsix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                6. How can I track my order or rental delivery?
                            </button>
                        </h2>
                        <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                You can track your order status through the “My Orders” section on our website. Simply log in with your registered email or order ID to view real-time updates.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingseven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                7. What happens if the equipment gets damaged?
                            </button>
                        </h2>
                        <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                If equipment is damaged during use, please inform us immediately. Depending on the damage assessment, repair or replacement charges may apply as per our rental policy.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingeight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                8. Do you provide delivery and pickup services?
                            </button>
                        </h2>
                        <div id="collapseeight" className="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes, we offer convenient delivery and pickup options to your specified location. Charges may vary depending on your location and order size.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingnine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                9. What payment methods do you accept?
                            </button>
                        </h2>
                        <div id="collapsenine" className="accordion-collapse collapse" aria-labelledby="headingnine" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We accept major credit/debit cards, bank transfers, and digital payment options for both rentals and purchases.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingten">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                                10. How can I contact customer support?
                            </button>
                        </h2>
                        <div id="collapseten" className="accordion-collapse collapse" aria-labelledby="headingten" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                You can reach us via email at <strong>support@compcaribe.com</strong> or call our helpline at <strong>+1 849 517 2592</strong>. Our support team is available., <strong>Monday–Saturday, 9 AM – 7 PM</strong> to assist you.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default FaqContent;