import { ParallaxBanner } from 'react-scroll-parallax';

import './Style.css';

export default function Ares(): JSX.Element {
	const code = `fn fib(term: Int) -> Int {
    if term == 0 { 0 }
    else if term == 1 { 1 }
    else { fib(term - 1) + fib(term - 2) }
}

fn main() {
    let count = 0;
    loop {
        if count == 10 {
            return;
        }
        print(fib(count));
        count = count + 1;
    }
}`;
	const regex = new RegExp(
		/(\s+)|(fn|let|loop|if|else|return)|(Int)|(fib|term|count|print|main)|(==|\+|-\s)|(\(|\)|{|}|==|=|->|;|:)|(\d+)/g,
	);

	let newCode = '';
	for (const match of code.matchAll(regex)) {
		if ((match[1] as undefined | string) !== undefined) {
			newCode += match[1];
		} else if ((match[2] as undefined | string) !== undefined) {
			newCode += `<span class="kwToken">${match[2]}</span>`;
		} else if ((match[3] as undefined | string) !== undefined) {
			newCode += `<span class="dtToken">${match[3]}</span>`;
		} else if ((match[4] as undefined | string) !== undefined) {
			newCode += `<span class="idenToken">${match[4]}</span>`;
		} else if ((match[5] as undefined | string) !== undefined) {
			newCode += `<span class="opToken">${match[5]}</span>`;
			// eslint-disable-next-line no-negated-condition
		} else if ((match[6] as undefined | string) !== undefined) {
			newCode += `<span class="symToken">${match[6]}</span>`;
		} else {
			newCode += `<span class="litToken">${match[7]}</span>`;
		}
	}

	return (
		<ParallaxBanner
			className="Background"
			layers={[
				{
					children: (
						<div className="AresCode">
							<pre dangerouslySetInnerHTML={{ __html: newCode }}></pre>
						</div>
					),
					amount: -0.1,
				},
			]}
		>
			<div className="Ares" id="ares">
				<div
					className="AresCode"
					style={{ opacity: 0, userSelect: 'none', zIndex: -1 }}
				>
					<pre dangerouslySetInnerHTML={{ __html: newCode }}></pre>
				</div>
				<div className="Description">
					<div className="Content">
						<div className="Title">Ares</div>
						<div className="SubTitle">Programming Language</div>
						<br />
						<div className="AresCode Reappear" style={{ display: 'none' }}>
							<pre dangerouslySetInnerHTML={{ __html: newCode }}></pre>
						</div>
						<p>
							A <b>small</b>,{' '}
							<a href="https://en.wikipedia.org/wiki/Compiled_language">
								compiled
							</a>
							,{' '}
							<a href="https://en.wikipedia.org/wiki/Type_system#Static_type_checking">
								statically typed
							</a>
							,{' '}
							<a href="https://en.wikipedia.org/wiki/High-level_programming_language">
								high-level
							</a>
							, (among other big words) <b>programming language</b> made in{' '}
							<a href="https://www.rust-lang.org/">Rust</a> inspired by Rust{' '}
							(ironic) and{' '}
							<a href="https://www.typescriptlang.org/">TypeScript</a>. (Mostly
							inspired by Rust at this point in development.) It combines the
							simplicity of TypeScript with the ergonomics of a language built
							from the ground up to be a statically typed language, Rust. (It is
							nowhere close to being usable though as of now.)
						</p>
						<p>
							This project took much longer than I would like to admit to make.
							It took many weeks of procrastination and it's still in alpha but
							I've enjoyed coding it a lot as I've got to learn many new things
							in the process. (LLVM, Rust, static analysis etc... all things
							which are very new to me or even unexplored prior to this
							project.) By far this is also the largest project I've written
							since I started programming.
						</p>
						<br />
						<a className="Button" href="https://github.com/VimHax/Ares">
							<button className="hvr-shutter-out-vertical">
								<div className="ButtonContent">
									<span className="Logo">
										<img src="/github-mark.webp" alt="GitHub Mark" />
									</span>
									<span className="Text">
										<span>GitHub</span>
									</span>
								</div>
							</button>
						</a>
					</div>
				</div>
			</div>
		</ParallaxBanner>
	);
}
