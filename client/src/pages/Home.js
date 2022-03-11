import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import CarouselSection from '../components/Carousel';
import Promotions from '../components/Promotions';
import FeaturedSection from '../components/FeaturedSection';
import Banner from '../components/Banner';
import HotPicksSection from '../components/HotPicksSection';
import Footer from '../components/Footer';
import LoginComponent from '../components/Footer';

export default function Home() {
	return (
		<Fragment>
			<CarouselSection/>
			<Container>
				<Banner/>
				<FeaturedSection/>
			</Container>
		</Fragment>
		)
}