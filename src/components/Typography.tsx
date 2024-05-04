import styled from "styled-components"

const variantClasses: { [key: string]: string } = {
    "display 2xl": "font-size: 64px; font-weight: 400; line-height: 80px;",
    "display 2xl semibold": "font-size: 64px; font-weight: 600; line-height: 80px;",
    "display xl": "font-size: 56px; font-weight: 400;",
    "display xl semibold": "font-size: 56px; font-weight: 600; line-height: 72px;",
    "display lg": "font-size: 48px; font-weight: 400;",
    "display md": "font-size: 36px; font-weight: 400;",
    "display sm": "font-size: 30px; font-weight: 400;",
    "display xs": "font-size: 24px; font-weight: 400;",
}

//Define the HTML tags that can be used
type HTMLTag = keyof JSX.IntrinsicElements;

const StyledTypography = styled.div<{variantclass: keyof typeof variantClasses}>`
    ${props => variantClasses[props.variantclass]}
`

interface TypographyProps {
    children: React.ReactNode;
    variant?: HTMLTag; 
    variantClass: keyof typeof variantClasses;
}

function Typography({ children, variant, variantClass }: TypographyProps) {
  
    const Tag = variant || "div";
    return (
        <StyledTypography as={Tag} variantclass={variantClass}>
            {children}
        </StyledTypography>
    )
}

export default Typography