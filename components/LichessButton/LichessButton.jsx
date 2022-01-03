import styled from 'styled-components'
import Image from 'next/image'
import { Button } from '../Button'
import lichess from '../../public/images/lichess.svg'

export const LichessButton = ({ href }) => (
  <Button href={href}>
    <ImageWrapper>
      <Image width={48} height={48} src={lichess} layout="fixed" />
    </ImageWrapper>
    lichess.org
  </Button>
)

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`
