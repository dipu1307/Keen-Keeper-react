import React from 'react';
import SummaryCard from './SummaryCard';
import friends from "../../../data/friends.json";

const HomeBanner = () => {
        const totalFriends = friends.length;
        const overdueFriends = friends.filter(friend =>friend.status === 'overdue').length;
        const onTrackFriends = friends.filter(friend =>friend.status === 'on-track').length;
        const almostDueFriends = friends.filter(friend=>friend.status === 'almost due').length;

    return (
        <div className='container mx-auto my-10 '>
            <div className ='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold '>Friends to keep close in your life</h1>
            <p className='text-lg'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
relationships that matter most.</p>
             <button className = 'btn text-white bg-[#244D3F] hover:bg-[#1a3a2f]'>+ Add Friend</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-8'>
                <SummaryCard title = "Total Friends" value = {totalFriends}/>
                <SummaryCard title = "Overdue" value = {overdueFriends}/>
                <SummaryCard title = "On Track" value = {onTrackFriends}/>
                <SummaryCard title = "Almost Due" value = {almostDueFriends}/>
            </div>
        </div>
    );
};

export default HomeBanner;