import styled from 'styled-components'

export const Map = ({ location }) => (
  <StyledMap
    loading="lazy"
    allowfullscreen
    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${location}`}
  />
)

const StyledMap = styled.iframe`
  width: 100%;
  height: 362px;
  border: 0;
`
