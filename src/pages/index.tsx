import { Box, Button } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Layout } from '../components/layouts'
import MainScreen from '../components/main'

const Home: NextPage = () => {
  return (
    <Layout>
      {/*<Header/> */}
      <MainScreen/>
      <Footer/>
    </Layout>
  )
}
export default Home
