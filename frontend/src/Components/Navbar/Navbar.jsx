import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <div className='row '>
                <div className='logo d-flex col-md-4'>
                    <img src='https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?uid=R187817026&ga=GA1.1.1161449929.1704814302&semt=ais_hybrid&w=740' />
                </div>
                <div className="d-flex justify-content-end col-md-8 align-items-center" style={{height:"100px"}}>
                    <div className="d-flex links" style={{ gap: "50px", padding: "20px" }}>
                        <a href="#Home">Home</a>
                        <a href="#About">About</a>
                        <a href="#Products">Products</a>
                        <a href="#Contact">Contact</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar