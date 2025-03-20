import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Project from "./Project";

import lfisiksImg from "/src/assets/lfisiks.png";
import htmlImg from "/src/assets/html.png";
import antsImg from "/src/assets/ants.png";
import armImg from "/src/assets/arm.png";
import connectionsImg from "/src/assets/artificial-connections.png";
import geniusLyricsImg from "/src/assets/geniuslyrics.png";
import btsmPath from "/src/assets/main.png";
import nixImg from "/src/assets/nix.png";

function Projects() {
	const navigate = useNavigate();

	const redirectSite = (page) => {
		navigate(page);
	};

	return (
		<>
			<Navbar />
			<div className="projects section" id="projects">
				<h1>Projects - Images link to project</h1>
				<div className="tileSection">
					<Project
						click={() => redirectSite("/")}
						reference={"https://github.com/johnstclair/artificial-connections"}
						useReference={true}
						author={"Author"}
						header={"Artificial Connections"}
						paragraph={
							"A full stack app I built with Tauri, Artificial Connections is just like New York Times Connections, with an AI twist."
						}
						imagePath={connectionsImg}
						imageWidth={"100%"}
					/>
					<Project
						click={() => redirectSite("/")}
						reference={"https://gangagames.itch.io/anzz"}
						useReference={true}
						author={"Author"}
						header={"Anzz"}
						paragraph={
							"Anzz is a small, silly project I worked on for school to learn Godot Mono (C#).  It's a simulation where ants utilize pheromones to gather food as efficiently as possible."
						}
						imagePath={antsImg}
						imageWidth={"100%"}
					/>
					<Project
						click={() => redirectSite("/")}
						reference={"https://github.com/johnstclair/lfisiks/"}
						useReference={true}
						author={"Author"}
						header={"lfisiks"}
						paragraph={
							"lfisiks is a little pixel physics demo built with minifb in Rust. I made the project over a couple of days, and released it as a referance for other deveolpers."
						}
						imagePath={lfisiksImg}
						imageWidth={"100%"}
					/>
					<Project
						click={() => redirectSite("/")}
						reference={""}
						useReference={false}
						author={"Author"}
						header={"Personal Portfolio"}
						paragraph={
							"This website! I have used my knowledge of Javascript, HTML, CSS and React to create my very own personal portfolio!"
						}
						imagePath={htmlImg}
						imageWidth={"100%"}
					/>
					<Project
						click={() => redirectSite("/")}
						reference={"https://www.raycast.com/tkdkid1000/genius-lyrics"}
						useReference={true}
						author={"Contributor"}
						header={"Genius Lyric Raycast Extension"}
						paragraph={
							"I added a command that allows users to search for song titles using lyrics to the existing Genius Lyric's extension for Raycast"
						}
						imagePath={geniusLyricsImg}
						imageWidth={"100%"}
					/>
					<Project
						click={() => redirectSite("/")}
						reference={"https://gangagames.itch.io/built-to-scale-mountains"}
						useReference={true}
						author={"Developer"}
						header={"GMTK2024 Game Jam"}
						paragraph={
							"With a team of two newcomers to Git and Godot, I was the main developer in Built To Scale: Moutains, a submission to the GMTK2024 Game Jam!"
						}
						imagePath={btsmPath}
						imageWidth={"100%"}
					></Project>
					<Project
						click={() => redirectSite("/")}
						reference={"https://github.com/johnstclair/nixos-config"}
						useReference={true}
						author={"Author"}
						header={"NixOS Configuration"}
						paragraph={
							"My NixOS configuration, designed from the ground up to be modular, maintainable, reproducable, and stunning."
						}
						imagePath={nixImg}
						imageWidth={"100%"}
					></Project>
					<Project
						click={() => redirectSite("/")}
						reference={"https://github.com/johnstclair/TAADDA_CPU"}
						useReference={true}
						author={"Author"}
						header={"T.A.A.D.D.A CPU"}
						paragraph={
							"One of my more time consuming projects, this project included was building and designing a virtual computer, with an special ARM-like architecture."
						}
						imagePath={armImg}
						imageWidth={"100%"}
					/>
				</div>
			</div>
		</>
	);
}

export default Projects;
