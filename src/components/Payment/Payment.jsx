import React from 'react'
import './Payment.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import { useNavigate } from "react-router-dom";

const Userprofile = () => {
    const history = useNavigate();
    return (
        <>
        <header>
            <Navbar />
            <Search />
        </header>
        <div className='container'>
            <div className='profile-container'>
                <div className="header-profile">
                    <h1 className='header-profile'>Profile</h1>
                </div>
                <div className="profile-sidebars">
                    <div className="left-sidebar">
                        <div className="left-sidebar-1">
                            <div className="left-up">
                                <div className="left-sidebar-icons">
                                    <img src="/images/Profile/profile.svg" alt="no img" />
                                    <img src="/images/Profile/card.svg" alt="no img" onClick={() => history("/Payment")}/>
                                    <img src="/images/Profile/address.svg" alt="no img" />
                                    <img src="/images/Profile/wishlist.svg" alt="no img" onClick={() => history("/wishlist")}/>
                                    <img src="/images/Profile/helpcenter.svg" alt="no img" />
                                </div>
                                <div className="left-sidebar-content">
                                    <p>Seller's Mode</p>
                                    <p onClick={() => history("/Payment")}>Payment Methods</p>
                                    <p>Address</p>
                                    <p onClick={() => history("/wishlist")}>Wishlist</p>
                                    <p>Help Center</p>
                                </div>
                                <div className="left-sidebar-toggle">
                                    <label className='switch'>
                                        <input type="checkbox" />
                                            <span className='slider'></span>
                                    </label>
                                </div>
                            </div>
                            <div className="left-down">
                                <button className='btn-fuck'>
                                    <img src="/images/profile/turnoff.svg" alt="" />
                                    <p>Sign Out</p>
                                </button>
                            </div>
                        </div>
                        <div className="left-sidebar-2">
                            <button>Edit Profile</button>
                        </div>
                    </div>
                    <div className="mid-bar">
                        <div className="mid-headf">
                            <h2>Payment Method</h2>
                        </div>
                        <div className="mid-body">
                            <div className="hello-world">
                                <div className="radio-b1">
                                    <label style={{marginTop: '3rem'}}>
                                        <input type="radio" name='kk' />
                                        <div className="circle"></div>
                                    </label>
                                    <img src="/images/payment/card.svg" alt="" />
                                    <h4>Credit Card</h4>
                                </div>
                                <div className="radio-b2">
                                    <label style={{marginTop: '3rem'}}>
                                        <input type="radio" name='kk' />
                                        <div className="circle"></div>
                                    </label>
                                    <img src="/images/payment/paypal.svg" alt="" />
                                </div>
                            </div>
                            <div className="body3">
                                <img src="/images/payment/union.svg" alt="" />
                                <p>Add New Payment Method</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <Footer />
        </div>
        
        </>
    )
}

export default Userprofile
