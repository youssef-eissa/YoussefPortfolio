import { useState, useEffect } from 'react';

export const useHash = () => {
  const [hash, setHash] = useState('');
  useEffect(() => {
    if(window.location.hash){
      setHash(window.location.hash);
    }
    const onHashChange = () => {
      setHash(window.location.hash);

    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  },[]);
  return {hash,setHash};
};