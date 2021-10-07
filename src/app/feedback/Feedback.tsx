import { useState } from 'react';
import './Style.css';

export default function Feedback(): JSX.Element {
	const [feedback, setFeedback] = useState('');
	const [sent, setSent] = useState(false);
	const [sending, setSending] = useState(false);
	const [error, setError] = useState(false);
	return (
		<div className="Feedback" id="feedback">
			<div className="Content">
				<div className="Title">Feedback</div>
				<br />
				<p>
					<b>Hello again!</b> For whatever reason if you want to send me some
					feedback about something I do you can do so by filling out the form
					below. Feedback is crucial for me to improve myself so any feedback is
					highly appreciated. You may also leave any contact details if you wish
					incase you want me to respond/contact me that way.
				</p>
				<span
					className="LetterCount"
					style={
						sending
							? { color: '#1900ff' }
							: error
							? { color: 'red' }
							: sent
							? { color: 'green' }
							: {}
					}
				>
					{sending
						? 'Sending...'
						: error
						? 'An error has occurred, please try again later.'
						: sent
						? 'Successfully sent your feedback.'
						: `${feedback.length}/1000`}
				</span>
				<textarea
					value={feedback}
					onInput={(event) =>
						!sent &&
						event.currentTarget.value.length <= 1000 &&
						setFeedback(event.currentTarget.value)
					}
					style={
						sent
							? {
									color: sending ? '#1900ff' : error ? 'red' : 'green',
									borderImage: sending
										? 'linear-gradient(to bottom, #0b0072, #0b0072) 30'
										: error
										? 'linear-gradient(to bottom, red, red) 30'
										: 'linear-gradient(to bottom, green, green) 30',
							  }
							: {}
					}
					disabled={sent}
				></textarea>
				<br />
				<button
					className="Button hvr-shutter-out-vertical"
					disabled={feedback.length === 0 || sent}
					onClick={() => {
						setSent(true);
						setSending(true);
						fetch(
							`https://docs.google.com/forms/d/e/1FAIpQLSePB7hLkLetR7I6CfcVd06O2OVAKMpt7EKqSpy0txcxTUTXjw/formResponse?&entry.1196236215=${feedback}&submit=SUBMIT`,
							{
								method: 'POST',
								mode: 'no-cors',
								redirect: 'follow',
								referrer: 'no-referrer',
							},
						)
							.then(() => {
								console.log('Sent feedback!');
							})
							.catch(() => {
								console.log('Error occurred when sending feedback!');
								setError(true);
							})
							.finally(() => {
								setSending(false);
							});
					}}
				>
					<div className="ButtonContent">
						<span className="Logo">
							<img
								src="/send.webp"
								alt="GitHub Mark"
								style={{ width: '50%' }}
							/>
						</span>
						<span className="Text">
							<span>
								{sending ? 'Sending' : error ? 'Error' : sent ? 'Sent' : 'Send'}
							</span>
						</span>
					</div>
				</button>
			</div>
		</div>
	);
}
