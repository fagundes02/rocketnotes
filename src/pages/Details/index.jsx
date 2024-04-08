import {Container, Links, Content} from './styles'

import { Header } from '../../components/Header'

import { Button } from '../../components/Button'

import { Section } from '../../components/Section'

import { ButtonText } from '../../components/ButtonText'


import { Tag } from '../../components/Tag'


export function Details() {
    return (
    <Container>
        <Header/>
        <main>
            <Content>

        <ButtonText title="Excluir Nota"/>
        
        <h1>
            Introdução ao React
        </h1>

        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Distinctio dolorum suscipit magnam quis dolores sed qui magni 
            consequuntur delectus quae quam, dolore aliquam omnis repellat 
            blanditiis porro molestias maiores vel?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Distinctio dolorum suscipit magnam quis dolores sed qui magni 
            consequuntur delectus quae quam, dolore aliquam omnis repellat 
            blanditiis porro molestias maiores vel?
        </p>

        <Section title="Links úteis" >
            <Links>
             <li><a href="@"></a>https://www.rocketseat.com.br/</li>
             <li><a href="@"></a>https://www.rocketseat.com.br/</li>
            </Links>
        </Section>


        <Section  title="Marcadores">
        <Tag title="Express"/>
        <Tag title="Nodejs"/>


        </Section>


         <Button title="Voltar"/>

         </Content>
        </main>
    </Container>
    )
}