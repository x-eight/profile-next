export interface logoType {
  id: number;
  name: string;
  path: string;
}

export const logos: logoType[] = [
  { id: 0, name: "dshare", path: "cards/DSHARE.png" },
  { id: 1, name: "cardano", path: "cards/cardano.png" },
  { id: 2, name: "dbond", path: "cards/DBOND.png" },
  { id: 3, name: "dogecoin", path: "cards/doge.png" },
  { id: 4, name: "duke", path: "cards/DUKE.png" },
  { id: 5, name: "ethereum", path: "cards/eth.png" },
  { id: 6, name: "lotto", path: "cards/lotto.png" },
  { id: 7, name: "bitcoin", path: "cards/bitcoin.png" },
];

export const logoCard: logoType = {
  id: 7,
  name: "card",
  path: "cards/card.png",
};

export function combineCards(cards: logoType[]): logoType[] {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

export function getCards(count: number): logoType[] {
  let test: logoType[] = logos;
  let cardSelevted = new Array<logoType>();

  for (let i = 0; i < count; i++) {
    let index = Math.floor(Math.random() * test.length);
    const aa = test.find((_, j) => j === index);
    if (aa) {
      test = test.filter((_, j) => j !== index);
      cardSelevted.push(aa);
    }
  }

  let newArray = cardSelevted
    .map((c) => {
      return [c, c];
    })
    .flat();

  newArray = combineCards(newArray);

  return newArray;
}
