import React from 'react';
import ImgRes from '..//Assets/gallery7.JPG'
import ComRes from '..//Assets/gallery5.JPG'
const Gallery = () => {
	return (
		<section id="gallery">
			<div className="container">
				<div className="row">
					<div className="Residential-container">
						<div className="sub-headers">
							<h1>Residential Glass</h1>
						</div>
						<div className="img__container">
							<img className="res__img" src={ImgRes} alt="" />
						</div>
					</div>
					<div className="Commercial-container">
							<div className="img__container">
								<img className="com__img" src={ComRes} alt="" />
							</div>
						<div className="sub-headers">
							<h1>Commercial Glass</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
