import MockupSVG from "@assets/mockup_hero.svg";
import styled from "styled-components";

const StyledMockupImage = styled.img`
	width: 100%;
	height: auto;
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
	aspect-ratio: attr(width) / attr(height);
	animation: fadeIn 1s ease-in-out;
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

function MockupImage() {
	return <StyledMockupImage src={MockupSVG} alt="Mockup" />;
}

export default MockupImage;
