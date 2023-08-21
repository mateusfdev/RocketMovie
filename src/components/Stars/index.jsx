import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


// eslint-disable-next-line react/prop-types
export function Stars({ title }){
  return(
    <Container>
      <h1>{title}</h1>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiOutlineStar/>

    </Container>
  )
}