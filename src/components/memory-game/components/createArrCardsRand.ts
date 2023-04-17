import { symbols } from "./symbols";

export function arrCardsRand(numCards: number) {
  const halfCards = numCards / 2;
  const arr = new Array<any>();
  let i = 0,
    j = 0;
  while (i < numCards) {
    if (j === halfCards) j = 0;
    let random = Math.floor(Math.random() * numCards); // 0 -7

    if (!arr.some((item) => item.id === random)) {
      arr.push({
        id: random,
        symbol: symbols[j],
        bind: j,
        rotate: false,
        validating: 0,
        pinUp: 0,
      });
      i++;
      j++;
    }
  }

  return arr;
}
