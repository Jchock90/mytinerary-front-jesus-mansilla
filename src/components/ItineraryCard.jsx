import React from "react";
import LikeButton from "./LikeButton";
import ExpandButton from "./ExpandButton";

function ItineraryCard({
  itinerary,
  onToggleLike,
  isLiked,
  likeCount,
  onToggleExpand,
  isExpanded,
  activities,
}) {
  return (
    <>
      <div className="relative bg-gray-50 p-4 rounded-md shadow-md w-[100%] h-[80%]">
        <h1 className="text-lg font-semibold mb-2 text-center">
          {itinerary.name}
        </h1>
        <img
          src={itinerary.photo}
          alt={itinerary.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="flex justify-between items-center">
          <LikeButton isLiked={isLiked} likeCount={likeCount} onClick={onToggleLike} />
          <ExpandButton isExpanded={isExpanded} onToggleExpand={onToggleExpand} />
        </div>
        <div className="flex flex-row justify-evenly py-0 items-start">
          <div className="text-center">
            <p className="text-sm font-semibold mr-2">User:</p>
            <p className="text-sm">{itinerary.city_id.admin_id.name}</p>
            <img
              src={itinerary.city_id.admin_id.photo}
              alt={itinerary.city_id.admin_id.name}
              className="w-16 h-16 object-cover rounded-full mb-4 circular-image"
            />
          </div>
          <div className="text-center">
            <p className="text-sm p-0 font-semibold mr-2">Tags:</p>
            <p className="text-sm">{itinerary.tags}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold mr-2">Duration:</p>
            <p className="text-sm">{itinerary.duration} min</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold mr-2">Price:</p>
            <p className="text-sm">{"💵".repeat(itinerary.price)}</p>
          </div>
        </div>
        {isExpanded && (
          <>
            <div className="text-center uppercase mt-4">
              <p className="text-md font-semibold">Activities:</p>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              {activities.map((activity) => (
                <div key={activity._id} className="text-center">
                  <p className="text-sm font-semibold">{activity.name}</p>
                  <img
                    src={activity.photo}
                    alt={activity.name}
                    className="w-48 h-32 object-cover rounded-md mx-auto mb-2"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        {isExpanded && (
          <>
            <div className="text-center uppercase mt-4">
              <p className="text-sm font-semibold">Comments Under Construction</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ItineraryCard;
