import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSecureauth from '../public/images/works/secureauth.png'
import thumbTotalPerformance from '../public/images/works/totalperformance.png'
import thumbPractia from '../public/images/works/practia.png'
import thumbAgilethought from '../public/images/works/agilethought.png'

const Works = () => (
  <Layout title="Experience">
    <Container Container maxWidth={"100ch"} >
      <Heading as="h3" fontSize={20} mb={4}>
      Experience
      </Heading>
      <Divider my={6} />

      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        <Section>
          <WorkGridItem id="secureauth"  thumbnail={thumbSecureauth}>
          </WorkGridItem>
        </Section>


        <Section>
          <WorkGridItem
            id="totalperformance"
           
            thumbnail={thumbTotalPerformance}
          >
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="agilethought"
            thumbnail={thumbAgilethought}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="practia" thumbnail={thumbPractia} >
          </WorkGridItem>
        </Section>
      </SimpleGrid>
        <Divider my={6} />
    </Container>
  </Layout>
)

export default Works
