import NoteImageWebP from '@assets/notebook.webp'
import PlayIcon from '@assets/play-icon.svg'
import styled from 'styled-components'

const StyledNoteImage = styled.div`
  position: relative;
  width: 100%;
`

const StyledPlayButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  left: 50%;
  bottom: -28px;
  padding: 16px 20px;
  transform: translateX(-50%);
  background-color: #FFFFFF;
  border: 0px;
  border-radius: 100px;
  cursor: pointer; 
`

const StyledMockupImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 768/432;
`

function NoteImage() {
  return (
    <StyledNoteImage>
      <StyledMockupImage src={NoteImageWebP} alt="Notebook" loading='lazy' decoding='async' />
      <StyledPlayButton>
        {/* <PlayIcon /> */}
        <img src={PlayIcon} alt="Play icon" />
        <span>See it in action (2min)</span>
      </StyledPlayButton>
    </StyledNoteImage>
  )
}

export default NoteImage