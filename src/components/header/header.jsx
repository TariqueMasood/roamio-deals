import React from "react";
import wishListImage from "../../images/wishlist-icon.svg";
import cart from "../../images/cart.svg"
import roamioLogo from "../../images/logo.svg";

import "./header.css";

const Header = () => {
    return (
        <section className="h-container">
            <div className="container">
                <header className="h-wrapper">
                    <div className="h-left">
                        <div className="h-logo">
                            <img src={roamioLogo} alt="logo" />
                        </div>
                        <div className="h-drop">
                            <select className="select" name="seclectlist">
                                <option value="option-1">AED</option>
                                <option value="option-2">INR</option>
                                <option value="option-3">USD</option>
                            </select>
                            <select className="select" name="seclectlist">
                                <option value="option-1">Eng</option>
                                <option value="option-2">Arb</option>
                            </select>
                        </div>
                    </div>
                    <div className="h-center">
                        <input
                            type="text"
                            placeholder="Search for destinations or activities" />
                        <div className="search-icon">
                            search
                        </div>
                    </div>
                    <div className="h-right">
                        <div className="h-cart">
                            <div className="h-actions">
                                <img src={wishListImage} alt="wishlist" />
                                <span >Wishlist</span>
                            </div>
                            <div className="h-actions">
                                <img src={cart} alt="wishlist" />
                                <span> Cart</span>
                            </div>
                        </div>
                        <div className="h-login">
                            <button type="button">Login</button>
                            <button type="button">Sign Up</button>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    );
};

export default Header;
