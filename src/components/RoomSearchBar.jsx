import "../styles/room-availability.css";
import { useState } from "react";
import RoomDetails from "../components/RoomDetails";
import Nav from "../components/Nav";
import RoomSearchBar from "../components/RoomSearchBar";

const RoomAvailability = ({ checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, guests, setGuests, allRoomData, allRoomLoading, allRoomError }) => {
    return (
        <div>
            <Nav />
            <RoomSearchBar checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} guests={guests} setGuests={setGuests} allRoomData={allRoomData} />
            <div className="roomData">
                {allRoomLoading && <h3 id="loading">Loading...</h3>}
                {allRoomError && <h3 id="error">Error: {allRoomError.message}</h3>}
                {Array.isArray(allRoomData) ? (
                    allRoomData.length > 0 ? (
                        allRoomData.map((room) => (
                            <RoomDetails key={room.room_id} room={room} />
                        ))
                    ) : (
                        <h3 id="error">No room data available</h3>
                    )
                ) : (
                    <h3 id="error">Invalid room data</h3>
                )}
            </div>
        </div>
    );
};

export default RoomAvailability;