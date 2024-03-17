export const calculatePercentage = (xp: number, maxXp: number) => {
  if (xp === 0) {
    return 0;
  } else {
    return (xp / maxXp) * 100;
  }
};
