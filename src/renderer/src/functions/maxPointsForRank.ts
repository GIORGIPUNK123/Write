export const maxPointsForRank = (rank: number): number => {
  switch (rank) {
    case 0:
      return 1000;
    case 1:
      return 1750;
    case 2:
      return 2500;
    case 3:
      return 3500;
    case 4:
      return 5000;
    case 5:
      return 7500;
    case 6:
      return 8200;
    case 7:
      return 10000;
    default:
      return 0;
  }
};
