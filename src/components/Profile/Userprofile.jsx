import React from 'react'
import './Userprofile.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Userprofile = () => {
    const history = useNavigate();
    return (
        <>
        <header>
            <Navbar />
            <Search />
        </header>
        <div className='containerz'>
            <div className='profile-containerz'>
                <div className="header-profilez">
                    <h1 className='header-profilez'>Profile</h1>
                </div>
                <div className="profile-sidebarsz">
                    <div className="left-sidebarz">
                        <div className="left-sidebar-1z">
                            <div className="left-upz">
                                <div className="left-sidebar-iconsz">
                                    <img src="/images/Profile/profile.svg" alt="no img" />
                                    <img src="/images/Profile/card.svg" alt="no img" onClick={() => history("/Payment")}/>
                                    <img src="/images/Profile/address.svg" alt="no img" />
                                    <img src="/images/Profile/wishlist.svg" alt="no img" onClick={() => history("/")}/>
                                    <img src="/images/Profile/helpcenter.svg" alt="no img" />
                                </div>
                                <div className="left-sidebar-contentz">
                                    <p>Seller's Mode</p>
                                    <p onClick={() => history("/Payment")}>Payment Methods</p>
                                    <p>Address</p>
                                    <p onClick={() => history("/wishlist")}>Wishlist</p>
                                    <p>Help Center</p>
                                </div>
                                <div className="left-sidebar-togglez">
                                    <label className='switchz'>
                                        <input type="checkbox" />
                                            <span className='sliderz'></span>
                                    </label>
                                </div>
                            </div>
                            <div className="left-downz">
                                <button className='btn-fuckz'>
                                    <img src="/images/profile/turnoff.svg" alt="" />
                                    <p>Sign Out</p>
                                </button>
                            </div>
                        </div>
                        <div className="left-sidebar-2z">
                            <button>Edit Profile</button>
                        </div>
                    </div>
                    <div className="mid-barz">
                        <div className="mid-bar-1z">
                            <div className="mid-bar-1-avatarz">
                                <img src="/images/profile/profileavatar.svg" alt="no img" />
                            </div>
                            <div className="mid-bar-1-contentz">
                                <p>John <br />Rellite</p>
                                <input Placeholder="Change Profile Image" type="text" disabled />
                            </div>
                        </div>
                        <div className="mid-bar-2z">
                            <p>Name</p>
                            <div className="formicz">
                                <input Placeholder="John Rellite" type="text" />
                            </div>
                            <p>Email</p>
                            <div className="formicz">
                                <input Placeholder="JohnRellite@mail.com" type="text" />
                            </div>
                            <p>Password</p>
                            <div className="formicz">
                                <input Placeholder="**********" type="text" />
                            </div>
                            <p>Username</p>
                            <div className="formicz">
                                <input Placeholder="John Rellite" type="text" />
                            </div>
                            <p>Gender</p>
                            <div className="formicz">
                                <input Placeholder="Male" type="text" />
                            </div>
                            <p>Date Of Birth</p>
                            <div className="formicz">
                                <input Placeholder="12-07-1998" type="text" />
                            </div>
                            <p>Location</p>
                            <div className="formicz">
                                <input Placeholder="CA, USA" type="text" />
                            </div>
                            <p>Phone</p>
                            <div className="formicz">
                                <input Placeholder="0000 0000 0000" type="text" />
                            </div>
                        </div>
                        <div className="mid-bar-3z">
                            <button className='btn-fuck1z'>Save</button>
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
