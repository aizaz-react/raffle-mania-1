import {React, useState} from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const history = useNavigate();
    const [showNoti, setShowNoti] = useState(false);
    const ToggleNoti = () => {
        showNoti ? setShowNoti(false) : setShowNoti(true);
    }
    return (
        <>
            <nav>
                <div className="nav-left">
                    <img src="/images/navbar/logo.svg" alt="no img" className='logo'/>
                </div>
                <div className="nav-right">
                    <div className="nav-right-text">
                        <ul>
                            <li onClick={() => history("/")}>Home</li>
                            <li onClick={() => history("/Order-History")}>My Orders</li>
                            <li onClick={() => history("/messages")}>Message</li>
                            <li>Sign In</li>
                        </ul>
                    </div>
                    <div className="nav-right-icon">
                        <ul>
                            <li>
                                <img src="/images/navbar/notification.svg" alt="no img" className='bell-icon navi-icons' onClick={ToggleNoti}/>
                                <div className={showNoti ? "noti-wrapper" : "noti-wrapper-hide"}>
                                    <div className="noti-box">
                                        <h1>Notifications</h1>
                                        <div className="notifi-item">
                                            <img src="/images/navbar/n1.svg" alt="" />
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, odio.</p>
                                        </div>
                                        <div className="notifi-item">
                                            <img src="/images/navbar/n2.svg" alt="" />
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, odio.</p>
                                        </div>
                                        <div className="notifi-item">
                                            <img src="/images/navbar/n3.svg" alt="" />
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, odio.</p>
                                        </div>
                                        <div className="notifi-item">
                                            <img src="/images/navbar/n4.svg" alt="" />
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, odio.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><img className='navi-icons' src="/images/navbar/cart.svg" alt="no img" onClick={() => history("/Carty")}/></li>
                            <li><img className='navi-icons' src="/images/navbar/avatar.svg" alt="no img" style={{ borderRadius: '0px', background: 'none', width: '3rem', height: '3rem' }} onClick={() => history("/Buyer-Profile")}/></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


