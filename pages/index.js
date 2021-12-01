import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoGithub,
} from 'react-icons/io5'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a developer based in Buenos Aires!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marco Iurman
          </Heading>
          <p>Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/marco.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a freelance engineer in test and developer based in Buenos Aires
          with a passion for building and testing software. 
          I like planning and designing, and love to experience technology hands-on.
          There is always a new way to solve real-life problems with code. 
          When I am not online, I enjoy hiking and gaming, and spending time with
          friends and family.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Bahia Blanca, Buenos Aires, Argentina.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Finished highschool and started doing freelance mainly involving
          Ecommerce, python data scraping and bug-fixing.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          SSR QA Tech Lead of Practia. 
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Secureauth platform's team SDET.  
        </BioSection>
        <BioSection>
          <BioYear>2020 - Present</BioYear>
          Senior Engineer in Test for two consulting companies.  
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Python, Hacking and Pentesting, Web3 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nullwiz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @nullwiz
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
              Medium posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
