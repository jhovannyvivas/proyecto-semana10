import { useEffect, useState } from "react";

let API = 'https://api.pokemontcg.io/v2/cards';

export function GetData() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(API).then((response) => response.json())
      .then((data1) => {
        setCards(data1.data);
      });
  }, []);

  return cards;
}
