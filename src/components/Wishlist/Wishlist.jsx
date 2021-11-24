import React from 'react'
import './Wishlist.css'
import Card from './Card'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'

const Wishlist = () => {
    return (
        <>
        <header>
            <Navbar />
            <Search />
        </header>
        <div className='wishlist-container'>
            <div className="wish-head">
                <h4>Wishlist</h4>
            </div>
            <div className="wishy">
                <div className="cardy-container">
                    <div className="wish-cards">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Wishlist
