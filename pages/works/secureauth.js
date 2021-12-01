import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Secureauth">
    <Container>
      <Title>
        Secureauth <Badge>2019-late 2020</Badge>
      </Title>
      <P>
        Secureauth was one of the greatest companies I worked with. 

        I always loved security and hacking, and I had the experience to work with 
        amazing people while having a non-fixed role, development and testing. 
        While in the Platform team, we worked in a microservice-oriented architecture,
        and we pretty much did it all. We planted the seed for the future of the company,
        and we developed in Golang and Java, and testing was done in Python. 
        We had a "everything is automated" policy. I worked on Frontend (React), 
        Backend (Golang & Java) while leading the QA efforts. 
        So I could track bugs, and also fix them. We performance-tested heavily with Jmeter,
        cause we knew we were going to have lots of users (clients such as Walmart, Starbucks, United Airlines).
        We found lots of bugs doing this, but we managed to fix them all working closely with Devops 
        to find the sweet-spot for the K8s cluster settings.
        Im very proud to say that the testing solution that we build is currently being used in 
        all the teams in the company.
        There are many aspects of what we built that I would be happy to discuss with 
        anyone that's interested in a secured workflow-based authentication solution.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.secureauth.com/">
            Secureauth <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Electron, Golang, Java SpringBoot</span>
        </ListItem>
        <ListItem>
          <Meta>Testing Stack</Meta>
          <span>Python, Jmeter  Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>CI</Meta>
          <span>Jenkins</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/adaptive_auth.webp" alt="Secureauth" />

    </Container>
  </Layout>
)

export default Work
