import React, { useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GalleryPage = ({ images, isEnglish }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const lightboxImgRef = useRef(null);

	const openLightbox = (index, e) => {
		setCurrentIndex(index);
		setIsOpen(true);
	};

	useGSAP(() => {
		gsap.fromTo('.image__container', {
			opacity: 0
		}, {
			opacity: 1,
			stagger: 0.5
		})
	},[isEnglish])
	useGSAP(() => {
		if (isOpen && lightboxImgRef.current) {
			const img = lightboxImgRef.current;

			gsap.fromTo(
				img,
				{ scale: 0 },
				{
					scale: 1,
					duration: 0.5,
					ease: 'power3.out',
					transformOrigin: 'center center',
				}
			);
		}
	}, [isOpen]);

	 useEffect(() => {
			document.body.classList.add('page--gallery');
			return () => document.body.classList.remove('page--gallery');
		}, []);

	const closeLightbox = () => setIsOpen(false);

	const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);

	const prevImage = () =>
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);

	return (
		<section id="images" className="gallery-page">
			<div className="container">
				<div className="row">
					<div className="gallery__title blue-text">
						{isEnglish ? <h1>Gallery</h1> : <h1>Galleria</h1>}
					</div>
					<div className="gallery-grid">
						{images.map((image, index) => (
							<div className="image__container">
								<img
									key={image.id}
									src={image.src}
									alt={image.alt}
									className="gallery-image"
									onClick={(e) => openLightbox(index, e)}
								/>
							</div>
						))}
					</div>

					{isOpen && (
						<div
							className="lightbox-overlay"
							onClick={closeLightbox}
						>
							<span className="close-btn">&times;</span>
							<img
								src={images[currentIndex].src}
								alt={images[currentIndex].alt}
								ref={lightboxImgRef}
								className="lightbox-image"
								onClick={(e) => e.stopPropagation()}
							/>
							<button
								className="prev-btn"
								onClick={(e) => {
									e.stopPropagation();
									prevImage();
								}}
							>
								&#10094;
							</button>
							<button
								className="next-btn"
								onClick={(e) => {
									e.stopPropagation();
									nextImage();
								}}
							>
								&#10095;
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default GalleryPage;
