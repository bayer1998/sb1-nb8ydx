import { useState, useEffect } from 'react';

interface CounterOptions {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
}

export const useCounter = ({ start = 0, end, duration = 2000, suffix }: CounterOptions) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateCount = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const currentCount = Math.floor(start + (end - start) * progress);
        setCount(currentCount);
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [start, end, duration]);

  const formattedCount = suffix?.includes('M') 
    ? `${Math.floor(count / 1000000)}${suffix}`
    : count.toString();

  return { count, formattedCount };
};