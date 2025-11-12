import React from 'react';
import ImgRes from '..//Assets/gallery7.JPG';
import ImgCom from '..//Assets/gallery11.jpg';
import ImgRep from '..//Assets/gallery9.JPG'

const Services = ({ isEnglish }) => {
	return (
		<section id="services">
			<div className="container">
				<div className="row">
					<header className="section__header">
						{isEnglish ? (
							<h1 className="section__title blue-text">
								Services
							</h1>
						) : (
							<h1 className="section__title blue-text">
								Servicios
							</h1>
						)}
					</header>
					<div className="Residential-container">
						<div className="img__container">
							<img className="res__img" src={ImgRes} alt="" />
						</div>
						<div className="sub-headers__container">
							{isEnglish ? (
								<div className="sub-headers">
									<h1 className="sub-header blue-text">
										Residential Glass
									</h1>
									<h3>
										Expert Residential Glass Solutions for
										Every Home
									</h3>
									<p>
										we specialize in high-quality
										residential glass solutions that bring
										beauty, safety, and energy efficiency to
										your home. From custom windows and
										sliding doors to shower enclosures and
										glass railings, our experienced team
										delivers expert craftsmanship and
										reliable service on every project.
									</p>
								</div>
							) : (
								<div className="sub-headers">
									<h1 className="sub-header blue-text">
										Vidrio Residencial
									</h1>
									<p>
										nos especializamos en soluciones de
										vidrio residencial de alta calidad que
										aportan belleza, seguridad y eficiencia
										energética a tu hogar. Desde ventanas y
										puertas corredizas personalizadas hasta
										canceles de baño y barandales de vidrio,
										nuestro equipo experto ofrece mano de
										obra de confianza y servicio profesional
										en cada proyecto.
									</p>
								</div>
							)}
						</div>
					</div>
					<div className="Commercial-container">
						<div className="sub-headers__container">
							{isEnglish ? (
								<div className="sub-headers">
									<h1 className="sub-header blue-text">
										Commercial Glass
									</h1>
									<h3>
										Glass Solutions That Elevate Your
										Business
									</h3>
									<p>
										We bring clarity, style, and performance
										to every commercial project. Our glass
										solutions combine sleek aesthetics with
										superior functionality—perfect for
										modern offices, retail spaces, and
										architectural facades. Precision,
										safety, and craftsmanship are at the
										heart of everything we do.
									</p>
								</div>
							) : (
								<div className="sub-headers">
									<h1 className="sub-header blue-text">
										Vidrio Comercial
									</h1>
									<p>
										Llevamos claridad, estilo y rendimiento
										a cada proyecto comercial. Nuestras
										soluciones de vidrio combinan una
										estética moderna con una funcionalidad
										superior, perfectas para oficinas
										contemporáneas, espacios comerciales y
										fachadas arquitectónicas. La precisión,
										la seguridad y la artesanía son el
										corazón de todo lo que hacemos.
									</p>
								</div>
							)}
						</div>
						<div className="img__container">
							<img className="com__img" src={ImgCom} alt="" />
						</div>
					</div>
					<div className="Residential-container">
						<div className="img__container">
							<img className="res__img" src={ImgRep} alt="" />
						</div>
						<div className="sub-headers__container">
							{isEnglish ? (
								<div className="sub-headers">
									<h1 className="sub-header blue-text">
										Repair & Replacement
									</h1>
									<p>
										Broken or damaged glass doesn't have to
										disrupt your day. Our expert repair and
										replacement services restore your home
										or business quickly, safely, and with
										lasting quality. We handle every job
										with care, precision, and attention to
										detail
									</p>
								</div>
							) : (
								<div className="sub-headers">
									<h1 className="sub-header blue-text">
										Reparación y Reemplazo
									</h1>
									<p>
										El vidrio roto o dañado no tiene por qué
										interrumpir tu día. Nuestros servicios
										expertos de reparación y reemplazo
										restauran tu hogar o negocio de manera
										rápida, segura y con calidad duradera.
										Nos encargamos de cada trabajo con
										cuidado, precisión y atención al detalle
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
