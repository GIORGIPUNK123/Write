export const differenceCounter = (startingTime: number, setState: any) => {
  setState(Math.round(Date.now() / 1000) - startingTime);
};
