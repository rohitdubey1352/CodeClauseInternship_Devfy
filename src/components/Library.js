import React from "react";
import LibrarySong from "./LibrarySong";
import styled from "styled-components";

const Library = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
	return (
		<LibraryContainer libraryStatus={libraryStatus}>
			<H1>Songs</H1>
			<SongContainer>
				{songs.map((song) => (
					<LibrarySong
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
			</SongContainer>
		</LibraryContainer>
	);
};
const LibraryContainer = styled.div`
	position: relative;
	width: 26rem;
	height: auto;
	border: 2px solid #F0B6DB;
	border-radius: 3.125rem;
	background: rgba(255, 255, 255, 0.25);
	backdrop-filter: blur(20px);
	box-shadow: 2px 2px 50px rgb(204, 204, 204);
	// scrollbar-width: thin;
	// scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(155, 155, 155, 0.5);
		border-radius: 20px;
		border: transparent;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		z-index: 9;
	}
`;

const SongContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
`;

const H1 = styled.h2`
	padding: .5rem;
`;

export default Library;
