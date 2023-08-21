import { styled } from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  margin-left: 64px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.COLORS.ROSE};
  


  >h1 {
    font-size: 28px;
    margin-right: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;