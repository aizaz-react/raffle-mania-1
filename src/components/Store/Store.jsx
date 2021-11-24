import React from 'react'
import './Store.css'
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
        <div className='Store-Container'>
            <div className="store-panel">
                <div className="left-store">
                    <div className="store-card">
                        <img src="/images/store/nike.svg" alt="" />
                        <h5>Nike</h5>
                        <div className="nike-star">
                            <img src="/images/store/nikestar.svg" alt="" />
                            <p>4.8/5.0</p>
                        </div>
                        <div className="loco">
                            <img src="/images/store/loco.svg" alt="" />
                            <p>St 42, New Town, CA</p>
                            <div className="message-store">
                                <img src="/images/store/message.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-store">
                    <div className="head-store-right">
                        <h3>Active Raffles</h3>
                    </div>
                    <div className="store-card-raffle">
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
        </>
    )
}

export default Store
