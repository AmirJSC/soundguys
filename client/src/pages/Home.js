import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import CarouselSection from '../components/Carousel/Carousel';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';
import Banner from '../components/Banner/Banner';

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