import styled from "styled-components"
import EventSVG from '@assets/event.svg'
import RegistrationSVG from '@assets/registration.svg'
import BrandedSVG from '@assets/branded.svg'
import OrganizerSVG from '@assets/organizer.svg'
import AttendeeSVG from '@assets/attendee.svg'
import Calendar from '@assets/calendar.svg'

interface ImagesServices {
  [key: string]: string
}

const ImagesServices:ImagesServices = {
  'event': EventSVG,
  'registration': RegistrationSVG,
  'branded': BrandedSVG,
  'organizer': OrganizerSVG,
  'attendee': AttendeeSVG,
  'calendar': Calendar
}

const StyledCardTech = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1rem;

  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    word-wrap: break-word;
    padding-inline: 1rem;
    h2 {
      margin: 0;
    }
    p{
      margin: 0;
      text-align: center;
    }
  }
`

interface CardTechProps {
  title: string;
  description: string;
  image: string;
}

function CardTech({title, description, image} : CardTechProps) {
  return (
    <StyledCardTech>
      <img src={ImagesServices[image]} alt={title} />
      <header>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
    </StyledCardTech>
  )
}

export default CardTech