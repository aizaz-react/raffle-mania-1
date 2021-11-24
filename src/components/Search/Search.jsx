import {React, useState} from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const history = useNavigate();
    const [showFilter, setShowFilter] = useState(false);
    const ToggleFilter = () => {
        showFilter ? setShowFilter(false) : setShowFilter(true);
    }
    const [showCategory, setShowCategory] = useState(false);
    const ToggleCategory = () => {
        showCategory ? setShowCategory(false) : setShowCategory(true);
    }
    return (
        <>
            <div className="searchbar-container">
                <div className="searchbar">
                    <div className="searchbar-input">
                        <input Placeholder='Search for Anything' type="text" />
                        <div className="i1">
                            <img src="/images/searchbar/searchbar.svg" alt="" onClick={() => history("/Details")}/>
                        </div>
                    </div>
                    <div className="i2">
                        <img src="/images/searchbar/caticon.svg" alt="" onClick={ToggleFilter}/>
                    </div>
                    <div className="searchbar-text">
                        <p onClick={ToggleCategory}>CATEGORIES</p>
                        <img src="/images/searchbar/dropdown.svg" alt="" onClick={ToggleCategory}/>
                    </div>
                    <div className={showFilter ? "search-filter" : "search-filter-hide"}>
                        <p>All Deparments</p>
                        <p>Arts & Crafts</p>
                        <p>Beauty & Personal Care</p>
                        <p>Digital Music</p>
                        <p>Men's Fashion</p>
                        <p>Women's Fashion</p>
                        <p>Health</p>
                    </div>
                    <div className={showCategory ? "search-cat" : "search-cat-hide"}>
                        <div className="search-cat-1">
                            <h1>Popular Catagories</h1>
                            <div className="pop-cat">
                                <div className="arrow"><img src="/images/searchbar/l.svg" alt="" /></div>
                                <div className="pop-cat-item-container">
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat3.svg" alt="" />
                                        <p>Jeans</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat3.svg" alt="" />
                                        <p>Jeans</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat3.svg" alt="" />
                                        <p>Jeans</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat3.svg" alt="" />
                                        <p>Jeans</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                </div>
                                <div className="arrow"><img src="/images/searchbar/r.svg" alt="" /></div>
                            </div>
                        </div>
                        <div className="search-cat-2">
                            <h1>Popular Services</h1>
                            <div className="pop-cat">
                                <div className="arrow"><img src="/images/searchbar/l.svg" alt="" /></div>
                                <div className="pop-cat-item-container">
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat3.svg" alt="" />
                                        <p>Jeans</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat3.svg" alt="" />
                                        <p>Jeans</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat3.svg" alt="" />
                                        <p>Jeans</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat3.svg" alt="" />
                                        <p>Jeans</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat1.svg" alt="" />
                                        <p>Sneakers</p>
                                    </div>
                                    <div className="pop-cat-item">
                                        <img src="/images/searchbar/cat2.svg" alt="" />
                                        <p>Jackets</p>
                                    </div>
                                </div>
                                <div className="arrow"><img src="/images/searchbar/r.svg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
