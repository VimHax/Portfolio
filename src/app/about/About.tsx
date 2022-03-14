import { ParallaxBanner } from 'react-scroll-parallax';

import './Style.css';

export default function About(): JSX.Element {
	return (
		<div className="AboutContainer">
			<ParallaxBanner
				layers={[
					{ image: '/uwaves1.webp', amount: 0 },
					{ image: '/uwaves2.webp', amount: (0.3 * 4) / 4 },
					{ image: '/uwaves3.webp', amount: (0.3 * 3) / 4 },
					{ image: '/uwaves4.webp', amount: (0.3 * 2) / 4 },
					{ image: '/uwaves5.webp', amount: (0.3 * 1) / 4 },
					{ image: '/uwaves6.webp', amount: (0.3 * 0) / 4 },
				]}
				style={{ height: '100vh', zIndex: 0 }}
			></ParallaxBanner>
			<div className="About" id="about">
				<div className="Content">
					<div className="Title">About</div>
					<br />
					<div className="SubTitle">Who am I?</div>
					<br />
					<img src="/me.webp" alt="" className="Me" />
					<br />
					<p>
						<b>Hello there!</b> On the internet I usually go by the name{' '}
						<b>VimHax</b>. (Or, even more commonly, just <b>Vim</b> which is an
						abbreviation of my real life name <b>Vimukthi Weerabahu</b> and
						definitely not related to the{' '}
						<a href="https://www.vim.org/">text editor</a> or the{' '}
						<a href="https://www.hul.co.in/brands/home-care/vim.html">
							dishwashing brand
						</a>
						.) I'm an almost <b>17 year old</b> extremely normal human being on
						the internet. (Trust me) I was born and I still reside in{' '}
						<b>Sri Lanka</b> where I learn at{' '}
						<a href="https://lyceum.lk/">Lyceum International School</a>. If you
						want to contact me you can send an email to{' '}
						<b>vimhax@vimprojects.com</b> where I will never read your email or
						send a message on <a href="https://discord.com/">Discord</a> to{' '}
						<b>VimHax#2029</b>. (You may also fill out the feedback form below
						to contact me incase the previously mentioned methods are
						unavailable.) <a href="https://github.com/VimHax/">Here</a> is my
						GitHub profile if you were looking for that.
					</p>
					<br />
					<div className="SubTitle">My Programming Journey</div>
					<br />
					<p>
						{' '}
						From the moment I was out of the womb I've wanted to be a programmer
						(well actually not really, but close enough), however, programming
						didn't feel like something I would enjoy for many years. Eventually,
						though, I picked up programming as a hobby near the end of 2018 with{' '}
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
					<br />
					<div className="SubTitle">My Goals</div>
					<br />
					<p>
						I consider (and will keep considering until the end of time) myself
						as an <b>absolute beginner</b> because that's <b>what I am</b>. In
						the small amount of time I have given a shot at my hobby I have only{' '}
						<b>scratched the surface</b> of what is there <b>to be known</b>. I
						have <b>slightly</b> dipped my feet into many areas of programming;
						networking, back-end dev , front-end dev, desktop applications, 3D
						graphics, making programming languages (which is what I'm currently
						exploring) just to name a few. It helped me <b>truly</b> understand
						the <b>scale</b> of just <b>how much there is to learn</b>. There is
						no way I could <b>ever</b> know everything and{' '}
						<b>I can't change that</b>. The best I can do is to learn new things
						at a constant pace and so <b>that's my long-term goal</b>.
					</p>
					<p>
						If you were looking for more "short-term"/specific goals then...
					</p>
					<ul className="Goals">
						<li>
							Try to improve Ares (my compiled programming language) to a level
							good enough to comfortably write it's own compiler in Ares. (This
							is possible through{' '}
							<a href="https://en.wikipedia.org/wiki/Bootstrapping_(compilers)">
								compiler bootstrapping
							</a>
							.) And, generally speaking, implement a nice standard library
							(among other features) so that I might actually be able to use
							Ares in my own future projects. (Which would be a very nice way of{' '}
							<a href="https://en.wikipedia.org/wiki/Eating_your_own_dog_food">
								dog fooding
							</a>
							. )
						</li>
						<br />
						<li>
							Leave the comfort zone more often. I want to give OS dev a shot
							and I tried to with virtually no success. Finding resources about
							OS dev is considerably harder than finding resources for, say, web
							dev but that also makes it ultimately more rewarding once you do
							figure something out. Picking OS dev back up is very high on my
							priority list.
						</li>
						<br />
						<li>
							Be less lazy. Give Arudino another shot. Writing a program which
							displays something on a computer screen is one thing, being able
							to easily interact with the world physically is another, it adds a
							whole another dimension to what's possible.
						</li>
						<br />
						<li>
							Don't leave projects incomplete. This is a problem that has
							plagued me from the beginning, there's just so many cool things in
							programming that I keep getting distracted by. That and I tend to
							run out of motivation to keep going as time passes. This is the
							main reason why I have only listed 3 projects in this website.
						</li>
					</ul>
					<p>
						<b>Okay enough talking.</b>
					</p>
					<br />
					<div className="SubTitle">The End</div>
					<br />
					<p>
						That's about it for now. The projects listed on this website are{' '}
						<b>not exhaustive</b>, they are just the "least worst" of them all.
						(I might end up open sourcing all my projects in the future though.)
						Dedicating time to programming gets harder and harder because of
						school (mentally), but hopefully this journey will not come to an
						end anytime soon.{' '}
						<b>Thanks for reading this stuff, it means a lot to me.</b>
					</p>
				</div>
			</div>
		</div>
	);
}
