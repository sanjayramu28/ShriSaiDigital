import './Reviews.css'

const Reviews = () => {
    return (
        <>
            <h1 className="d-flex justify-content-center">User Reviews</h1>
            <div id="carouselExampleSlidesOnly" className="carousel slide review-carousel w-100" data-bs-ride="carousel" data-bs-interval="3000" >
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <div className="d-flex justify-content-center" style={{ textWrap: "wrap" }}>
                            <div style={{ maxWidth: "100%" }}>
                                <p className="d-flex justify-content-center fs-4">Sankar</p>
                                <p className="fs-5 text-center">Absolutely love the router I purchased! It has incredibly fast speed and coverage. I highly recommend it for anyone looking for a reliable internet connection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <p className="d-flex justify-content-center fs-4">Rajesh</p>
                        <div className="d-flex justify-content-center" style={{ textWrap: "wrap" }}>
                            <div style={{ maxWidth: "1000px" }}>
                                <p className="text-center fs-5">Good modem for the price. It works well for most devices, but I had some issues connecting my smart TV. Still, it's a great product overall</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <p className="d-flex justify-content-center fs-4">Murugan</p>
                        <div className="d-flex justify-content-center" style={{ textWrap: "wrap" }}>
                            <div style={{ maxWidth: "1000px" }}>
                                <p className="fs-5 text-center">Purchased a modem from Shri Sai Digital, and I'm impressed with the speed. The team was helpful in answering my questions before the purchase. Great service!</p>
                            </div>
                        </div>
                        {/* <img src="..." class="d-block w-100" alt="..." /> */}
                    </div>
                </div>
            </div>
            {/* <p>Reviews</p> */}
        </>
    )
}

export default Reviews