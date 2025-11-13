import React from 'react';
import { FaCalendar, FaCheck, FaHammer, FaHardHat, FaPencilRuler } from 'react-icons/fa';
import { FaHandHoldingHand } from 'react-icons/fa6';

const Features = ({ isEnglish }) => {
	return (
		<section id="features">
			<div className="container">
				<div className="row features__row">
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
						<h2>Why Choose Us ?</h2>
					</div>
					<div className="features__descriptions">
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaHardHat />
							</div>
							<div className="features__description--text">
								<h3>Professional Installation</h3>
								<p className="features__description--para">
									Licensed,Insured, and trusted technicians.
								</p>
							</div>
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaPencilRuler />
							</div>
							<div className="features__description--text">
								<h3>Custom Solutions</h3>
								<p className="features__description--para">
									Tailored glass designs for your space and
									style.
								</p>
							</div>
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaCalendar />
							</div>
							<div className="features__description--text">
								<h3>Fast Turnaround</h3>
								<p className="features__description--para">
									Quality work completed on your schedule.
								</p>
							</div>
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaCheck />
							</div>
							<div className="features__description--text">
								<h3>Guaranteed Quality</h3>
								<p className="features__description--para">
									We stand behind every pane we install
								</p>
							</div>
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaHammer />
							</div>
							<div className="features__description--text">
								<h3>High-Quality Materials</h3>
								<p className="features__description--para">
									We use premium glass and hardware from
									trusted brands to ensure durabiltiy, safety
									and a flawless finish.
								</p>
							</div>
						</div>
						<div className="features__description">
							<div className="features__description--icon blue-text">
								<FaHandHoldingHand />
							</div>
							<div className="features__description--text">
								<h3>Personalized Service</h3>
								<p className="features__description--para">
									We guide you through every step of the
									process—from the first consultation to the
									final installation.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
