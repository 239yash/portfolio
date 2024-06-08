/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Img,
} from '@chakra-ui/react';
import {FiMail, FiGithub} from 'react-icons/fi';
import {TbBrandCpp} from 'react-icons/tb';
import {
  FaJs,
  FaPython,
  FaReact,
  FaJava,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiMedium,
  SiPostgresql,
  SiLeetcode,
  SiPeerlist,
} from 'react-icons/si';
import '../index.css';
import image from '../sketch-pic.jpeg';

// eslint-disable-next-line require-jsdoc
export default function Header() {
  const font = 'IBM Plex Mono';
  return (
    <>
      <Flex>
        <Container maxW="60ch">
          <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            py={{base: 30, md: '5rem'}}
            direction="column"
          >
            {/* Display Picture */}
            <Box w="36" marginX="auto">
              <Img borderRadius="full" src={image} />
            </Box>
            {/* Display Picture Ends */}

            {/* Heading Container */}
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.200')}
              paddingX="6"
              paddingY="3"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Heading
                fontWeight={300}
                fontSize={{base: 20, md: 40}}
                alignItems="center"
                lineHeight="110%"
                fontFamily={font}
              >
                Hello, I'm Yash
              </Heading>
            </Box>
            {/* Heading Container Ends */}

            {/* About Container */}
            <Box alignItems="center">
              <Text
                fontWeight={300}
                fontFamily={font}
                fontSize={{md: 'large'}}
                marginX="1"
                boxSizing="content-box"
                textAlign={'center'}
                className="text-color"
              >
                <span className="highlighted-word">A polyglot software engineer</span>,{' '}
                <span className="highlighted-word">full-stack domain</span> and
                currently at -{' '}
                <span className="highlighted-word">BharatPe, Mumbai.</span>{' '}
                Ex-Bajaj Finserv Health, Ex-GupShup, Ex-Zorp. (3 YOE -
                FullTime + Internships)
                <br></br>
                <br></br>
                {/* <span className="highlighted-word">A software engineer</span>,{' '}
                <span className="highlighted-word">full-stack domain</span> and
                currently at -{' '}
                <span className="highlighted-word">BharatPe, Mumbai.</span>{' '}
                Ex-Bajaj Finserv Health, Ex-GupShup, Ex-Zorp. (2.5 YOE -
                FullTime + Internships) */}
              </Text>
            </Box>
            {/* About Container Ends */}

            {/* Tech Stack Container */}
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.200')}
              paddingX="6"
              paddingY="2"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Text
                fontWeight={300}
                fontSize={{base: 20, md: 40}}
                alignItems="center"
                fontFamily={font}
              >
                Tech Stacks
              </Text>
            </Box>
            <Stack
              paddingX="12"
              justify="center"
              direction="row"
              wrap="wrap"
              fontSize="3rem"
              spacing="4"
              className="text-color"
            >
              <Link pointerEvents="none">
                <Icon as={TbBrandCpp} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={FaJava} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={FaPython} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiSpringboot} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={FaJs} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={FaReact} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiPostgresql} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiMongodb} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiRedis} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiDocker} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiKubernetes} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiGithub} />
              </Link>
            </Stack>
            {/* Tech Stack Container Ends */}

            {/* Medium Blogs Container */}
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.200')}
              paddingX="6"
              paddingY="2"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Text
                fontWeight={300}
                fontSize={{base: 20, md: 40}}
                alignItems="center"
                fontFamily={font}
              >
                Blogs
              </Text>
            </Box>
            <Stack
              as={Box}
              direction={'column'}
              justify={'center'}
              marginY="5"
              spacing="5"
              fontWeight={200}
              fontFamily={font}
              fontSize={{md: 'large'}}
              marginX="1"
              boxSizing="content-box"
              textAlign={'center'}
              className="text-color"
            >
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link
                  href="https://medium.com/@239yash/building-resiliency-in-spring-boot-applications-in-case-of-dependency-failures-implementing-e9152d406c82"
                  isExternal
                >
                  Building resiliency in spring boot applications in case of dependency failures — Implementing Circuit Breaker (Resilience4j)🚀 (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link
                  href="https://medium.com/@239yash/how-to-create-custom-annotations-in-springboot-for-validating-data-5ae765d2b001"
                  isExternal
                >
                  How to create custom annotations in SpringBoot for validating
                  data 🚀. (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link
                  href="https://medium.com/@239yash/snappy-data-compression-in-nodejs-2701f6f399ae"
                  isExternal
                >
                  Snappy data compression in NodeJs. (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link
                  href="https://medium.com/@239yash/reducing-docker-image-build-time-by-caching-node-modules-and-using-a-multi-stage-build-process-f5d84e196346"
                  isExternal
                >
                  Reducing Docker image build time by Caching Node modules, and
                  using a multi-stage build process. (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link
                  href="https://medium.com/@239yash/how-to-implement-redis-pipelining-in-node-js-using-ioredis-ba3eab32f1a7"
                  isExternal
                >
                  How to implement Redis pipelining in Node.Js using ioredis.
                  (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link
                  href="https://medium.com/@239yash/processing-bulk-mongodb-documents-using-batch-cursors-in-python-f6fe57fe01ba"
                  isExternal
                >
                  Processing bulk MongoDB documents using batch cursors in
                  Python using pymongo. (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link
                  href="https://medium.com/@239yash/deploying-react-applications-using-docker-in-2-ways-multistage-builds-and-nginx-77e6e95417c3"
                  isExternal
                >
                  Deploying React Applications using Docker in 2 ways —
                  MultiStage builds, and Nginx. (Link 🔗)
                </Link>
              </Text>
            </Stack>
            {/* Medium Blogs Container Ends */}

            {/* Links Container */}
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.200')}
              paddingX="6"
              paddingY="2"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Text
                fontWeight={300}
                fontSize={{base: 20, md: 40}}
                alignItems="center"
                fontFamily={font}
              >
                Links
              </Text>
            </Box>
            <Stack
              as={Box}
              justify="center"
              direction="row"
              wrap="wrap"
              marginY="5"
              fontSize="2rem"
              spacing="3"
            >
              <Text>
                <Link href="https://github.com/239yash" isExternal>
                  <Icon as={FiGithub} />
                </Link>
              </Text>
              <Text>
                <Link href="https://linkedin.com/in/yasx" isExternal>
                  <Icon as={FaLinkedinIn} />
                </Link>
              </Text>
              <Text>
                <Link href="https://leetcode.com/239yash" isExternal>
                  <Icon as={SiLeetcode} />
                </Link>
              </Text>
              <Text>
                <Link href="https://peerlist.io/239yash" isExternal>
                  <Icon as={SiPeerlist} />
                </Link>
              </Text>
              <Text>
                <Link href="https://medium.com/@239yash" isExternal>
                  <Icon as={SiMedium} />
                </Link>
              </Text>
              <Text>
                <Link href="https://twitter.com/239yash" isExternal>
                  <Icon as={FaTwitter} />
                </Link>
              </Text>
              <Text>
                <Link href="mailto:239yash@gmail.com" isExternal>
                  <Icon as={FiMail} />
                </Link>
              </Text>
            </Stack>
            {/* Links Container Ends */}

            {/* CopyRight Container */}
            <Box alignItems="center">
              <Text
                fontWeight={300}
                fontFamily={font}
                fontSize={{md: 'small'}}
                boxSizing="content-box"
                textAlign={'center'}
                className="text-color"
              >
                <span >© 2024 by Yash Gupta</span>
              </Text>
            </Box>
            {/* CopyRight Container Ends */}
          </Stack>
        </Container>
      </Flex>
    </>
  );
}
