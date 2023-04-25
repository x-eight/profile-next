import { Flex, Text } from "@chakra-ui/react";
import React, { useState,FC, useEffect } from "react";

type Props = {
    isStart:boolean
  };
  

export const Cronometro: FC<Props> = ({isStart}) => {
    const [hora, setHora] = useState(0);
    const [minuto, setMinuto] = useState(0);
    const [segundo, setSegundo] = useState(0);
    const [running, setRunning] = useState(false);
  
    useEffect(() => {
      let intervalo:NodeJS.Timer
      if (running) {
        intervalo = setInterval(() => {
          setSegundo(segundo => segundo + 1);
        }, 1000);
      }
      return () => clearInterval(intervalo);
    }, [running]);
  
    useEffect(() => {
      if (segundo === 60) {
        setSegundo(0);
        setMinuto(minuto => minuto + 1);
      }
      if (minuto === 60) {
        setMinuto(0);
        setHora(hora => hora + 1);
      }
    }, [segundo, minuto]);
  
   useEffect(() => {
   if (isStart) {
    setRunning(isStart);
   } else {
    setHora(0);
    setMinuto(0);
    setSegundo(0);
    setRunning(isStart);
   }
  }, [isStart]);

  return (
    <Flex justifyContent="center" m="1rem 0rem">
      <Text>{hora < 10 ? `0${hora}` : hora}:{minuto < 10 ? `0${minuto}` : minuto}:{segundo < 10 ? `0${segundo}` : segundo}</Text>
    </Flex>
  );
}