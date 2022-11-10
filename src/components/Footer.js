import React from "react";
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

import './Footer.css'
function Footer() {
    return (
        <footer className="section_footer py-2 text-white">
			<div className="container__footer">
				<div className="flex row">
					<div className="footer-col mx-auto px-3">
						<h6>Hyderabad Metro</h6>
						<ul>
                            <li>
								<a id="GFG" href="#1">FAQ</a>
							</li>
							<li>
								<a id="GFG" href="#1">Our services</a>
							</li>
							<li>
								<a id="GFG" href="#1">Privacy policy</a>
							</li>
						</ul>
					</div>
					{/* <div className="footer-col mx-auto">
						<h4>Get help</h4>
						<ul>
							<li>
								<a href="#1">FAQ</a>
							</li>
							<li>
								<a href="#1">Returns</a>
							</li>
							<li>
								<a href="#1">Payment options</a>
							</li>
						</ul>
					</div> */}
					<div className="footer-col mx-auto px-5">
						<h6>Follow us</h6>
						<div >
							<a  rel="noreferrer" target="_blank" href="https://www.facebook.com/ltmhyd/" >
                           <h3><BsFacebook/></h3>
							</a>
							<a  rel="noreferrer" target="_blank" href="https://www.instagram.com/lthydmetrorail/?hl=en#" >
                           <h3><FaInstagram/></h3>
							</a>
							<a rel="noreferrer" target="_blank" href="https://twitter.com/hmrgov"  >
                              <h3><BsTwitter/></h3>
							</a>
					    </div>
					</div>
				</div>
			</div>
		</footer>
		
    );
}

export default Footer;