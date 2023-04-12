export const fetchWords = async (amount: number, callbackFunc: any) => {
  try {
    const res = await fetch(
      `https://random-word-api.vercel.app/api?words=${amount}`
    );
    const json = await res.json();
    callbackFunc(json);
  } catch (err) {
    console.error(err);
  }
};
