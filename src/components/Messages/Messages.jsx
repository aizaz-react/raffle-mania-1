import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import './Messages.css'
import { useNavigate } from "react-router-dom";

const Messages = () => {
    const navigate = useNavigate();
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
                    <div className="left-sidebarr">
                        <div className="left-sidebarr-1">
                            <div className="left-up">
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
                                <div className="left-sidebarr-toggle">
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
                    <div className="mid-barr">
                        <div className="mid-bar-a">
                            <div className="mm-1">
                                <h5>Messages</h5>
                            </div>
                            <div className="inbox">
                                <div className="inbox-person">
                                    <div className="ib-person-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                    </div>
                                    <div className="ib-person-text">
                                        <h5>Ahmad Stanton</h5>
                                        <p>Hi</p>
                                    </div>
                                </div>
                                <div className="inbox-person">
                                    <div className="ib-person-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                    </div>
                                    <div className="ib-person-text">
                                        <h5>Ahmad Stanton</h5>
                                        <p>Hi</p>
                                    </div>
                                </div>
                                <div className="inbox-person">
                                    <div className="ib-person-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                    </div>
                                    <div className="ib-person-text">
                                        <h5>Ahmad Stanton</h5>
                                        <p>Hi</p>
                                    </div>
                                </div>
                                <div className="inbox-person">
                                    <div className="ib-person-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                    </div>
                                    <div className="ib-person-text">
                                        <h5>Ahmad Stanton</h5>
                                        <p>Hi</p>
                                    </div>
                                </div>
                                <div className="inbox-person">
                                    <div className="ib-person-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                    </div>
                                    <div className="ib-person-text">
                                        <h5>Ahmad Stanton</h5>
                                        <p>Hi</p>
                                    </div>
                                </div>
                                <div className="inbox-person">
                                    <div className="ib-person-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                    </div>
                                    <div className="ib-person-text">
                                        <h5>Ahmad Stanton</h5>
                                        <p>Hi</p>
                                    </div>
                                </div>
                                <div className="inbox-person">
                                    <div className="ib-person-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                    </div>
                                    <div className="ib-person-text">
                                        <h5>Ahmad Stanton</h5>
                                        <p>Hi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mid-bar-b">
                            <div className="b-head">
                                <div className="b-head-img">
                                    <img src="/images/messages/ibpic.svg" alt="" />
                                </div>
                                <div className="b-head-text">
                                    <h5>Ahmad Stanton</h5>
                                </div>
                            </div>
                            <div className="b-mid">
                                <p className='yesterday'>Yesterday</p>
                                <div className="b-mid-1">
                                    <div className="b1-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                        <p>Hi, Wilson. How are you?</p>
                                    </div>
                                    <p className='time'>10:23 am</p>
                                </div>
                                <div className="b-mid-2">
                                    <div className="b2-img">
                                        <img src="/images/messages/ibpic.svg" alt="" />
                                        <p>Check this out...</p>
                                    </div>
                                    <div className="b2-img2">
                                        <img src="/images/messages/shoe.svg" alt="" />
                                    </div>
                                    <p className='time'>10:23 am</p>
                                </div>
                                <div className="b-mid-1"></div>
                                <div className="b-mid-1"></div>
                                <div className="b-mid-3">
                                    <div className="b3-img">
                                        <p>Hi, Wilson. How are you?</p>
                                    </div>
                                    <p className='time'>10:23 am</p>
                                </div>
                            </div>
                            <div className="b-foot">
                                <div className="foot-1">
                                    <img src="/images/messages/txt.svg" alt="" />
                                    <img src="/images/messages/gif.svg" alt="" />
                                    <img src="/images/messages/pic.svg" alt="" />
                                    <img src="/images/messages/mic.svg" alt="" />
                                </div>
                                <div className="foot-2">
                                    <input placeholder='Start a conversation' type="text" />
                                </div>
                                <div className="foot-3">
                                    <h5>Send</h5>
                                </div>
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

export default Messages
