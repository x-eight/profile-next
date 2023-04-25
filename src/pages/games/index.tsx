import { NextPage } from "next";
import React, { useEffect, useState, FC } from "react";
import { CardGame } from "../../components/card-games";
import { Layout } from "../../components/layouts";
import { Box, Center, HStack } from "@chakra-ui/react";
import SelectGames from "./selectList";

const games = [
  {
    id:1,
    cover:
      "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    title: "Memory Game",
    description: "FInd the pair of images in the group of cards",
  },
  {
    id:2,
    cover:
      "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    title: "Tic Tac Toe",
    description: "a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares",
  },
];

const Game: NextPage = () => {
  let [gameId, setGameId] = useState(0)

  return (
    <Layout title="Game">
      <Center py={8}>
        <HStack spacing={7} display={{ base: "row", md: "flex" }}>
          {games.map((g, i) => (
            <CardGame
              key={i}
              id={g.id}
              cover={g.cover}
              title={g.title}
              description={g.description}
              setGameId={setGameId}
            />
          ))}
        </HStack>
      </Center>
      <Box>
        {SelectGames(gameId)}
      </Box>
    </Layout>
  );
};

export default Game;
