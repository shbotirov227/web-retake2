import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/images/logo.png";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "../../assets/icons";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className="Footer" id="footer">
            <div className="videoTag">
            </div>
            <div className="Footer-inner container">

                <div className="Footer-left">
                    <Link to="/"><img className="footerLogo" src={Logo} alt="" /></Link>
                    <p className="Footer-text">Read it is a recommendation guide for readers, highlighting the best new books across all genres as chosen by our editors. Starred (★) titles indicate a book that is exceptional in its genre or category. Read it is editorially independent; any publisher-sponsored content is clearly labeled as such.</p>

                    <div className="Footer-icons">
                        <Link to="https://facebook.com"><FacebookIcon /></Link>
                        <Link to="https://twitter.com"><TwitterIcon /></Link>
                        <Link to="https://linkedin.com"><LinkedinIcon /></Link>
                    </div>
                </div>

                <div className="allServices">


                    <div className="Footer-inputSection">
                        <h4 className="service-title">Have any questions ?</h4>
                        <p className="Footer-inputSection-text">Join our mailing list to keep up to date with our latest books and services</p>

                        <div className="inputSection-inputContent">
                            <input className="Footer-inputSection-input" type="text" placeholder="Enter your email address..." />
                            <Link to="/signup" className="btn-secondary">Subscribe Now</Link>
                        </div>

                    </div>
                    <ul className="Footer-services">
                        <li className="service-title">Read it Helps</li>
                        <li><Link className="Footer-service" to="/about-us">About Us</Link></li>
                        <li><HashLink className="Footer-service" to="/#services">Services</HashLink></li>
                        <li><Link className="Footer-service" to="/contact">Contact Us</Link></li>
                        <li><Link className="Footer-service" to="/contact">Help Center</Link></li>
                        <li><Link className="Footer-service" to="/about-us">How it Works</Link></li>
                        <li><Link className="Footer-service" to="/">Privacy </Link></li>
                        <li><Link className="Footer-service" to="/">Terms</Link></li>
                    </ul>
                </div>

            </div>
            <h4 className="copyright container">Copyright © 2023 - 2024 ®. <br></br>All rights reserved</h4>
        </div>
    )
}

export default Footer;
