import {useEffect, useState} from 'react';

/**
 * Copied from https://usehooks-ts.com/react-hook/use-debounce
 * @param value 
 * @param delay 
 * @returns 
 */
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
