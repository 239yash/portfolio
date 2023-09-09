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
  FaNodeJs,
  FaPython,
  FaReact,
  FaJava,
  FaLinkedinIn,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiLeetcode,
  SiMedium,
} from 'react-icons/si';
import '../index.css';
import image from '../sketch-pic.jpeg';

// eslint-disable-next-line require-jsdoc
export default function Header() {
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
                fontWeight={800}
                fontSize={{base: 20, md: 40}}
                alignItems="center"
                lineHeight="110%"
                fontFamily="mono"
              >
                Hello, I'm Yash <span className="wave"> 🚀🚀</span>
              </Heading>
            </Box>
            {/* Heading Container Ends */}

            {/* About Container */}
            <Box alignItems="center">
              <Text
                fontWeight={300}
                fontFamily="mono"
                fontSize={{md: 'large'}}
                marginX="1"
                boxSizing="content-box"
                textAlign={'center'}
                className='text-color'
              >
                <span className="highlighted-word">A software engineer
                </span>,{' '}
                <span className="highlighted-word">full-stack domain</span> and
                currently at -{' '}
                <span className="highlighted-word">
                  Bajaj Finserv Health, Pune.
                </span>{' '}
                Ex-GupShup, Ex-Zorp.
                <br/>
                <span>(2 YOE - FullTime + Internships)</span>
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
                fontFamily="mono"
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
              spacing="5"
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
                <Icon as={FaNodeJs} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiExpress} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={SiMysql} />
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
                fontFamily="mono"
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
              fontFamily="mono"
              fontSize={{md: 'large'}}
              marginX="1"
              boxSizing="content-box"
              textAlign={'center'}
              className='text-color'
            >
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link href="https://medium.com/@239yash/how-to-create-custom-annotations-in-springboot-for-validating-data-5ae765d2b001" isExternal>
                  How to create custom annotations in{' '}
                  SpringBoot for validating data 🚀. (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link href="https://medium.com/@239yash/snappy-data-compression-in-nodejs-2701f6f399ae" isExternal>
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
                <Link href="https://medium.com/@239yash/reducing-docker-image-build-time-by-caching-node-modules-and-using-a-multi-stage-build-process-f5d84e196346" isExternal>
                  Reducing Docker image build time by Caching Node modules,{' '}
                  and using a multi-stage build process. (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link href="https://medium.com/@239yash/how-to-implement-redis-pipelining-in-node-js-using-ioredis-ba3eab32f1a7" isExternal>
                  How to implement Redis pipelining in Node.Js using ioredis. (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link href="https://medium.com/@239yash/processing-bulk-mongodb-documents-using-batch-cursors-in-python-f6fe57fe01ba" isExternal>
                  Processing bulk MongoDB documents using batch cursors{' '}
                  in Python using pymongo. (Link 🔗)
                </Link>
              </Text>
              <Text
                borderColor={useColorModeValue('gray.500', 'whiteAlpha.200')}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
                borderWidth="0.2rem"
              >
                <Link href="https://medium.com/@239yash/deploying-react-applications-using-docker-in-2-ways-multistage-builds-and-nginx-77e6e95417c3" isExternal>
                Deploying React Applications using Docker in 2 ways{' '}
                — MultiStage builds, and Nginx. (Link 🔗)
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
                fontFamily="mono"
              >
                Links
              </Text>
            </Box>
            <Stack
              as={Box}
              direction={'row'}
              justify={'center'}
              marginY="5"
              fontSize="2.9rem"
              spacing="5"
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
                <Link href="https://medium.com/@239yash" isExternal>
                  <Icon as={SiMedium} />
                </Link>
              </Text>
              <Text>
                <Link href="mailto:239yash@gmail.com" isExternal>
                  <Icon as={FiMail} />
                </Link>
              </Text>
            </Stack>
            {/* Links Container Ends */}
          </Stack>
        </Container>
      </Flex>
    </>
  );
}
