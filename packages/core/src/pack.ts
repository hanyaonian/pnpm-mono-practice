import { CardFace, CardSuit, Card } from './card';

export function getFullPack(): Card[] {
  const suits = Object.values(CardSuit);
  const faces = Object.values(CardFace);

  // 使用数组的map方法来创建牌组
  return suits.flatMap((suit) => {
    return faces.map((face) => {
      return { face, suit };
    });
  });
}
