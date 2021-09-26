import { ParallaxBanner } from 'react-scroll-parallax';

import './Style.css';

export default function Eelios(): JSX.Element {
	const code = `[
    fib <- | n: Number | -> Number [
        if n <= 1 then [ 
            eval n 
        ] else [
            eval self(n - 1) + self(n - 2)
        ]
    ],
    idx <- 0,
    while idx < 10 do [
        n <- fib(idx),
        print n,
        idx <- idx + 1
    ]
]`;
	const regex = new RegExp(
		/(print|while|do|if|then|else|eval)|(Number)|(fib|n|idx|self)|(<=|<\s|\+|\s-\s)|(\||\[|\]|\(|\)|{|}|==|=|->|<-|,|:)|(\d+)|(\s+)/g,
	);

	let newCode = '';
	for (const match of code.matchAll(regex)) {
		if ((match[7] as undefined | string) !== undefined) {
			newCode += match[7];
		} else if ((match[1] as undefined | string) !== undefined) {
			newCode += `<span class="kwToken">${match[1]}</span>`;
		} else if ((match[2] as undefined | string) !== undefined) {
			newCode += `<span class="dtToken">${match[2]}</span>`;
		} else if ((match[3] as undefined | string) !== undefined) {
			newCode += `<span class="idenToken">${match[3]}</span>`;
		} else if ((match[4] as undefined | string) !== undefined) {
			newCode += `<span class="opToken">${match[4]}</span>`;
			// eslint-disable-next-line no-negated-condition
		} else if ((match[5] as undefined | string) !== undefined) {
			newCode += `<span class="symToken">${match[5]}</span>`;
		} else {
			newCode += `<span class="litToken">${match[0]}</span>`;
		}
	}

	return (
		<ParallaxBanner
			className="Background"
			layers={[
				{
					children: (
						<div className="EeliosCode">
							<pre dangerouslySetInnerHTML={{ __html: newCode }}></pre>
						</div>
					),
					amount: -0.1,
				},
			]}
			style={{ height: 'fit-content' }}
		>
			<div className="Eelios" id="eelios">
				<div className="Description">
					<div className="Content">
						<div className="Title">Eelios</div>
						<div className="SubTitle">Programming Language</div>
						<br />
						<div className="EeliosCode Reappear" style={{ display: 'none' }}>
							<pre dangerouslySetInnerHTML={{ __html: newCode }}></pre>
						</div>
						<p>
							A <b>basic</b>,{' '}
							<a href="https://en.wikipedia.org/wiki/High-level_programming_language">
								high-level
							</a>
							,{' '}
							<a href="https://en.wikipedia.org/wiki/Interpreter_(computing)">
								interpreted
							</a>
							, <b>programming language</b> which was my submission for{' '}
							<a href="https://blog.replit.com/langjam">
								an online competition
							</a>
							. The language was designed and implemented with{' '}
							<a href="https://www.typescriptlang.org/">TypeScript</a> in about
							2 weeks and it was built entirely based on a simple gimmick, as
							per the goal behind the programming jam (to introduce more
							variety) and to also take on a unique challenge. (Sadly though my
							submission was disqualified as the jam required more than one
							person working on a project.)
						</p>
						<p>
							This project was my third shot at making a programming language,
							and this project was a considerable rise in complexity compared to
							the former. (This is the first time I implemented functions and
							closures into one of my languages.) Being a language made purely
							for exploration I had some fun trying some exotic syntax for the
							language.
						</p>
						<br />
						<a className="Button" href="https://github.com/VimHax/Eelios">
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
				<div
					className="EeliosCode"
					style={{
						opacity: 0,
						userSelect: 'none',
						zIndex: -1,
					}}
				>
					<pre dangerouslySetInnerHTML={{ __html: newCode }}></pre>
				</div>
			</div>
		</ParallaxBanner>
	);
}
