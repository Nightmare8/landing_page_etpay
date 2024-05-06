import NoteImageWebP from "@assets/notebook.webp";
import PlayIcon from "@assets/play-icon.svg";
import styled from "styled-components";

const StyledNoteImage = styled.div`
	position: relative;
	width: 100%;
`;

const StyledPlayButton = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	left: 50%;
	bottom: -28px;
	padding: 16px 20px;
	transform: translateX(-50%);
	background-color: #ffffff;
	border: 0px;
	border-radius: 100px;
	cursor: pointer;
	transition: scale 0.3s ease-in-out;
	:hover {
		scale: 1.05;
	}
`;

const StyledMockupImage = styled.img`
	width: 100%;
	height: auto;
	max-width: 100%;
	max-height: 100%;
	aspect-ratio: 768/432;
	animation: showImage 1s ease-in-out;
	@keyframes showImage {
		from {
			opacity: 0;
			scale: 25%;
		}
		to {
			opacity: 1;
			scale: 100%;
		}
	}
`;

function NoteImage() {
	return (
		<StyledNoteImage>
			<StyledMockupImage
				src={NoteImageWebP}
				alt="Notebook"
				loading="lazy"
				decoding="async"
			/>
			<StyledPlayButton>
				{/* <PlayIcon /> */}
				<img src={PlayIcon} alt="Play icon" />
				<span>See it in action (2min)</span>
			</StyledPlayButton>
		</StyledNoteImage>
	);
}

export default NoteImage;
