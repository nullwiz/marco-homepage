import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { SimpleGrid  } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Agilethought">
    <Container>
      <Title>
        Agilethought <Badge>2021-</Badge>
      </Title>
      <P>
        
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Testing Stack</Meta>
          <span>C#, Selenium, Postman, JMeter</span>
        </ListItem>
        <ListItem>
          <Meta>Coding Stack</Meta>
          <span>C#, .NET 5, Postgres, Docker</span>
        </ListItem>
        <ListItem>
          <Meta>CI</Meta>
          <span>Azure Devops</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Projects</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
            <Badge mr={2}>Kirkland & Ellis</Badge>
            In this project, I developed a testing framework for the Funded platform,
            a platform that was introduced to fund investments, for the biggest law 
            firm in the world. The application was fairly complex. 
            And as always, being in charge of the creation of the testing framework, 
            I designed the framework with scalability in mind, that way we cut runtime
            for tests significantly. I also led new automation testers into the field, 
            providing mentorship and overeseeing their work.
        </ListItem>
        <Link href="https://www.kirkland.com/"> Kirkland & Ellis</Link>

      </UnorderedList>


    </Container>
  </Layout>
)

export default Work
