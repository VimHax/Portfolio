import { ParallaxBanner, useController } from 'react-scroll-parallax';

import './Style.css';

export default function Hero(): JSX.Element {
	let sidePanelOpen = false;
	window.onclick = (e: MouseEvent) => {
		if (sidePanelOpen && e.x > 190) {
			const sidePanel = document.getElementById('SidePanel');
			if (sidePanel) {
				sidePanel.style.width = '0px';
				sidePanelOpen = false;
			}
		}
	};
	const { parallaxController } = useController();
	setInterval(() => {
		parallaxController.update();
	}, 500);
	return (
		<div>
			{' '}
			<ParallaxBanner
				className="Background HeroBackground"
				layers={[
					{ image: '/waves1.webp', amount: 0 },
					{ image: '/waves2.webp', amount: (0.3 * 4) / 4 },
					{ image: '/waves3.webp', amount: (0.3 * 3) / 4 },
					{ image: '/waves4.webp', amount: (0.3 * 2) / 4 },
					{ image: '/waves5.webp', amount: (0.3 * 1) / 4 },
					{ image: '/waves6.webp', amount: (0.3 * 0) / 4 },
				]}
				style={{ height: '100vh' }}
			>
				<div className="Hero">
					<div className="Navbar">
						<ul>
							<img src="/logo.svg" alt="Logo" />
							<li>
								<a href="#ares" style={{ margin: '0px' }}>
									Ares
								</a>
							</li>
							<li>
								<a href="#eelios" style={{ margin: '0px' }}>
									Eelios
								</a>
							</li>
							<li>
								<a href="#gmoss" style={{ margin: '0px' }}>
									G-Moss
								</a>
							</li>
							<li>
								<a href="#about" style={{ margin: '0px' }}>
									About
								</a>
							</li>
							<li>
								<a href="#feedback" style={{ margin: '0px' }}>
									Feedback
								</a>
							</li>
						</ul>
					</div>
					<div
						id="menu"
						onClick={() => {
							const sidePanel = document.getElementById('SidePanel');
							if (sidePanel) {
								sidePanel.style.width = '190px';
								sidePanelOpen = true;
							}
						}}
					>
						<img src="/menu.svg" alt="Menu" />
					</div>
					<div className="Title">VimProjects</div>
				</div>
			</ParallaxBanner>
			<div id="SidePanel">
				<a
					href={'javascript:void(0)'}
					id="Close"
					onClick={() => {
						const sidePanel = document.getElementById('SidePanel');
						if (sidePanel) {
							sidePanel.style.width = '0px';
							sidePanelOpen = false;
						}
					}}
				>
					x
				</a>
				<a href="#ares">Ares</a>
				<a href="#eelios">Eelios</a>
				<a href="#gmoss">G-Moss</a>
				<a href="#about">About</a>
				<a href="#feedback">Feedback</a>
			</div>
		</div>
	);
}
