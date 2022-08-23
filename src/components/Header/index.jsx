import {RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/Fernandabitten.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Fernanda Bittencourt</strong>
        </div>
      </Profile>
      <Logout>
      <RiShutDownLine />
      </Logout>
    </Container>
  )
}