import styled from "styled-components";
import PrimaryButton from "@components/PrimaryButton";
import Logo from "@components/Logo";
import ModeButton from "@components/ModeButton";

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem 112px;
	backdrop-filter: blur(10px);
	z-index: 100;
	@media screen and (max-width: 768px) {
		padding: 1rem 40px;
	}
`;

const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	animation: moveInLeft 1s ease-out;

	@keyframes moveInLeft {
		0% {
			opacity: 0;
			transform: translateX(-10rem);
		}
		80% {
			transform: translateX(1rem);
		}
		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
`;

const StyledActions = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	animation: moveInRight 1s ease-out;

	@keyframes moveInRight {
		0% {
			opacity: 0;
			transform: translateX(10rem);
		}
		80% {
			transform: translateX(-1rem);
		}
		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
`;

function Index() {
	//Obtain mode from context

	return (
		<StyledNav>
			<StyledLogo>
				<Logo />
			</StyledLogo>
			<StyledActions>
				<ModeButton />
				<PrimaryButton title="Get Early Access" />
			</StyledActions>
		</StyledNav>
	);
}

export default Index;
