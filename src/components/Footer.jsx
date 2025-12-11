import React from 'react'
import logo from '../Assets/logo2.png'
const Footer = () => {
  return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="links_wrapper"></div>
					<div className="footer__wrapper">
						<div className="footer__logo">
              <img src={logo} className="footer__logo--img" alt="" />
              <h3 className='footer__logo--name'>Eddie Baca Inc.</h3>
						</div>
						<p class="footer__copyright">
							&copy; 2018 Eddie Baca Inc. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
  );
}

export default Footer