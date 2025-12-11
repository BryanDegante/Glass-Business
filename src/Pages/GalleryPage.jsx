import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
const GalleryPage = ({ images }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [clickedImageRect, setClickedImageRect] = useState(null);
	const lightboxImgRef = useRef(null);

	const openLightbox = (index, e) => {
		const rect = e.target.getBoundingClientRect(); // get thumbnail position
		setClickedImageRect(rect);
		setCurrentIndex(index);
		setIsOpen(true);
	};

	useEffect(() => {
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

	const closeLightbox = () => setIsOpen(false);

	const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);

	const prevImage = () =>
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);

	return (
		<section id="gallery__grid">
			<div className="container">
				<div className="row">
					<div className="gallery__title blue-text">
						<h1>Gallery</h1>
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
