export const isCorrectWord = (
  inputWord: string,
  correctWord: string,
  callbackCompletedWordsCount?: any,
  callbackInputText?: any
) => {
  if (inputWord === correctWord + ' ') {
    callbackCompletedWordsCount((prevState) => prevState + 1);
    callbackInputText('');
    return true;
  } else {
    for (let i = 0; i < inputWord.length; i++) {
      if (correctWord.charAt(i) !== inputWord.charAt(i)) {
        return false;
      }
    }
    return true;
  }
};
