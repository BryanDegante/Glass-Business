import React from 'react';
import logo from '../Assets/logo2.png';
const Footer = ({isEnglish}) => {
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
						{isEnglish ? (
							<div className="contact__wrapper">
								<h3>Contact us</h3>
								<p className="num">English: 713-992-9303</p>
								<p className="num">Spanish: 713-259-3755</p>
							</div>
						) : (
							<div className="contact__wrapper">
								<h3>Contact us</h3>
								<p className="num">Ingles: 713-992-9303</p>
								<p className="num">Español: 713-259-3755</p>
							</div>
						)}
					</div>
					<p class="footer__copyright">
						Copyright &copy; 2025 Eddie Baca Inc. All Rights
						Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
