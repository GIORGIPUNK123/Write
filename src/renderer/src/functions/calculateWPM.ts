export const calculateWPM = (wordsCount: number, seconds: number) =>
  seconds === 0 ? 0 : Math.round(((wordsCount * 60) / seconds) * 100) / 100;
