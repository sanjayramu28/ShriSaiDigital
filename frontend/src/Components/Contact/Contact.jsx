const Contact = () => {
    return (
        <div className="container-fluid mt-5" id="Contact">
            <p>&nbsp;</p>
            <h1 className="text-center mt-3">Contact Us</h1>
            <p className="text-center text-muted">We’d love to hear from you! Reach us using the details below or send us a message.</p>
            <div className="row mt-5 mb-3">
                <div className="col-md-4 text-center">
                    <h5>📍 Address</h5>
                    <p>Shri Sai Digital, Main Street, Your City, PIN - 000000</p>
                </div>
                <div className="col-md-4 text-center">
                    <h5>Phone</h5>
                    <p>+91 9087661022</p>
                </div>
                <div className="col-md-4 text-center">
                    <h5>Email</h5>
                    <p>Shrisaidigital@gmail.com</p>
                </div>
            </div>
            <div className="text-center mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.305403947855!2d78.13478637505524!3d11.672754688535846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1007c722009%3A0xd02dc08c2c90e44b!2sShree%20sai%20digital!5e0!3m2!1sen!2sin!4v1744510319667!5m2!1sen!2sin"
                 width="100%" height="300" style={{border:"0px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default Contact