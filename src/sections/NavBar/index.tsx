import styled from "styled-components"
import PrimaryButton from "@components/PrimaryButton"
import Logo from "@components/Logo"

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
`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

function Index() {
  return (
    <StyledNav>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <PrimaryButton title="Get Early Access" />
    </StyledNav>
  )
}

export default Index