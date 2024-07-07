import './BookingSummary.css';

import {Header} from "./Header"
import { Reservation } from "./Reservation";
import { Service } from "./Service";
import { Cancel } from "./Cancel";


const data = {
    title: "Booking Summary",
    photo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960",
    adress: {
        name: "Hotel Lesní Zátiší",
        street: "Malohradské skály 347/21",
        city: "Malohradská ves"
    },
    rating: "4.65",
    room:{
        number: "Pokoj 2",
        note: "Dvoulůžkový s dětskou přistýlkou",
        price: "1 800 Kč / noc"
    },
    rezervation: {
        id: "459787-745",
        date: "Pobyt: 13.6.2023 - 17.6.2026",
        guests: "2 dospělí, 1 dítě",
        catering: "žádné",
        totalPrice: "7 200 Kč",
        checkIn: "13.6.2023 do 18:00",
        checkOut: "17.6.2026 do 10:00"
    },
    service:{
        parkingPrice: "Parkování: 200 Kč / noc",
        breakfast: "Snídaně: 150 Kč / noc",
        wellness: "Zdarma",
        wifi: "Zdarma na všech pokojích"
    },
    cancel:{
       note1: "Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována žádná částka.",
       note2: "Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám účtována částka za první noc pobytu."
    }
}



export const BookingSummary = () => {
    return (
      <div className="summary">
        <h2>{data.title}</h2>
        <Header data = {data}/>
        <Reservation data = {data}/>
        <Service data = {data}/>
        <Cancel data = {data}/>
      </div>
    );
  };