import React from 'react'
import './Store2.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import Cards from '../Wishlist/Card'
const Store = () => {
    return (
        <>
        <header>
            <Navbar />
            <Search />
        </header>
        <div className='Store-Container1'>
            <div className="store-panel1">
                <div className="left-store1">
                    <div className="store-card1">
                        <div className="niky">
                            <img src="/images/store/nike.svg" alt="" />
                        </div>
                        <div className="nike-content">
                            <h5>Nike</h5>
                            <div className="nike-star1">
                                <img src="/images/store/nikestar.svg" alt="" />
                                <p>4.8/5.0</p>
                            </div>
                            <div className="loco1">
                                <img src="/images/store/loco.svg" alt="" />
                                <p>St 42, New Town, CA</p>
                                <div className="message-store1">
                                    <img src="/images/store/message.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-store1">
                    <div className="head-store-right1">
                        <h3>Active Raffles</h3>
                    </div>
                    <div className="store-card-raffle1">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>
            {/* <div>
                <div className="left-sidebarr-icons">
                    <img src="/images/Profile/profile.svg" alt="no img" />
                    <img src="/images/Profile/card.svg" alt="no img" onClick={() => navigate("/Payment")}/>
                    <img src="/images/Profile/address.svg" alt="no img" />
                    <img src="/images/Profile/helpcenter.svg" alt="no img" />
                    <img src="/images/Profile/messages.svg" alt="no img" onClick={() => navigate("/Messages")}/>
                </div>
                <div className="left-sidebarr-content">
                    <p>Seller's Mode</p>
                    <p onClick={() => navigate("/Payment")}>Payment Methods</p>
                    <p>Address</p>
                    <p>Help Center</p>
                    <p onClick={() => navigate("/Messages")}>Messages</p>
                </div>
            </div> */}
            <Footer />
        </div>
        
        </>
    )
}

export default Store
