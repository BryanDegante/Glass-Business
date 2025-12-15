import React from 'react';
import {
	FaCalendar,
	FaCheck,
	FaHammer,
	FaHardHat,
	FaPencilRuler,
} from 'react-icons/fa';
import { FaHandHoldingHand } from 'react-icons/fa6';

const Features = ({ isEnglish }) => {
	return (
		<section id="features">
			<div className="container">
				<div className="row ">
					<div className="features__description--heading">
						<header className="section__header">
							{isEnglish ? (
								<h4 className="section__title blue-text">
									FEATURES
								</h4>
							) : (
								<h4 className="section__title blue-text">
									CARACTERISTICAS
								</h4>
							)}
						</header>
						{isEnglish ? (
							<h2>Why Choose Us ?</h2>
						) : (
							<h2>¿Por qué elegirnos?</h2>
						)}
					</div>
					<div className="features__descriptions">
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaHardHat />
							</div>
							{isEnglish ? (
								<div className="features__description--text">
									<h3>Professional Installation</h3>
									<p className="features__description--para">
										Licensed,Insured, and trusted
										technicians.
									</p>
								</div>
							) : (
								<div className="features__description--text">
									<h3>Instalación profesional</h3>
									<p className="features__description--para">
										Técnicos licenciados, asegurados y de
										confianza.
									</p>
								</div>
							)}
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaPencilRuler />
							</div>
							{isEnglish ? (
								<div className="features__description--text">
									<h3>Custom Solutions</h3>
									<p className="features__description--para">
										Tailored glass designs for your space
										and style.
									</p>
								</div>
							) : (
								<div className="features__description--text">
									<h3>Soluciones Personalizadas</h3>
									<p className="features__description--para">
										Diseños de vidrio a medida para su
										espacio y su estilo.
									</p>
								</div>
							)}
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaCalendar />
							</div>
							{isEnglish ? (
								<div className="features__description--text">
									<h3>Quick Turnaround</h3>
									<p className="features__description--para">
										Quality work completed on your schedule.
									</p>
								</div>
							) : (
								<div className="features__description--text">
									<h3>Entrega rápida</h3>
									<p className="features__description--para">
										Trabajo de calidad en su horario.
									</p>
								</div>
							)}
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaCheck />
							</div>
							{isEnglish ? (
								<div className="features__description--text">
									<h3>Guaranteed Quality</h3>
									<p className="features__description--para">
										We stand behind every pane we install
									</p>
								</div>
							) : (
								<div className="features__description--text">
									<h3>Calidad garantizada</h3>
									<p className="features__description--para">
										Respaldamos cada panel de vidrio que
										instalamos.
									</p>
								</div>
							)}
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaHammer />
							</div>
							{isEnglish ? (
								<div className="features__description--text">
									<h3>High-Quality Materials</h3>
									<p className="features__description--para">
										We use premium glass and hardware from
										trusted brands to ensure durabiltiy,
										safety and a flawless finish.
									</p>
								</div>
							) : (
								<div className="features__description--text">
									<h3>Materiales de alta calidad</h3>
									<p className="features__description--para">
										Utilizamos vidrio y herrajes de primera
										calidad de marcas de confianza para
										garantizar la durabilidad, la seguridad
										y un acabado impecable.
									</p>
								</div>
							)}
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaHandHoldingHand />
							</div>
							{isEnglish ? (
								<div className="features__description--text">
									<h3>Personalized Service</h3>
									<p className="features__description--para">
										We guide you through every step of the
										process—from the first consultation to
										the final installation.
									</p>
								</div>
							) : (
								<div className="features__description--text">
									<h3>Servicio Personalizado</h3>
									<p className="features__description--para">
										Le acompañamos en cada paso del proceso,
										desde la primera consulta hasta la
										instalación final.
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

export default Features;
