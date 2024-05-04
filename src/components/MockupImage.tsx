import MockupSVG from '@assets/mockup_hero.svg'
import styled from 'styled-components'


const StyledMockupImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  aspect-ratio: 664/702;
`

function MockupImage() {
  return (
    <StyledMockupImage src={MockupSVG} alt="Mockup" />
  )
}

export default MockupImage