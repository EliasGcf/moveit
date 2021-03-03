import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export function useCountdown() {
  const countdownContext = useContext(CountdownContext);

  if (Object.keys(countdownContext).length === 0) {
    throw new Error('useCountdown must be used within an CountdownProvider');
  }

  return countdownContext;
}
