import { useState } from "react";

/**
 * Defines the useDebounce hook
 */
export const useDebounce = () => {
  /**
   * Initializes the interval
   */
  const [intervalId, setIntervalId] = useState<any>();

  return (func: any, wait: number) => {
    if (intervalId) clearTimeout(intervalId);

    setIntervalId(setTimeout(func, wait));
  };
};
