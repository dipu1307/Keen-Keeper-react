import React from 'react';
import FriendCard from '../Home/FriendCard/FriendCard';


const FriendSection = () => {

    const friends = [
  {
    "id": 1,
    "name": "Alex Johnson",
    "picture": "https://i.pravatar.cc/300?img=12",
    "email": "alex.johnson@example.com",
    "days_since_contact": 18,
    "status": "overdue",
    "tags": ["college", "close friend"],
    "bio": "Met in university and we still enjoy hiking and exploring new places together.",
    "goal": 14,
    "next_due_date": "2026-08-05"
  },
  {
    "id": 2,
    "name": "Sarah Williams",
    "picture": "https://i.pravatar.cc/300?img=47",
    "email": "sarah.williams@example.com",
    "days_since_contact": 8,
    "status": "on-track",
    "tags": ["work", "friend"],
    "bio": "A former coworker who loves coffee, photography, and weekend road trips.",
    "goal": 14,
    "next_due_date": "2026-08-07"
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "picture": "https://i.pravatar.cc/300?img=33",
    "email": "michael.brown@example.com",
    "days_since_contact": 13,
    "status": "almost due",
    "tags": ["school", "sports"],
    "bio": "We played football together in school and still meet for games whenever possible.",
    "goal": 14,
    "next_due_date": "2026-08-03"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "picture": "https://i.pravatar.cc/300?img=44",
    "email": "emily.davis@example.com",
    "days_since_contact": 5,
    "status": "on-track",
    "tags": ["work", "close friend"],
    "bio": "A thoughtful friend from work who enjoys books, cooking, and quiet evenings.",
    "goal": 14,
    "next_due_date": "2026-08-10"
  },
  {
    "id": 5,
    "name": "Daniel Wilson",
    "picture": "https://i.pravatar.cc/300?img=11",
    "email": "daniel.wilson@example.com",
    "days_since_contact": 21,
    "status": "overdue",
    "tags": ["college", "travel"],
    "bio": "My college roommate and one of my favorite travel partners.",
    "goal": 14,
    "next_due_date": "2026-07-24"
  },
  {
    "id": 6,
    "name": "Olivia Martinez",
    "picture": "https://i.pravatar.cc/300?img=32",
    "email": "olivia.martinez@example.com",
    "days_since_contact": 11,
    "status": "almost due",
    "tags": ["neighbor", "friend"],
    "bio": "A friendly neighbor who loves gardening, music, and trying new restaurants.",
    "goal": 14,
    "next_due_date": "2026-08-04"
  },
  {
    "id": 7,
    "name": "James Anderson",
    "picture": "https://i.pravatar.cc/300?img=68",
    "email": "james.anderson@example.com",
    "days_since_contact": 3,
    "status": "on-track",
    "tags": ["childhood", "close friend"],
    "bio": "We grew up together and still make time for gaming and movie nights.",
    "goal": 14,
    "next_due_date": "2026-08-12"
  },
  {
    "id": 8,
    "name": "Sophia Taylor",
    "picture": "https://i.pravatar.cc/300?img=49",
    "email": "sophia.taylor@example.com",
    "days_since_contact": 16,
    "status": "overdue",
    "tags": ["university", "creative"],
    "bio": "A university friend who works in design and enjoys art exhibitions and travel.",
    "goal": 14,
    "next_due_date": "2026-07-30"
  },
  {
    "id": 9,
    "name": "Ethan Thomas",
    "picture": "https://i.pravatar.cc/300?img=5",
    "email": "ethan.thomas@example.com",
    "days_since_contact": 9,
    "status": "on-track",
    "tags": ["gym", "friend"],
    "bio": "My gym partner who keeps me motivated and enjoys outdoor activities.",
    "goal": 14,
    "next_due_date": "2026-08-08"
  },
  {
    "id": 10,
    "name": "Mia Robinson",
    "picture": "https://i.pravatar.cc/300?img=23",
    "email": "mia.robinson@example.com",
    "days_since_contact": 14,
    "status": "almost due",
    "tags": ["work", "travel"],
    "bio": "A work friend who loves traveling, photography, and discovering local food.",
    "goal": 14,
    "next_due_date": "2026-08-01"
  },
  {
  "id": 11,
  "name": "Noah Clark",
  "picture": "https://i.pravatar.cc/300?img=14",
  "email": "noah.clark@example.com",
  "days_since_contact": 6,
  "status": "on-track",
  "tags": ["gym", "college"],
  "bio": "A longtime friend who enjoys fitness, football, and weekend adventures.",
  "goal": 14,
  "next_due_date": "2026-08-09"
},
{
  "id": 12,
  "name": "Ava Lewis",
  "picture": "https://i.pravatar.cc/300?img=25",
  "email": "ava.lewis@example.com",
  "days_since_contact": 12,
  "status": "almost due",
  "tags": ["work", "close friend"],
  "bio": "A close colleague who enjoys painting, coffee, and exploring new places.",
  "goal": 14,
  "next_due_date": "2026-08-03"
},
{
  "id": 13,
  "name": "Lucas Walker",
  "picture": "https://i.pravatar.cc/300?img=15",
  "email": "lucas.walker@example.com",
  "days_since_contact": 19,
  "status": "overdue",
  "tags": ["childhood", "sports"],
  "bio": "A childhood friend who loves basketball, gaming, and outdoor activities.",
  "goal": 14,
  "next_due_date": "2026-07-27"
},
{
  "id": 14,
  "name": "Isabella Hall",
  "picture": "https://i.pravatar.cc/300?img=45",
  "email": "isabella.hall@example.com",
  "days_since_contact": 10,
  "status": "almost due",
  "tags": ["university", "travel"],
  "bio": "A university friend who enjoys traveling, photography, and discovering local cafés.",
  "goal": 14,
  "next_due_date": "2026-08-05"
},
{
  "id": 15,
  "name": "Henry Young",
  "picture": "https://i.pravatar.cc/300?img=52",
  "email": "henry.young@example.com",
  "days_since_contact": 4,
  "status": "on-track",
  "tags": ["work", "friend"],
  "bio": "A friendly coworker who enjoys cycling, movies, and trying new restaurants.",
  "goal": 14,
  "next_due_date": "2026-08-11"
}
]
    
    return (
        <div className='container mx-auto my-10 '>
            <div>
                <h2>Your Friends</h2>
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