import React, { useState, useEffect } from 'react';
import FriendCard from '../Home/FriendCard/FriendCard';
import friends from "../../data/friends.json";


const FriendSection = () => {

    const [friendList, setFriendList] = useState([]);
    const [loading, setLoading] = useState(true);

      useEffect(() => {
    const loadFriends = () => {
      setTimeout(() => {
        setFriendList(friends);
        setLoading(false);
      }, 1000);
    };

    loadFriends();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-60">
          <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
        </div>
      </section>
    );
  }
    
    
    return (
        <div className='container mx-auto my-10 '>
            <div>
                <h2 className="text-3xl font-bold text-gray-800">Your Friends</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-8'>
                {
                    friends.map((friend) => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
            
        </div>
    );
};

export default FriendSection;