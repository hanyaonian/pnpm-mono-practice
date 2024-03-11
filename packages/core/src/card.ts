export enum CardFace {
  Ace = 'A',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eigth = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'J',
  Queen = 'Q',
  King = 'K'
}

export enum CardSuit {
  Heart = 'Heart',
  Spade = 'Spade',
  Diamond = 'Diamond',
  Club = 'Club'
}

export interface Card {
  suit: CardSuit;
  face: CardFace;
}
