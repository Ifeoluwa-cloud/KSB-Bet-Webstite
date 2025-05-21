import React from 'react';
import Scores from './Scores';
import Button from './Button';
import SideBanner from './SideBanner';
import CardList from './LeagueCardList';
import SportsCategories from './SportsCategories';
import SpecialOffers from './SpecialOffers';
import SpecialCategories from './SpecialCategories';
import WelcomeAddress from './WelcomeAddress';
import NewsList from './NewsList';
import { homeData } from './scoreData';

const Home = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 max-w-[1002px] mx-auto p-4 bg-white'>
      <div className='w-full lg:w-[646px]'>
        <Scores scoreData={homeData} />
        <Button />
        <CardList />    
        <SportsCategories />
        <Button />
        <SpecialOffers />
        <SpecialCategories />
        <WelcomeAddress />
        <Button />
        <NewsList />
      </div>
      <div className='w-full lg:w-[300px] mt-4 lg:mt-0'>
        <SideBanner />
      </div>
    </div>
  );
};

export default Home;