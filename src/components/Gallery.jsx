import React from 'react';
import Img1 from '../Assets/gallery1.JPG';
import Img2 from '../Assets/gallery2.JPG';
import Img5 from '../Assets/gallery5.PNG';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Gallery = ({ isEnglish }) => {
	let navigate = useNavigate();
	return (
		<section id="gallery">
			<div className="container">
				<div className="row">
					<header className="section__header">
						{isEnglish ? (
							<h4 className="section__title blue-text">
								GALLERY
							</h4>
						) : (
							<h4 className="section__title blue-text">
								GALLERIA
							</h4>
						)}
					</header>
					<div className="home__gallery--container">
						<div className="images__container">
							<figure className="home__gallery--img">
								<img src={Img1} className="image__hg" alt="" />
							</figure>
							<figure className="home__gallery--img">
								<img src={Img2} className="image__hg" alt="" />
							</figure>
							<figure className="home__gallery--img">
								<img src={Img5} className="image__hg" alt="" />
							</figure>
						</div>
						<div className="arrow__container">
							<button
								onClick={() => navigate('/galleryPage')}
								className="view__button button blue-text"
							>
								<span className='button__text'>View more</span>
								<FaArrowCircleRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
