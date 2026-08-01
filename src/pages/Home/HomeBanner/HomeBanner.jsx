import React from 'react';
import SummaryCard from './SummaryCard';

const HomeBanner = () => {
    return (
        <div className='container mx-auto my-10 '>
            <div className ='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold '>Friends to keep close in your life</h1>
            <p className='text-lg'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
relationships that matter most.</p>
             <button className = 'btn text-white bg-[#244D3F] hover:bg-[#1a3a2f]'>+ Add Friend</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-8'>
                <SummaryCard title = "Total Friends" value = {10}/>
                <SummaryCard title = "Overdue" value = {5}/>
                <SummaryCard title = "On Track" value = {100}/>
                <SummaryCard title = "Almost Due" value = {100}/>
            </div>
        </div>
    );
};

export default HomeBanner;