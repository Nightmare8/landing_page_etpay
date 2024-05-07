import styled from "styled-components";
import Typography from "./Typography";

const StyledButton = styled.button`
	background-color: ${(props) => props.theme.colors.primary[600]};
	color: white;
	padding: 10px 16px 10px 16px;
	border-radius: 0.25rem;
	border: none;
	cursor: pointer;
	width: max-content;
	height: 40px;
	transition: background-color 0.2s, scale 0.2s;
	&:hover {
		background-color: #0056b3;
		scale: 1.05;
	}
`;

function PrimaryButton({ title }: { title: string }) {
	return (
		<StyledButton>
			<Typography
				variant="p"
				variantClass="p xs semibold"
				type="neutral"
				numberPallete={100}
			>
				{title}
			</Typography>
		</StyledButton>
	);
}

export default PrimaryButton;
