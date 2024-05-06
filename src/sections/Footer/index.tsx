import styled from "styled-components";

const StyledContent = styled.section`
	background-color: ${(props) => props.theme.colors.neutral[900]};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-inline: 112px;
	padding-top: 100px;
	padding-bottom: 20px;
	gap: 48px;
	@media screen and (max-width: 768px) {
		padding-inline: 24px;
		padding-top: 80px;
		padding-bottom: 40px;
	}
`;
import "./styles.css";
import Typography from "@components/Typography";
import LogoSVG from "@components/LogoSVG";
import PrimaryButton from "@components/PrimaryButton";

function index() {
	return (
		<StyledContent>
			<section className="footer_event">
				<Typography variant="h2" variantClass="display lg semibold">
					Create your event with RegiM
				</Typography>
				<Typography variant="p" variantClass="p">
					Leveraging our virtual and live event experience, Hubilo
					offers everything you need to set up your next hybrid event
					from registration to executing a flawless event.
				</Typography>
				<PrimaryButton title="Get Early Access" />
			</section>
			<footer className="footer_info">
				<div className="footer_info_container">
					<hr />
					<LogoSVG />
					<hr />
				</div>
				<div className="footer_info_text">
					<Typography
						variant="p"
						variantClass="p xs"
						type="neutral"
						numberPallete={400}
					>
						© RegiM 2022. Made with love by{" "}
						<span className="span_white">Landify</span>{" "}
					</Typography>
					<Typography
						variant="p"
						variantClass="p xs"
						type="neutral"
						numberPallete={400}
					>
						For further details, drop a mail to{" "}
						<a href="mailto:hello@landify.design">
							hello@landify.design
						</a>
					</Typography>
				</div>
			</footer>
		</StyledContent>
	);
}

export default index;
