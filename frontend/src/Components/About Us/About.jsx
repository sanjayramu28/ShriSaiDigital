import './About.css'
const About = () => {
    return (
        <>
            <div className="container-fluid mt-3" id='about'>

                {/* <h1>ghf</h1> */}
                <h1 className="d-flex justify-content-center">About Our Shop</h1>
                <div className="d-flex justify-content-center p-5" style={{ textAlign: "center" }}>
                    {/* <div> */}
                    <p>We started our journey in [Year] with a simple goal — to make high-quality networking products accessible and affordable for everyone. Over the years, we’ve helped countless customers stay connected with top-grade routers, modems, and cables. Whether you're a tech enthusiast or just looking for a reliable setup at home or work, we're here to help you find the right tools.</p>
                    {/* </div> */}
                </div>
                <section className="timeline-section">
                    <h2>Our Journey</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3>2015</h3>
                                <p>Shop Established</p>
                            </div>
                        </div>
                        <div className="timeline-item ">
                            <div className="timeline-content">
                                <h3>2017</h3>
                                <p>Moved to a Bigger Store</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3>2019</h3>
                                <p>Reached 1000+ Happy Customers</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3>2021</h3>
                                <p>Launched Online Enquiry System</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3>2025</h3>
                                <p>Celebrating 10 Years in Business!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <h1 className="d-flex justify-content-center">Our Services</h1>
                <div className=" services-img mt-5 mb-5">
                    <div className="about-items">
                        <p className='d-flex justify-content-center'>
                            <img src="https://img.freepik.com/free-photo/wan-wlan-technology-connection-computers_1232-4122.jpg?uid=R187817026&ga=GA1.1.1161449929.1704814302&semt=ais_hybrid&w=740" className='services-img' />
                        </p>
                        <p> High-quality Routers & Modems from trusted brands</p>
                    </div>
                    <div className=''>
                        <p className='d-flex justify-content-center'>
                            <img src='https://img.freepik.com/free-photo/close-up-network-cable_93675-133343.jpg?uid=R187817026&ga=GA1.1.1161449929.1704814302&semt=ais_hybrid&w=740' className='services-img' />
                        </p>
                        <p>ONT Cables and Accessories for reliable connections</p>
                    </div>
                    <div className=''>
                        <p className='d-flex justify-content-center'>
                            <img src='https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148889375.jpg?uid=R187817026&ga=GA1.1.1161449929.1704814302&semt=ais_hybrid&w=740' className='services-img' />
                        </p>
                        <p>Need help? We assist before and after your purchase.</p>
                    </div>
                    <div>
                        <p className='d-flex justify-content-center'>
                            <img src='https://img.freepik.com/free-vector/computer-trouble-shooting-concept-illustration_114360-7376.jpg?uid=R187817026&ga=GA1.1.1161449929.1704814302&semt=ais_hybrid&w=740' className='services-img' />
                        </p>
                        <p>In-store assistance for picking the right product</p>
                    </div>
                    <div>
                        <p className='d-flex justify-content-center'>
                            <img src='https://img.freepik.com/free-vector/checking-boxes-concept-illustration_114360-2465.jpg?uid=R187817026&ga=GA1.1.1161449929.1704814302&semt=ais_hybrid&w=740' className='services-img' />
                        </p>
                        After-sales support and troubleshooting
                    </div>
                </div>

                <section className="why-us-section">
                    <h2>Why Choose Us?</h2>
                    <div className="why-us-grid">
                        <div className="feature">
                            <span>✅</span>
                            <h3>Experience You Can Trust</h3>
                            <p>Over 10 years of helping customers with networking needs.</p>
                        </div>
                        <div className="feature">
                            <span>💯</span>
                            <h3>100% Genuine Products</h3>
                            <p>Only branded and quality-certified equipment.</p>
                        </div>
                        <div className="feature">
                            <span>🤝</span>
                            <h3>Personalized Support</h3>
                            <p>Get help finding the right product for your setup.</p>
                        </div>
                        <div className="feature">
                            <span>⚡</span>
                            <h3>Fast & Easy Service</h3>
                            <p>Enquire and get products the same day!</p>
                        </div>
                        <div className="feature">
                            <span>📍</span>
                            <h3>Local & Reliable</h3>
                            <p>Trusted by hundreds in the local community.</p>
                        </div>
                    </div>
                </section>
                <h1 className="d-flex justify-content-center">Our Vision & Values</h1>
                <div className="d-flex justify-content-center p-5">
                    <p style={{ textAlign: "center" }}>We believe that everyone deserves fast, stable, and secure internet — whether at home, office, or on the move. That’s why we are committed to providing networking solutions that are reliable, affordable, and future-ready.</p>
                </div>
            </div >
        </>
    )
}

export default About