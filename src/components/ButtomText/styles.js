import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({theme}) => theme.COLORS.ROSE};
  border: none;
  font-size: 16px;
  display:flex;
  align-content: center;
  gap: 6px;
  margin: 48px 64px;


  > svg {
    color: ${({theme}) => theme.COLORS.ROSE};
    font-size: 20px;
  }
`;