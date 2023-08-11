import React, { useState, useRef } from "react";
import styled from "styled-components";
import "./App.css";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import NavBar from "./components/NavBarComp";
import data from "./data";


const App = () => {
	// Ref
	const audioRef = useRef(null);

	// State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	// Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

	return (
		<div libraryStatus={libraryStatus}>

			<div className="gradient1"></div>
			<div className="gradient2"></div>

			<NavBar libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			
			<div className="container-fluid">
				<div className="row">
					<div className="song_box col-12 col-lg-8 col-md-12">
						<Song currentSong={currentSong} />

						<Player
							isPlaying={isPlaying}
							setIsPlaying={setIsPlaying}
							currentSong={currentSong}
							setCurrentSong={setCurrentSong}
							audioRef={audioRef}
							songInfo={songInfo}
							setSongInfo={setSongInfo}
							songs={songs}
							setSongs={setSongs}
						/>
						<audio
							onLoadedMetadata={updateTimeHandler}
							onTimeUpdate={updateTimeHandler}
							onEnded={songEndHandler}
							ref={audioRef}
							src={currentSong.audio}
						/>

					</div>

					<div className="library col-12 col-lg-4 col-md-12 my-3">
						<Library
							songs={songs}
							setCurrentSong={setCurrentSong}
							audioRef={audioRef}
							isPlaying={isPlaying}
							setSongs={setSongs}
							libraryStatus={libraryStatus}
						/>
					</div>
				</div>
			</div>
			
			
		</div>
	);
};


export default App;
