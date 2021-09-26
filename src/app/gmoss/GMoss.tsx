import { ParallaxBanner } from 'react-scroll-parallax';

import './Style.css';

export default function GMoss(): JSX.Element {
	return (
		<ParallaxBanner
			className="Background"
			layers={[
				{
					children: (
						<div className="Website">
							<div className="Container">
								<img src="/website5.webp" alt="" className="Five" />
							</div>
						</div>
					),
					amount: 0.05,
				},
				{
					children: (
						<div className="Website">
							<div className="Container">
								<img src="/website4.webp" alt="" className="Four" />
							</div>
						</div>
					),
					amount: 0.05,
				},
				{
					children: (
						<div className="Website">
							<div className="Container">
								<img src="/website3.webp" alt="" className="Three" />
							</div>
						</div>
					),
					amount: -0.02,
				},
				{
					children: (
						<div className="Website">
							<div className="Container">
								<img src="/website2.webp" alt="" className="Two" />
							</div>
						</div>
					),
					amount: -0.05,
				},
				{
					children: (
						<div className="Website">
							<div className="Container">
								<img src="/website1.webp" alt="" className="One" />
							</div>
						</div>
					),
					amount: -0.1,
				},
			]}
		>
			<div className="GMoss" id="gmoss">
				<div
					className="Website"
					style={{ opacity: 0, userSelect: 'none', zIndex: -1 }}
				>
					<div className="Container">
						<img src="/website1.webp" alt="" className="One" />
						<img src="/website2.webp" alt="" className="Two" />
						<img src="/website3.webp" alt="" className="Three" />
						<img src="/website4.webp" alt="" className="Four" />
						<img src="/website5.webp" alt="" className="Five" />
					</div>
				</div>
				<div className="Description">
					<div className="Content">
						<div className="Title">G-Moss</div>
						<div className="SubTitle">Website</div>
						<br />
						<div className="Website Reappear" style={{ display: 'none' }}>
							<div className="Container">
								<img src="/website1.webp" alt="" className="One" />
								<img src="/website2.webp" alt="" className="Two" />
								<img src="/website3.webp" alt="" className="Three" />
								<img src="/website4.webp" alt="" className="Four" />
								<img src="/website5.webp" alt="" className="Five" />
							</div>
						</div>
						<p>
							A <b>website</b> built to <b>showcase</b> our <b>submission</b>{' '}
							for the{' '}
							<a href="https://www.facebook.com/events/297766794598828/">
								2021 Young Environmentalists' Challenge
							</a>
							. The competition was about finding solutions for environmental
							problems in our local area. In short our submission was a proposal
							of a small unit, that is attachable to existing vehicles, which
							reduces carbon dioxide emissions by passing exhaust gasses through
							moss inside the unit which will absorb some of the carbon dioxide
							present in the gas.
						</p>
						<p>
							I first attempted to build the website with{' '}
							<a href="https://flutter.dev/">Flutter</a> (with it's{' '}
							<a href="https://flutter.dev/web">web support</a>) and it was a
							nice experience but then later I dropped it for{' '}
							<a href="https://reactjs.org/">React</a> (which I'm somewhat
							familiar with and which is also more production ready at the time
							I was making the website). Other than my very old first portfolio
							website this is pretty much the second <b>proper</b> website I
							made and published. (Emphasis on the word proper.)
						</p>
						<br />
						<a className="Button" href="https://gmoss.live">
							<button className="hvr-shutter-out-vertical">
								<div className="ButtonContent">
									<div className="Logo">
										<img src="/external-link.webp" alt="External Link" />
									</div>
									<div className="Text">
										<span>Website</span>
									</div>
								</div>
							</button>
						</a>
						<a
							className="Button"
							href="https://github.com/VimHax/Gmoss-Website"
							style={{ marginLeft: 10 }}
						>
							<button className="hvr-shutter-out-vertical">
								<div className="ButtonContent">
									<div className="Logo">
										<img src="/github-mark.webp" alt="GitHub Mark" />
									</div>
									<div className="Text">
										<span>GitHub</span>
									</div>
								</div>
							</button>
						</a>
					</div>
				</div>
			</div>
		</ParallaxBanner>
	);
}
