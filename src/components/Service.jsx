export const Service = (props) => {
    const {title, photo, adress, rating, room, rezervation, service, cancel} = props.data;
    return (

        <div className="summary__services">
          <h3>Doplňkové služby</h3>
          <div className="summary__service">Parkování: {service.parkingPrice}</div>
          <div className="summary__service">Snídaně: {service.breakfast}</div>
          <div className="summary__service">Wellness: {service.wellness}</div>
          <div className="summary__service">Wifi: {service.wifi}</div>
        </div>
    );
  };