import React from 'react';
import UEFA from '../assets/UEFA.svg';
import PremierLeague from '../assets/PremierLeague.svg';
import Bundesliga from '../assets/Bundesliga.svg';
import Laliga from '../assets/Laliga.svg';
import NBA from '../assets/NBA.svg';
import FIBA from '../assets/FIBA.svg';
import USA from '../assets/USA.svg'; 
import Chinese from '../assets/Chinese.svg';

const Leagues = [
  {
    heading: 'Football League',
    list: [
      { name: 'UEFA', image: [UEFA] },
      { name: 'Premier League', image: [PremierLeague] },
      { name: 'Bundesliga', image: [Bundesliga] },
      { name: 'La Liga', image: [Laliga] },
    ],
    moreList: 'See more',
  },
  {
    heading: 'Basketball League',
    list: [
      { name: 'NBA', image: [NBA] },
      { name: 'FIBA', image: [FIBA] },
      { name: 'USA', image: [USA] },
      { name: 'Chinese Basketball Association', image: [Chinese] },
    ],
    moreList: 'See more',
  },
];

export default Leagues;
