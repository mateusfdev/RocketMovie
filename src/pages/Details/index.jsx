
import { ButtonText } from '../../components/ButtomText'
import { Section } from '../../components/Section'

import { Header } from '../../components/Header' 
import { Stars } from '../../components/stars'
import { Tag } from '../../components/Tag'
import { Container } from './styles.js'


import { BiLeftArrowCircle } from 'react-icons/bi'

export function Details() {
  return(    
    <Container>
      <Header />
        <Section>
          <ButtonText title='Voltar'>
            <BiLeftArrowCircle />
          </ButtonText>
        
          <Stars title='Super Mario Bros'></Stars>

          <Tag title='Comédia'></Tag>
          <Tag title='Romance'></Tag>
          <Tag title='Familia'></Tag>
          <Tag title='Animação'></Tag>
        </Section>


        <p>        
          Super Mario é uma icônica série de videogames desenvolvida pela Nintendo, que segue as aventuras do encanador Mario e seu irmão Luigi em diversos reinos fantásticos para resgatar a Princesa Peach das garras do vilão Bowser. Com jogabilidade cativante, design criativo de níveis e personagens carismáticos, a franquia se tornou um símbolo da cultura pop e um pilar da indústria de jogos eletrônicos, deixando uma marca indelével na história dos videogames.
        </p>
    
    </Container>
  )
}