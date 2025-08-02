
import { useState, useEffect } from 'react';

export const useAnimatedCount = (target: number, duration: number = 3000, isVisible: boolean = false, decimals: number = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      const currentCount = decimals > 0 
        ? parseFloat((easedProgress * target).toFixed(decimals))
        : Math.floor(easedProgress * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, isVisible, decimals]);

  return count;
};
