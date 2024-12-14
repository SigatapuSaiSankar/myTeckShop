import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
    <div className="totalFooter">
        <div className="footer">
            <div className="left">
            <h1 className="footerHeading">Tech-Shop</h1>
            <p className="footerDesc">
                Subscribe to our Email alerts to receive early discount offers, and new products info.
            </p>
            <input
                type="email"
                id="footerEmail"
                className="footerEmail"
                placeholder="Email Address*"
                required
            />
            <button className="subscribe">Subscribe</button>
            </div>
            <div className="right">
            <ul className="help">
                <li className="help0">Help</li>
                <li className="help1"><a href="#">FAQs</a></li>
                <li className="help2"><a href="#">Track Order</a></li>
                <li className="help3"><a href="#">Cancel Order</a></li>
                <li className="help4"><a href="#">Return Order</a></li>
                <li className="help5"><a href="#">Warranty Info</a></li>
            </ul>

            <ul className="policies">
                <li className="policies0">Policies</li>
                <li className="policies1"><a href="#">Return Policy</a></li>
                <li className="policies2"><a href="#">Security</a></li>
                <li className="policies3"><a href="#">Sitemap</a></li>
                <li className="policies4"><a href="#">Privacy Policy</a></li>
                <li className="policies5"><a href="#">Terms & Conditions</a></li>
            </ul>

            <ul className="company">
                <li className="company0">Company</li>
                <li className="company1"><a href="#">About Us</a></li>
                <li className="company2"><a href="#">Contact Us</a></li>
                <li className="company3"><a href="#">Service Centres</a></li>
                <li className="company4"><a href="#">Careers</a></li>
                <li className="company5"><a href="#">Affiliates</a></li>
            </ul>
            </div>
        </div>

        <div className="finFooter">
            <p className="rights">2024 | All Rights Reserved. Built by | SAI SANKAR</p>
            <div className="footerIcons">
                <div className="fa-brands"><FaFacebookF /></div>
                <div className="fa-brands"><FaTwitter /></div>
                <div className="fa-brands"><FaInstagram /></div>
                <div className="fa-brands"><FaLinkedinIn /></div>
            </div>
        </div>
    </div>
    )
}
