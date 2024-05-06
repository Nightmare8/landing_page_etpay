import SlackSVG from "@assets/svg/slack.svg";
import MarketoSVG from "@assets/svg/marketo.svg";
import GoogleAnalitycsSVG from "@assets/svg/google-analytics.svg";
import HubSpotSVG from "@assets/svg/hubspot.svg";
import MonkeySVG from "@assets/svg/monkey.svg";
import QuickBookSVG from "@assets/svg/quickbook.svg";
import ZapierSVG from "@assets/svg/zapier.svg";

import styled from "styled-components";

const StyledCardIconTech = styled.article`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	img {
		width: 140px;
		height: 140px;
	}
	:hover {
		transform: scale(1.1);
		transition: transform 0.5s;
	}
`;

const StyledTooltip = styled.span`
	cursor: default;
	width: max-content;
	background-color: ${(props) => props.theme.colors.primary[600]};
	color: white;
	font-size: larger;
	text-align: center;
	padding: 5px 10px;
	border-radius: 6px;

	/* Position the tooltip text - to top*/
	position: absolute;
	z-index: 100;
	bottom: 120%;
	left: 50%;
	transform: translateX(-55%);
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s, visibility 0.3s;
	${StyledCardIconTech}:hover & {
		opacity: 1;
		visibility: visible;
	}
	::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: whitesmoke transparent transparent transparent;
	}
`;

function CardIconTech({ tech }: { tech: string }) {
	const ImagesTech: { [key: string]: string } = {
		slack: SlackSVG,
		marketo: MarketoSVG,
		"google-analytics": GoogleAnalitycsSVG,
		hubspot: HubSpotSVG,
		mailchimp: MonkeySVG,
		quickbook: QuickBookSVG,
		zapier: ZapierSVG,
	};

	return (
		<StyledCardIconTech>
			<img src={ImagesTech[tech]} alt={tech} />
			<StyledTooltip>{tech}</StyledTooltip>
		</StyledCardIconTech>
	);
}

export default CardIconTech;
