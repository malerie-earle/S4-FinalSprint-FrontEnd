import "../styles/room-availability.css"
import { useState } from "react";
import RoomDetails from "../components/RoomDetails";
import Nav from "../components/Nav"
import RoomSearchBar from "../components/RoomSearchBar"

const RoomAvailability = ({checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, guests, setGuests, allRoomData, allRoomLoading, allRoomError}) => {

    return (
    <div>

        <Nav/>

        <RoomSearchBar checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} guests={guests} setGuests={setGuests}/>

        <div className="roomData">
            {allRoomLoading && <h3 id="loading">Loading...</h3>}
            {allRoomError && <h3 id="error">Error: {allRoomError.message}</h3>}
            {allRoomData && allRoomData.map(room => (
                <RoomDetails key={room.room_id} room={room}/>
            ))}
        </div>

        

        

    </div>

  );
};

export default RoomAvailability;
