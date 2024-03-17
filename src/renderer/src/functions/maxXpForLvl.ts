export const maxXpForLvl = (lvl: number) => {
  const baseXp = 312;
  console.log('maxXpLvlFunc got called ');
  if (lvl === 0) {
    console.log('lvl is 0');
    return 150;
  } else if (lvl <= 5) {
    console.log('lvl is lower than 5');
    return Math.floor(lvl * baseXp - lvl * baseXp * 0.1);
  } else if (lvl <= 10) {
    console.log('lvl is lower than 10');
    return Math.floor(lvl * baseXp - lvl * baseXp * 0.15);
  } else if (lvl <= 15) {
    console.log('lvl is lower than 15');
    return Math.floor(lvl * baseXp - lvl * baseXp * 0.2);
  } else if (lvl <= 20) {
    console.log('lvl is lower than 20');
    return Math.floor(lvl * baseXp - lvl * baseXp * 0.3);
  } else if (lvl <= 25) {
    console.log('lvl is lower than 25');
    return Math.floor(lvl * baseXp - lvl * baseXp * 0.4);
  } else if (lvl <= 50) {
    console.log('lvl is lower than 50');
    return Math.floor(lvl * baseXp - lvl * baseXp * 0.6);
  } else if (lvl <= 100) {
    console.log('lvl is lower than 100');
    return Math.floor(lvl * baseXp - lvl * baseXp * 0.9);
  } else {
    console.log('else');
    return baseXp;
  }
};
