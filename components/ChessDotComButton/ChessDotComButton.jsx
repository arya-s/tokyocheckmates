import styled from 'styled-components'
import Image from 'next/image'
import { Button } from '../Button'
import chessdotcom from '../../public/images/chessdotcom.png'

export const ChessDotComButton = ({ href }) => (
  <Button href={href}>
    <ImageWrapper>
      <Image width={48} height={48} src={chessdotcom} layout="fixed" />
    </ImageWrapper>
    Chess.com
  </Button>
)

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
