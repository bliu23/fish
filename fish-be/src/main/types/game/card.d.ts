export interface ICard {
  suit: ISuit;
  value: IValue;
}

export enum ISuit {
  Club,
  Diamond,
  Heart,
  Spade,
}

// Card values. Seven is exempt because it does not exist in this game
export enum IValue {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}
