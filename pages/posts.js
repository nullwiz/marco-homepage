import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbSoftwareTale from '../public/images/contents/software_tale.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container Container maxWidth={"100ch"} >
      <Heading as="h3" fontSize={20} mb={4}>
        Medium Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Software Journey"
            thumbnail={thumbSoftwareTale}
            href="https://nullwiz.medium.com/my-software-testing-tale-58c17e596bf7"
          />

        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
