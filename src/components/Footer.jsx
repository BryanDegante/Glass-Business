import React from 'react';
import logo from '../Assets/logo2.png';
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row footer__row">
					<div className="footer__wrapper">
						<a href="/" className="footer__logo">
							<img
								src={logo}
								className="footer__logo--img"
								alt=""
							/>
							<h3 className="footer__logo--name">
								Eddie Baca Inc.
							</h3>
						</a>
						<div className="contact__wrapper">
							<h4>Contact us</h4>
							<div className="numbers">
								<span>713-992-9393</span>
								<span> 713-259-3755</span>
							</div>
						</div>
					</div>
						<p class="footer__copyright">
							Copyright &copy; 2018 Eddie Baca Inc. All Rights
							Reserved.
						</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
