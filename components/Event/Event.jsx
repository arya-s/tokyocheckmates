import styled from 'styled-components'
import { Map } from '../Map'

export const Event = ({ location, mapLocation, time }) => (
  <StyledEvent>
    <Map location={mapLocation} />
    <Entry>
      <Heading>When</Heading>
      {time}
      <Heading>Where</Heading>
      {location}
    </Entry>
  </StyledEvent>
)

const StyledEvent = styled.div``

const Entry = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: auto 1fr;
`

const Heading = styled.strong`
  padding-right: 20px;
  text-decoration: underline;
`
