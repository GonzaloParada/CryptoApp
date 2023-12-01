import { Coin } from "../interfaces/interface";

const URL: string = "https://api.coinranking.com/v2/coins";

export const fetchData = async (): Promise<Coin[]> => {
  const response = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data.data.coins);

  return response;
};
//
