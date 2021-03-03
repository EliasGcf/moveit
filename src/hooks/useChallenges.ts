import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function useChallenges() {
  const challengesContext = useContext(ChallengesContext);

  if (Object.keys(challengesContext).length === 0) {
    throw new Error('useChallenges must be used within an CountdownProvider');
  }

  return challengesContext;
}
