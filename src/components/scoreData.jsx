import betLogo from '../assets/betLogo.svg';
import bet9ja from '../assets/bet9ja.svg';
import lock from '../assets/lock.svg';
import Vector from '../assets/Vector.svg';

export const homeData = [
  // Football
  {
    eventTop: 'ENG PREM | 9:00',
    eventBottom: 'Manchester United vs Chelsea',
    tip: 'GG',
    odd: 1.80,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'SPA LA LIGA | 11:00',
    eventBottom: 'Barcelona vs Real Madrid',
    tip: '1X',
    odd: 2.10,
    booking: [betLogo, bet9ja, Vector],
  },

  // Tennis
  {
    eventTop: 'ATP ROME | 14:00',
    eventBottom: 'Novak Djokovic vs Carlos Alcaraz',
    tip: 'Over 3.5 Sets',
    odd: 1.95,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'WTA ROME | 16:30',
    eventBottom: 'Iga Swiatek vs Aryna Sabalenka',
    tip: 'Swiatek to Win',
    odd: 1.70,
    booking: [betLogo, bet9ja, Vector],
  },

  // Basketball
  {
    eventTop: 'NBA | 19:00',
    eventBottom: 'Lakers vs Warriors',
    tip: 'Over 210.5 Points',
    odd: 1.85,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'NBA | 20:30',
    eventBottom: 'Celtics vs Heat',
    tip: 'Heat to Win',
    odd: 2.00,
    booking: [betLogo, bet9ja, Vector],
  },

  // Locked Tip (example from any sport)
  {
    eventTop: 'TODAY',
    eventBottom: 'Sign in to get access',
    tip: <img src={lock} alt='Tip' />,
    odd: <img src={lock} alt='Tip' />,
    booking: [betLogo, bet9ja, Vector],
  },
];

export const footballData = [
  {
    eventTop: 'ENG PREM | 9:00',
    eventBottom: 'Manchester United vs Chelsea',
    tip: 'GG',
    odd: 1.80,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'SPA LA LIGA | 11:00',
    eventBottom: 'Barcelona vs Real Madrid',
    tip: '1X',
    odd: 2.10,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'GER BUNDES | 13:00',
    eventBottom: 'Bayern Munich vs Borussia Dortmund',
    tip: '1X',
    odd: 1.80,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'ENG PREM',
    eventBottom: 'Sign in to get access',
    tip: <img src={lock} alt='Tip' />,
    odd: <img src={lock} alt='Tip' />,
    booking: [betLogo, bet9ja, Vector],
  },
];

export const tennisData = [
  {
    eventTop: 'ATP ROME | 14:00',
    eventBottom: 'Novak Djokovic vs Carlos Alcaraz',
    tip: 'Over 3.5 Sets',
    odd: 1.95,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'WTA ROME | 16:30',
    eventBottom: 'Iga Swiatek vs Aryna Sabalenka',
    tip: 'Swiatek to Win',
    odd: 1.70,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'ATP ROME | 18:00',
    eventBottom: 'Jannik Sinner vs Daniil Medvedev',
    tip: '1X',
    odd: 2.05,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'ATP ROME',
    eventBottom: 'Sign in to get access',
    tip: <img src={lock} alt='Tip' />,
    odd: <img src={lock} alt='Tip' />,
    booking: [betLogo, bet9ja, Vector],
  },
];

export const basketballData = [
  {
    eventTop: 'NBA | 19:00',
    eventBottom: 'Los Angeles Lakers vs Golden State Warriors',
    tip: 'Over 210.5 Points',
    odd: 1.85,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'NBA | 20:30',
    eventBottom: 'Boston Celtics vs Miami Heat',
    tip: 'Heat to Win',
    odd: 2.00,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'NBA | 21:00',
    eventBottom: 'Milwaukee Bucks vs Brooklyn Nets',
    tip: '1X',
    odd: 1.90,
    booking: [betLogo, bet9ja, Vector],
  },
  {
    eventTop: 'NBA',
    eventBottom: 'Sign in to get access',
    tip: <img src={lock} alt='Tip' />,
    odd: <img src={lock} alt='Tip' />,
    booking: [betLogo, bet9ja, Vector],
  },
];
