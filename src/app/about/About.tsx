import { ParallaxBanner } from 'react-scroll-parallax';

import './Style.css';

export default function About(): JSX.Element {
	return (
		<ParallaxBanner
			className="Background"
			layers={[
				{ image: '/uwaves1.webp', amount: 0 },
				{ image: '/uwaves2.webp', amount: (0.3 * 4) / 4 },
				{ image: '/uwaves3.webp', amount: (0.3 * 3) / 4 },
				{ image: '/uwaves4.webp', amount: (0.3 * 2) / 4 },
				{ image: '/uwaves5.webp', amount: (0.3 * 1) / 4 },
				{ image: '/uwaves6.webp', amount: (0.3 * 0) / 4 },
			]}
		>
			<div className="About" id="about">
				<div className="Content">
					<div className="Title">About</div>
					<br />
					<p>
						<b>Hello there!</b> On the internet I usually go by the name{' '}
						<b>VimHax</b>. (Or, even more commonly, just <b>Vim</b> which is an
						abbreviation of my real life name and definitely not related to the{' '}
						<a href="https://www.vim.org/">text editor</a> or the{' '}
						<a href="https://www.hul.co.in/brands/home-care/vim.html">
							dishwashing brand
						</a>
						.) I'm an almost 17 year old extremely normal human being on the
						internet. (Trust me) If you want to contact me you can send an email
						to <b>vimhax@vimprojects.com</b> where I will never read your email
						or send a message on <a href="https://discord.com/">Discord</a> to{' '}
						<b>VimHax#2029</b>. <a href="https://github.com/VimHax/">Here</a> is
						my GitHub profile if you were looking for that.
					</p>
					<p>
						{' '}
						From the moment I was out of the womb I've wanted to be a
						programmer, however, programming didn't feel like something I would
						enjoy for many years. Eventually, though, I picked up programming as
						a hobby near the end of 2018 with{' '}
						<a href="https://processing.org/">Processing</a>. (I would've never
						known the date if it wasn't for{' '}
						<a href="https://discourse.processing.org/t/solved-having-a-visual-problem-with-overlapping-ellipses/3253">
							this
						</a>{' '}
						forum post I've made.) From Processing I jumped to the mess that is
						the web with <a href="https://p5js.org/">P5JS</a>. (Which is a{' '}
						<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
							JavaScript
						</a>{' '}
						library based on Processing.) I learnt both Processing and P5JS from{' '}
						<a href="https://www.youtube.com/c/TheCodingTrain">
							Daniel Shiffman's amazing tutorials
						</a>
						. After a bit of stagnation I soon regained my interest in
						programming with the discovery of{' '}
						<a href="https://discord.js.org/">Discord.JS</a> and how easy it was
						to make Discord bots with it. With the help of the very nice people
						in <a href="https://discord.com/invite/djs">their support server</a>{' '}
						I was able to learn a bunch more about JavaScript and I eventually
						ended up exploring other programming languages such as{' '}
						<a href="https://www.typescriptlang.org/">TypeScript</a>,{' '}
						<a href="https://en.wikipedia.org/wiki/C_(programming_language)">
							C
						</a>
						, <a href="https://en.wikipedia.org/wiki/C++">C++</a>,{' '}
						<a href="https://www.rust-lang.org/">Rust</a> etc.
					</p>
					<p>
						That's about it for now. The projects listed on this website are not
						exhaustive, they are just the "least worst" of them all. (I might
						end up open sourcing all my projects in the future though.)
						Dedicating time to programming gets harder and harder because of
						school (mentally), but hopefully this journey will not come to an
						end anytime soon. <b>Thanks for reading, it means a lot to me.</b>
					</p>
				</div>
			</div>
		</ParallaxBanner>
	);
}
