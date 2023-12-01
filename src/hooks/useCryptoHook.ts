import React, { useEffect, useState } from "react";
import { Coin } from "../interfaces/interface";
import { fetchData } from "../services/CryptoService";

export const useCryptoHook = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [coin, setCoin] = useState<Coin>();

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((data) => {
        setCoins(data);
        setCoin(data[0]);
      })
      .catch((er) => console.log(er))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    coin,
    setCoin,
    coins,
    isLoading,
  };
};
