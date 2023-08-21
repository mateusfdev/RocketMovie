
import { LiaHandSpockSolid } from 'react-icons/lia'
import { Container, Profile, Logout } from './styles'


export function Header(){
  return(
    <Container>

      <Logout>
        <LiaHandSpockSolid />
        <h2>RocketMovies</h2>
      </Logout>

      <Profile>
        <div>
          <span>Bem-vindo</span>
          <strong>MateusFDev</strong>
        </div>
        <img
          src='http://github.com/mateusfdev.png'
          alt='foto de perfil'
        />
      </Profile>
    </Container>
  )
}