import React from 'react';

const Landing = ({ isEnglish }) => {
	return (
		<section id="landing" className="bg-lightblue">
			{isEnglish ? (
				<div className="description__wrapper">
					<div className="description top-left">
						<h1>
							Expert Glass Installation for Homes & Businesses
						</h1>
						<h3>
							Crystal-clear quality. Precision craftsmanship.
							Installed on time—every time.
						</h3>
					</div>
					<div className="description bottom-right">
						<h1>
							From custom shower enclosures to storefront windows,
							we deliver flawless glass solutions built to last.
						</h1>
						<h3>In the Houston Area</h3>
					</div>
				</div>
			) : (
				<div className="description__wrapper">
					<div className="description top-left">
						<h1>
							Instalación Profesional de Vidrio para Hogares y
							Negocios
						</h1>
						<h2>
							Calidad impecable. Mano de obra precisa.
							Instalaciones a tiempo, siempre.
						</h2>
					</div>
					<div className="description bottom-right">
						<h1>
							Desde canceles de baño a medida hasta fachadas
							comerciales, ofrecemos soluciones en vidrio
							duraderas y con acabados de primera.
						</h1>
						<h2>En el área de Houston</h2>
					</div>
				</div>
			)}
		</section>
	);
};

export default Landing;
