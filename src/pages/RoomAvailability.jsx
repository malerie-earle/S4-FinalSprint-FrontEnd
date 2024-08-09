import "../styles/room-availability.css"
import RoomDetails from "../components/RoomDetails";
import Nav from "../components/Nav"
import RoomSearchBar from "../components/RoomSearchBar"
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

const RoomAvailability = ({checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, guests, setGuests, type, setType, allRoomData}) => {
    console.log(allRoomData);

    const { checkInDate: paramCheckIn, checkOutDate: paramCheckOut, occupancy: paramOccupancy, type: paramType} = useParams();
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [filteredRoom, setFilteredRoom] = useState('Select your preferred accommodation');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
          setLoading(true);
          try {
            const checkIn = paramCheckIn || checkInDate;
            const checkOut = paramCheckOut || checkOutDate;


            let url = 'http://localhost:8080/api/rooms';

            // Fetch filtered rooms based on dates, guests, and type
            if (type && type !== "Select your preferred accommodation") {
                url = `http://localhost:8080/api/rooms/available?start=${checkIn}&end=${checkOut}&occupancy=${guests}&type=${type}`;
                const response = await fetch(url);
                const result = await response.json();
                setFilteredRoom(result);
                setFilteredRooms([]); // Clear other results if filtering
                console.log(result);
            } else if (type === "Select your preferred accommodation" || !type) {
                url = `http://localhost:8080/api/rooms`;
                const response = await fetch(url);
                const result = await response.json();
                setFilteredRooms(result);
                setFilteredRoom(null); // Clear specific activity if fetching all
                console.log(result);
            } else {
                // Fallback case: fetch all activities if name is not set
                const response = await fetch(url);
                const result = await response.json();
                setFilteredRooms(result);
                setFilteredRoom(null);
                console.log(result);
            }
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchRooms();
      }, [paramCheckIn, paramCheckOut, paramOccupancy, paramType]);


    return (
    <div>

        <Nav/>

        <RoomSearchBar checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} guests={guests} setGuests={setGuests} type={type} setType={setType} allRoomData={allRoomData}/>

        <div className="roomData">
            {filteredRooms.length > 1? (
            filteredRooms.map((room) => (
                <RoomDetails key={room.room_id} room={room} />
            ))
            ) : (
                <RoomDetails room={filteredRoom} />
            )}
        </div>

        {/* <div className="roomData">
            {allRoomLoading && <h3 id="loading">Loading...</h3>}
            {allRoomError && <h3 id="error">Error: {allRoomError.message}</h3>}
            {allRoomData && allRoomData.map(room => (
                <RoomDetails key={room.room_id} room={room}/>
            ))}
        </div> */}
        
    </div>

  );
};

export default RoomAvailability;