import './Reservation.css';

export const Reservation = (props) => {
    const {rezervation} = props.data;
    return (

        <div className="summary__detail">
          <h3>Detail rezervace</h3>
          <div className="summary__number">Číslo rezervace: {rezervation.id}</div>
          <div className="summary__dates">Pobyt: {rezervation.date}</div>
          <div className="summary__guests">Hosté: {rezervation.guests}</div>
          <div className="summary__catering">Stravovávní: {rezervation.catering}</div>
          <div className="summary__room-total">Cena celkem: {rezervation.totalPrice}</div>
          <div className="summary__check-in">Check-in: {rezervation.checkIn}</div>
          <div className="summary__check-out"> Check-out: {rezervation.checkOut}</div>
        </div>

    );
  };