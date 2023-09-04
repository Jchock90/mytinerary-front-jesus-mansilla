import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import itinerary_action from "../store/actions/itineraries";
import ItineraryList from "./ItineraryList";

const { read_itineraries_from_city } = itinerary_action;

function Itineraries() {
  const { id } = useParams();
  const itineraries_redux = useSelector(
    (store) => store.itineraries.itineraries
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_itineraries_from_city({ city_id: id }));
  }, [dispatch, id]);

  const [expandedItinerary, setExpandedItinerary] = useState(null);
  const [likes, setLikes] = useState(
    Array(itineraries_redux.length).fill(false)
  );
  const [likeCount, setLikeCount] = useState(
    Array(itineraries_redux.length).fill(0)
  );

  const toggleExpand = (itineraryId) => {
    if (expandedItinerary === itineraryId) {
      setExpandedItinerary(null);
    } else {
      setExpandedItinerary(itineraryId);
    }
  };

  const toggleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);

    const newLikeCount = [...likeCount];
    if (newLikes[index]) {
      newLikeCount[index]++;
    } else {
      newLikeCount[index]--;
    }
    setLikeCount(newLikeCount);
  };

  return (
    <div className="flex flex-col items-center space-y-4 my-20">
      <ItineraryList
        itineraries={itineraries_redux}
        likes={likes}
        likeCounts={likeCount}
        expandedItinerary={expandedItinerary}
        onToggleLike={toggleLike}
        onToggleExpand={toggleExpand}
      />
    </div>
  );
}

export default Itineraries;
