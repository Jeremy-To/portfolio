import { me } from '../me';

function Hero() {
	return (
		<section className="home-hero">
			<div className="home-hero__content">
				<h1 className="heading-primary">Hey, My name is {me.name}</h1>
				<div className="home-hero__info">
					<p className="text-primary">{me.subtitle}</p>
					<p className="text-primary">{me.location}</p>
				</div>
				<div className="home-hero__cta">
					<a href="./#projects" className="btn btn--bg">
						Projects
					</a>
				</div>
			</div>
			<div className="home-hero__socials">
				<div className="home-hero__social">
					<a href="#" className="home-hero__social-icon-link">
						<img
							src="./assets/png/linkedin-ico.png"
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
				<div className="home-hero__social">
					<a href="#" className="home-hero__social-icon-link">
						<img
							src="./assets/png/github-ico.png"
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
				<div className="home-hero__social">
					<a href="#" className="home-hero__social-icon-link">
						<img
							src="./assets/png/twitter-ico.png"
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
				<div className="home-hero__social">
					<a href="#" className="home-hero__social-icon-link">
						<img
							src="./assets/png/yt-ico.png"
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
				<div className="home-hero__social">
					<a
						href="#"
						className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
					>
						<img
							src="./assets/png/insta-ico.png"
							alt="icon"
							className="home-hero__social-icon"
						/>
					</a>
				</div>
			</div>
			<div className="home-hero__mouse-scroll-cont">
				<div className="mouse"></div>
			</div>
		</section>
	);
}

export default Hero;
