import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Total Performance">
    <Container Container maxWidth={"100ch"}>
      <Title>
         <Badge>2021-</Badge>
      </Title>
      <P>
        At TotalPerformance Consulting, I worked with Billtrust. 
        Billtrust provides advanced AR automation, digitalizing the payment
        workflow for big companies, changing the old cashflow to something modern,
        and makes it look easy.
        Particularly, I worked at CashApp, the core of their service.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>

        <ListItem>
          <Meta>Testing Stack</Meta>
          <span>C#, JMeter, Selenium, Applitools</span>
        </ListItem>
        <ListItem>
          <Meta>CI</Meta>
          <span>Jenkins</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
