import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div className="home-container" id='Home'>
            <h2 className='d-flex justify-content-center'>  "Reliable Networking Solutions" or "Your One-Stop Shop for Routers, Modems & Cables.</h2>
            <p className='d-flex justify-content-center'>Wired for Speed, Built for Trust.</p>
            <div className=' d-flex justify-content-center' style={{ position: "relative" }}>
                <button className='btn fs-3'>Explore More
                    <div className='d-flex justify-content-center angledown' >
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </button>
            </div>
            <div className="wave">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height:"100px",width:"100%"}}>
                    <path d="M0.00,49.98 C150.00,150.00 349.75,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{stroke:"none",fill:"white"}}></path>
                </svg>
            </div>

            {/* <p >Home</p> */}
        </div>
    )
}

export default Home;