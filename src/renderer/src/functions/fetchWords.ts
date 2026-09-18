import { getRandomWords } from '../data/wordList';

export const fetchWords = async (amount: number, callbackFunc: any) => {
  try {
    callbackFunc(getRandomWords(amount));
  } catch (err) {
    console.error(err);
  }
};
