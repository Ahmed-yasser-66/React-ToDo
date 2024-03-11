import { useEffect, useState } from 'react';

export function useLocalStorage(initialState, key) {
  const [value, setVlaue] = useState(function () {
    const storedVlaue = localStorage.getItem(key);

    return storedVlaue ? JSON.parse(storedVlaue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setVlaue];
}
