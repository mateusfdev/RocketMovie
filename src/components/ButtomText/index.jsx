import {Container } from './styles'
import { BiLeftArrowCircle } from 'react-icons/bi'

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, loading, ...rest}) {
  return (
    <Container
    type='button'
    disabled={loading}
    {...rest}
    >
    <BiLeftArrowCircle />
    {loading ? 'Carregando...' : title}
  </Container>
  )
}