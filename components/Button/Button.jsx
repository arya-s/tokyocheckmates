import styled from 'styled-components'

export const Button = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <StyledButton>{children}</StyledButton>
  </a>
)

const StyledButton = styled.button`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 8px;

  &:hover {
    background: #f5f5f5;
  }
`
