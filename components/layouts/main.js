import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import GhostLoader from '../ghost-loader'
import Boo from '../../lib/Boo_glb'
const LazyGhost = dynamic(() => import('../ghost'), {
  ssr: false,
  loading: () => <GhostLoader />
})


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Morten's Homepage" />
        <meta name="author" content="Morten Berge" />
        <meta name="author" content="bergepro" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Morten Berge" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Morten Berge" />
        <meta name="og:title" content="Morten Berge" />
        <meta property="og:type" content="website" />
        <title>Morten Berge - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        
        <LazyGhost />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main