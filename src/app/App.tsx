import Hero from './hero/Hero';
import Ares from './ares/Ares';
import Eelios from './eelios/Eelios';
import GMoss from './gmoss/GMoss';
import About from './about/About';
import Feedback from './feedback/Feedback';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App(): JSX.Element {
	return (
		<ParallaxProvider>
			<Hero />
			<Ares />
			<Eelios />
			<GMoss />
			<About />
			<Feedback />
			<footer>© Copyright 2021 VimProjects</footer>
		</ParallaxProvider>
	);
}
