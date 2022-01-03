import styled from 'styled-components'
import { LichessButton } from '../LichessButton'
import { ChessDotComButton } from '../ChessDotComButton'

export const FindUs = () => (
  <StyledFindUs>
    Find us on
    <ButtonWrapper>
      <LichessButton href="https://lichess.org/team/tokyo-check-mates" />
      <ChessDotComButton href="https://www.chess.com/club/tokyo-check-mates" />
    </ButtonWrapper>
  </StyledFindUs>
)

const StyledFindUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px auto;
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 8px;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`
