export const rankToString = (rank: number) => {
  if (rank === 0) {
    return 'Bronze';
  }
  if (rank === 1) {
    return 'Silver';
  }
  if (rank === 2) {
    return 'Gold';
  }
  if (rank === 3) {
    return 'Platinum';
  }
  if (rank === 4) {
    return 'Diamond';
  }
  if (rank === 5) {
    return 'Master';
  }
  if (rank === 6) {
    return 'Grandmaster';
  }
  if (rank === 7) {
    return 'Challenger';
  }
  return 'Unranked';
};
