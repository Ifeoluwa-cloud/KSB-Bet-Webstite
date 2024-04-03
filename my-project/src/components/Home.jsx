import React from 'react';
import Scores  from './Scores';
import Button  from './Button';
import SideBanner  from './SideBanner';
import CardList from './LeagueCardList';
import SportsCategories from './SportsCategories';
import SpecialOffers from './SpecialOffers'
import SpecialCategories from './SpecialCategories'
import WelcomeAddress from './WelcomeAddress';
import NewsList from './NewsList';


const Home = () => {
    return(
        <div className='flex gap-6 w-[1002px] h-[3215px] m-auto p-4 bg-white'>
            <div className='w-[646px] mr-1 mb-4'>
                <Scores />
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
            <SideBanner />
        </div>
    )
}

export default Home