import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			<Img src={currentSong.cover} alt={currentSong.name}></Img>
			<H1>{currentSong.name}</H1>
			<H2>{currentSong.artist}</H2>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	// margin-top: 2vh;
	min-height: 38vh;
	max-height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Img = styled.img`
	width: 26%;
	height: auto;
	border-radius: 25%;
	@media screen and (max-width: 768px) {
		width: 40%;
	}
`;

const H1 = styled.h2`
	padding: 2rem 1rem 1rem 1rem;
`;

const H2 = styled.h3`
	font-size: 1.1rem;
	margin-bottom: -5rem;
`;

export default Song;
