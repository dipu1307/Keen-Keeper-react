import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

const FriendCard = ({friend}) => {
    const {id, name, picture, days_since_contact,status,tags}=friend;
    const statusStyle = {
  overdue: "bg-red-500 text-white",
  "on-track": "bg-green-500 text-white",
  "almost due": "bg-yellow-500 text-black",
};
    return (
        <div>
            <Link
      to={`/friend/${id}`}
      className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <figure className="px-4 pt-4">
        <img
          src={picture}
          alt={name}
          className="w-80 h-80 rounded-full object-cover"
        />
      </figure>

      <div className="card-body items-center">
        <h2 className="card-title">
          {name}
        </h2>

        <div className="flex items-center gap-2 text-sm text-base-content/60">
          <CalendarDays size={17} />
          <span>
            {days_since_contact} days since contact
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2">
          <span className={`badge ${statusStyle[status]}`}>
            {status}
          </span>
        </div>
      </div>
    </Link>
        </div>
    );
};

export default FriendCard;