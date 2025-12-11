import React from 'react'
import Landing from '../components/Landing';
import Features from '../components/Features';
import Services from '../components/Services';
import Gallery from '../components/Gallery';

const Home = ({isEnglish}) => {
  return (
		<div>
			<Landing isEnglish={isEnglish} />
			<Features isEnglish={isEnglish} />
			<Services isEnglish={isEnglish} />
			<Gallery isEnglish={isEnglish} />
		</div>
  );
}

export default Home