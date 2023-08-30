import styled from 'styled-components'

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 14px;
  border-radius: 5px;
  margin-left: 38px;
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.ROSEOP};
`;