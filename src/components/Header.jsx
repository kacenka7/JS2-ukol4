import './Header.css';

export const Header = (props) => {
    const {photo, adress, rating, room} = props.data;
    return (

          <div className="summary__head">
          <img className="summary__photo" src={photo}/>
          <div className="summary__head-property">
            <h3 className="summary__name">{adress.name}</h3>
            <div className="summary__adress">{adress.street}</div>
            <div className="summary__city">{adress.city}</div>
            <div className="summary__rating">Hodnocení: {rating}</div>
          </div>

          <div className="summary__head-room">
            <h3 className="summary__name">{room.number}</h3>
            <div className="summary__room-type">{room.note}</div>
            <div className="summary__room-price">{room.price}</div>
          </div>
        </div>


    );
  };
