import { NextPage } from 'next'
import { CardGame } from '../../components/card-games'
import { Layout } from '../../components/layouts'
import { Box, Center, HStack } from '@chakra-ui/react';
import { MemoryGame } from '../../components/memory-game';

const games = [
  {cover:"https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",title:"Memory Game",description:"FInd the pair of images in the group of cards"},
  {cover:"https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",title:"John Doe",description:"Frontend Developer"},
]

const Game: NextPage = () => {
  return (
    <Layout title="Game">
      <Center py={8}>
      <HStack
              spacing={7}
              display={{ base: 'row', md: 'flex' }}>
              {games.map((g) => (
        <CardGame cover={g.cover} avatar={g.avatar} title={g.title} description={g.description}/> 
      ))}
      </HStack>
      </Center>
      <Box>
        <MemoryGame/>
      </Box>
    </Layout>
  )
}

export default Game