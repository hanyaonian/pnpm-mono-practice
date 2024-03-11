import { getFullPack } from '../src/pack';

describe('sum module', () => {
  test('Full pack of cards has 52 in total', () => {
    expect(getFullPack()).toHaveLength(52);
  });

  // todo...
  // 13 cards in each suit, with face...
});
