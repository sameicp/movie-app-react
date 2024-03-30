import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const stringValue = localStorage.getItem(key);
    const value = JSON.parse(stringValue);
    return value ? value : initialState;
  });

  // updating the localStorage using an effect
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
