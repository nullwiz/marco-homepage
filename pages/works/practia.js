import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Practia">
    <Container>
      <Title>
        Practia <Badge>2018-2019</Badge>
      </Title>
      <P>
        At Practia's, I worked as a lead QA automating test cases and leading
        the search of bugs for Sancor Seguros, a client that was migrating
        it's 90's architecture to a modern platform. 
        This was my second job, so I was very grateful to Practia for letting me lead a team 
        so early in my career.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Testing Stack</Meta>
          <span>Python, Selenium, Postman, JMeter </span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
