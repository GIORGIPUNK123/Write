import { UserAuth } from '@renderer/context/AuthContext';

const useLevelUpLogic = (
  wordCount: number,
  mistakeWords: string[],
  wpm: number
) => {
  const { userAdditionalInfo } = UserAuth();

  // Calculate maxXp based on user level
  const getMaxXp = (level: number) => {
    const baseXp = 1000;
    const increment = 100;
    return baseXp + level * increment;
  };

  // Calculate gained XP based on the conditions
  const calculateGainedXp = (
    wordCount: number,
    wpm: number,
    mistakeWords: string[]
  ) => {
    let xp = wordCount * 30;

    if (wpm > 50) {
      xp += (wpm - 50) * 0.2;
    } else {
      xp -= (50 - wpm) * 0.2;
    }

    if (mistakeWords.length === 0) {
      xp += 70;
    } else {
      xp -= mistakeWords.length * 20;
    }

    return xp;
  };

  let gainedXp = 0;
  let maxXp = 0;
  let currentXp = 0;

  // Only calculate if userAdditionalInfo is available and within valid level range
  if (
    userAdditionalInfo &&
    userAdditionalInfo.lvl >= 0 &&
    userAdditionalInfo.lvl <= 19
  ) {
    currentXp = userAdditionalInfo.xp;
    maxXp = getMaxXp(userAdditionalInfo.lvl);
    gainedXp = calculateGainedXp(wordCount, wpm, mistakeWords);
  }

  return { currentXp, gainedXp, maxXp };
};

export default useLevelUpLogic;
