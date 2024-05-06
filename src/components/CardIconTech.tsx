import SlackSVG from "@assets/svg/slack.svg";
import MarketoSVG from "@assets/svg/marketo.svg";
import GoogleAnalitycsSVG from "@assets/svg/google-analytics.svg";
import HubSpotSVG from "@assets/svg/hubspot.svg";
import MonkeySVG from "@assets/svg/monkey.svg";
import QuickBookSVG from "@assets/svg/quickbook.svg";
import ZapierSVG from "@assets/svg/zapier.svg";

import styled from "styled-components";

const StyledCardIconTech = styled.article`
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
		</StyledCardIconTech>
	);
}

export default CardIconTech;
