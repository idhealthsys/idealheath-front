import React, { useEffect } from 'react';

type useLocalStorage = {
  key: string;
  inicial: any;
};

export default function useLocalStorage({ key, inicial }: useLocalStorage) {
  const [state, setState] = React.useState(inicial); 

  useEffect(() => {
    // Executa apenas no lado do cliente (navegador)
    const local = window.localStorage.getItem(key);
    if (local !== null) {
      setState(local); 
    }
  }, [key]); 

  useEffect(() => {
    // Executa apenas no lado do cliente (navegador)
    window.localStorage.setItem(key, state);
  }, [key, state]); 

  return [state, setState];
}
