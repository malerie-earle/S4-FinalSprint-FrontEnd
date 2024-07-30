import "../styles/booking-details.css"
import gardenView from "../images/gardenView.jpg"

const BookingDetails = () => {
  return (
    <div>
        <h3 className="detail-header">GARDEN VIEW BUNGALOW</h3>
        <form className="details">
            <img src={gardenView} alt="Example Image"/>
            <div className="textbox">
                <p>The garden view bungalow rooms are made of wood that provide a comfortable and relaxing stay in addition to the wide variety of amenities, air conditioning, full bathroom, hairdryer, satellite TV, minibar, telephone, safe, balcony and terrace.</p>
                <button type="submit">BOOK NOW</button>
            </div>
        
        </form>
    </div>

  );
};

export default BookingDetails;