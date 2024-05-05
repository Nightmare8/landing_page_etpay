import styled from "styled-components"

const variantClasses: { [key: string]: string } = {
    "display 2xl": "font-size: 64px; font-weight: 400; line-height: 80px;",
    "display 2xl semibold": "font-size: 64px; font-weight: 600; line-height: 80px;",
    "display xl": "font-size: 56px; font-weight: 400;",
    "display xl semibold": "font-size: 56px; font-weight: 600; line-height: 72px;",
    "display lg": "font-size: 48px; font-weight: 400;",
    "display lg semibold": "font-size: 48px; font-weight: 600;",
    "display md": "font-size: 36px; font-weight: 400;",
    "display sm": "font-size: 30px; font-weight: 400;",
    "display xs": "font-size: 24px; font-weight: 400;",
    "p": "font-size: 18px; font-weight: 400;",
    "p semibold": "font-size: 18px; font-weight: 600;",
    "p sm": "font-size: 16px; font-weight: 400;",
    "p xs": "font-size: 14px; font-weight: 400;",
}

//Define the HTML tags that can be used
type HTMLTag = keyof JSX.IntrinsicElements;

const StyledTypography = styled.div<{variantclass: keyof typeof variantClasses; type?:'primary' | 'secondary' | 'neutral'; numberPallete?: number;}>`
    ${props => variantClasses[props.variantclass]}
    color: ${props => props.theme.colors[props.type || 'primary'][props.numberPallete || 500]};
`

interface TypographyProps {
    children: React.ReactNode;
    variant?: HTMLTag; 
    variantClass: keyof typeof variantClasses;
    type?: 'primary' | 'secondary' | 'neutral';
    numberPallete?: number;
}

function Typography({ children, variant, variantClass, type, numberPallete }: TypographyProps) {
  
    const Tag = variant || "div";
    return (
        <StyledTypography as={Tag} variantclass={variantClass} type={type} numberPallete={numberPallete}>
            {children}
        </StyledTypography>
    )
}

export default Typography