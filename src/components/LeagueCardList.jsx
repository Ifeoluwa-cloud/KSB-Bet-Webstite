import React from 'react';
import Leagues from './Leagues';
import LeagueCard from './LeagueCard';

function CardList() {
  return (
    <div>
      {Leagues.map((league, index) => (
        <LeagueCard
          key={index}
          heading={league.heading}
          list={league.list}
          moreList={league.moreList}
        />
      ))}
    </div>
  );
}

export default CardList;
