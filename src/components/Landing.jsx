import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';


const Landing = ({ isEnglish }) => {
	const titleAnimation = gsap.timeline();
	
	useGSAP(() => {
		titleAnimation
			.fromTo('nav',
				{ y: '-20%', opacity: 0 },
				{ y: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
			)

			.fromTo(
				'.top-left',
				{ x: '-20%', opacity: 0 },
				{ x: '0%', opacity: 1, duration: 1, ease: 'power3.out' },'-=0.5'
			)
			.fromTo(
				'.bottom-right',
				{ x: '+20%', opacity: 0 },
				{ x: '0%', opacity: 1, duration: 1, ease: 'power3.out' },'-=0.5'
			)
			.fromTo(
				'.call__button',
				{ scale: 0},
				{scale:1 },'-=0.5'
			);
	}, [isEnglish])
	return (
		<section id="landing" className="bg-lightblue">
			{isEnglish ? (
				<div className="description__wrapper">
					<div className="description top-left">
						<h1 className="description__top--text">
							Expert Glass Installation for Homes & Businesses
						</h1>
						<h3>
							Crystal-clear quality. Precision craftsmanship.
							Installed on time—every time.
						</h3>
					</div>
					<div className="description bottom-right">
						<h2 className="description__top--text">
							In the Houston Area
						</h2>
						<h3>
							From custom shower enclosures to storefront windows,
							we deliver flawless glass solutions built to last.
						</h3>
					</div>
				</div>
			) : (
				<div className="description__wrapper">
					<div className="description top-left">
						<h1>
							Instalación Profesional de Vidrio para Hogares y
							Negocios
						</h1>
						<h3>
							Calidad impecable. Fabricación de precisión.
							Instalación puntual, siempre.
						</h3>
					</div>
					<div className="description bottom-right">
						<h2>En el área de Houston</h2>
						<h3>
							Desde recintos de ducha personalizados hasta
							ventanas de tiendas, entregamos soluciones de vidrio
							perfectas construidas para durar.
						</h3>
					</div>
				</div>
			)}
		</section>
	);
};

export default Landing;
