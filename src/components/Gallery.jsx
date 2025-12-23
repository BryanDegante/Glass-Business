import React from 'react';
import Img1 from '../Assets/gallery1.JPG';
import Img2 from '../Assets/gallery2.JPG';
import Img5 from '../Assets/gallery5.PNG';
import { FaArrowCircleRight } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const Gallery = ({ isEnglish }) => {
	useGSAP(() => {
		const featuresAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: '#gallery',
				start: 'top 85%',
				end: 'bottom 80%',
				toggleActions: 'play none none none',
			},
		});
		featuresAnimation.fromTo(
			'.home__gallery--img',
			{
				y: '-50%',
				opacity: 0,
			},
			{
				y: '0%',
				stagger: 0.5,
				opacity: 1,
			}
		);
	}, [isEnglish]);
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
							<HashLink to="/GalleryPage#images">
							<button
								className="view__button button blue-text"
								>
								{isEnglish ? (
									<span className="button__text">
										View more
									</span>
								) : (
									<span className="button__text">
										Ver más
									</span>
								)}
								<FaArrowCircleRight />
							</button>
								</HashLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
