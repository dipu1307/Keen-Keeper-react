import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { Archive, Bell, MessageSquare, PhoneCall, Trash2, Video } from 'lucide-react';
import friendsData from "../../data/friends.json";
import { InteractionContext } from '../../components/Context/InteractionProvider';


const FriendDetails = () => {

    const {id} = useParams();
    const {addInteraction} = useContext(InteractionContext);
    
    // console.log(id);
    const friend = friendsData.find((friend)=>friend.id === parseInt(id));

    const handleAddInteraction = (type) =>{

      console.log("Adding interaction of type:", type, "for friend:", friend);
      addInteraction(friend, type);
      toast.success(`${type} with ${friend.name} added to timeline!`);

    }

    console.log(friend);

    if (!friend) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">
          Friend Not Found
        </h2>
      </div>
    );
  }
  

  
    return (
        <div className="min-h-screen bg-[#f7f9f8] py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* Friend Info Card */}
            <div className="card bg-base-100 border border-base-200 shadow-sm p-6 text-center">
              <div className="avatar mx-auto mb-4">
                <div className="w-24 h-24 rounded-full ring ring-emerald-500/20 ring-offset-2">
                  <img src={friend.picture} alt={friend.name} className="object-cover" />
                </div>
              </div>

              <h1 className="font-bold text-xl text-gray-800">{friend.name}</h1>

              <div className="mt-2">
                <span
                  className={`badge badge-sm font-semibold capitalize ${
                    friend.status === "overdue"
                      ? "badge-error text-white"
                      : friend.status === "almost due"
                      ? "badge-warning"
                      : "badge-accent text-emerald-800 bg-emerald-100 border-none"
                  }`}
                >
                  {friend.status}
                </span>
              </div>

              <div className="flex justify-center flex-wrap gap-1.5 mt-3">
                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-ghost text-[11px] font-semibold bg-emerald-100/70 text-emerald-800 border-none uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-xs italic text-gray-500 mt-4 px-2 line-clamp-2">
                "{friend.bio}"
              </p>

              <p className="text-xs text-gray-400 mt-3 truncate">
                Email: <span className="text-gray-600 font-medium">{friend.email}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button className="btn btn-outline btn-block border-gray-200 bg-white hover:bg-gray-50 text-gray-700 normal-case text-xs font-medium h-11 min-h-[44px]">
                <Bell size={15} />
                Snooze 2 Weeks
              </button>

              <button className="btn btn-outline btn-block border-gray-200 bg-white hover:bg-gray-50 text-gray-700 normal-case text-xs font-medium h-11 min-h-[44px]">
                <Archive size={15} />
                Archive
              </button>

              <button className="btn btn-outline btn-error btn-block border-gray-200 bg-white hover:bg-red-50 text-red-500 normal-case text-xs font-medium h-11 min-h-[44px]">
                <Trash2 size={15} />
                Delete
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4 min-w-0">
            {/* ROW 1: STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card bg-base-100 border border-base-200 shadow-sm p-4 text-center">
                <p className="text-2xl font-bold text-[#1e4a38]">{friend.days_since_contact}</p>
                <p className="text-xs font-medium text-gray-400 mt-0.5">Days Since Contact</p>
              </div>

              <div className="card bg-base-100 border border-base-200 shadow-sm p-4 text-center">
                <p className="text-2xl font-bold text-[#1e4a38]">{friend.goal}</p>
                <p className="text-xs font-medium text-gray-400 mt-0.5">Goal (Days)</p>
              </div>

              <div className="card bg-base-100 border border-base-200 shadow-sm p-4 text-center">
                <p className="text-xl font-bold text-[#1e4a38] truncate">{friend.next_due_date}</p>
                <p className="text-xs font-medium text-gray-400 mt-0.5">Next Due</p>
              </div>
            </div>

            {/* ROW 2: RELATIONSHIP GOAL (COMPACT PADDING & NO EXTRA FLEX SPACE) */}
            <div className="card bg-base-100 border border-base-200 shadow-sm px-5 py-4 flex-row items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-[#1e4a38]">Relationship Goal</h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Connect every <span className="font-bold text-gray-800">{friend.goal} days</span>
                </p>
              </div>
              <button className="btn btn-xs sm:btn-sm btn-ghost border border-gray-200 text-gray-600 normal-case">
                Edit
              </button>
            </div>

            {/* ROW 3: QUICK CHECK-IN */}
            <div className="card bg-base-100 border border-base-200 shadow-sm p-5">
              <h2 className="text-sm font-bold text-[#1e4a38] mb-3">Quick Check-In</h2>

              <div className="grid grid-cols-3 gap-3">
                <button onClick={()=>handleAddInteraction("Call")}  className="btn btn-ghost border border-gray-100 bg-[#f8fafb] hover:bg-gray-100 h-20 flex-col gap-1 normal-case">
                  <PhoneCall size={18} className="text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">Call</span>
                </button>

                <button onClick={()=>handleAddInteraction("Text")} className="btn btn-ghost border border-gray-100 bg-[#f8fafb] hover:bg-gray-100 h-20 flex-col gap-1 normal-case">
                  <MessageSquare size={18} className="text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">Text</span>
                </button>

                <button onClick={()=>handleAddInteraction("Video")} className="btn btn-ghost border border-gray-100 bg-[#f8fafb] hover:bg-gray-100 h-20 flex-col gap-1 normal-case">
                  <Video size={18} className="text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">Video</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
      

  
);
   
};

export default FriendDetails;