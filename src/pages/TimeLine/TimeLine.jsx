import React, { useContext } from "react";
import { InteractionContext } from "../../components/Context/InteractionProvider";
import { PhoneCall, MessagesSquare, Video } from "lucide-react";

const TimeLine = () => {

  const { interactions } = useContext(InteractionContext);

  const interactionIcons = {
    Call: <PhoneCall size={25}  className='text-green-600'/>,
    Text: <MessagesSquare size={25} className='text-blue-600'/>,
    Video: <Video size={25} className='text-purple-600'/>

  }

  if (interactions.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">
          No interactions found.
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Timeline
      </h1>

      <div className="space-y-4">
        {interactions.slice().reverse().map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 border border-base-200 shadow-sm p-6"
          >
            <div className = 'flex items-center gap-4'>
                <div className='flex items-center justify-center w-14 h-14 rounded-full '>
                    {interactionIcons[item.type]}
                </div>
                <div>
                    <h2 className="font-semibold text-lg">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </p>
                </div>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;