import { useTranslations } from "next-intl";
import Image from "next/image";
import Navbar from "./../ui/Navbar/Navbar";
import HeaderSlider from "../ui/HeaderSlider/HeaderSlider";
import Sharm from "../../assets/sharm.jpg";
import Dubai from "../../assets/dubai.jpg";
import Istanbul from "../../assets/istanbul.jpg";
import Antalia from "../../assets/antalia.jpg";
import Offers from "../ui/Offers/Offers";
import Istanbul2 from "@/assets/istanbul2.jpg";
import Support from "../ui/Support/Support";
import Destination from "../ui/Destination/Destination";
import Destination1 from "@/assets/destination1.jpg";
import Countries from "../ui/Countries/Countries";
import Dubai2 from "@/assets/dubai2.jpg";
import Locations from "../ui/Locations/Locations";
import Antalia2 from "@/assets/antalia2.jpg";
import Paris from "@/assets/paris.jpg";
import AirPlane from "@/assets/airplane.jpg";
import Antalya from "@/assets/antalya.jpg";
import Sharm2 from "@/assets/sharm2.jpg";
import Istanbul3 from "@/assets/istanbul3.jpg";
import Dubai3 from "@/assets/dubai3.jpg";
import Antalya2 from "@/assets/Antalya2.jpg";
import Sharm3 from "@/assets/sharm3.jpg";
import USA from "@/assets/USA.jpg";
import Canada from "@/assets/canada.jpg";
import Contacts from "../ui/Contacts/Contacts";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationPin } from "react-icons/fa6";
import Map from "../ui/Map/Map";
import Reservation from "../ui/Reservation/Reservation";
import Footer from "../ui/Footer/Footer";
import CarouselCard from "../ui/OffersSlider/OffersSlider";
import CardSlider from "../ui/OffersSlider/OffersSlider";

export default function Home() {
  const t = useTranslations("Index");
  const navLink = {
    home: t("navLink.home"),
    about: t("navLink.about"),
    tours: t("navLink.tours"),
    contacts: t("navLink.contacts"),
  };
  const sliderData = [
    {
      title: t("header1.title"),
      name: t("header1.name"),
      go_button: t("header1.go_button"),
      population_name: t("header1.population_name"),
      population_num: t("header1.population_num"),
      square_name: t("header1.square_name"),
      square_num: t("header1.square_num"),
      cost_name: t("header1.cost_name"),
      cost_num: t("header1.cost_num"),
      learn_more: t("header1.learn_more"),
      img: Istanbul,
    },
    {
      title: t("header2.title"),
      name: t("header2.name"),
      go_button: t("header2.go_button"),
      population_name: t("header2.population_name"),
      population_num: t("header2.population_num"),
      square_name: t("header2.square_name"),
      square_num: t("header2.square_num"),
      cost_name: t("header2.cost_name"),
      cost_num: t("header2.cost_num"),
      learn_more: t("header2.learn_more"),
      img: Antalia,
    },
    {
      title: t("header3.title"),
      name: t("header3.name"),
      go_button: t("header3.go_button"),
      population_name: t("header3.population_name"),
      population_num: t("header3.population_num"),
      square_name: t("header3.square_name"),
      square_num: t("header3.square_num"),
      cost_name: t("header3.cost_name"),
      cost_num: t("header3.cost_num"),
      learn_more: t("header3.learn_more"),
      img: Dubai,
    },
    {
      title: t("header4.title"),
      name: t("header4.name"),
      go_button: t("header4.go_button"),
      population_name: t("header4.population_name"),
      population_num: t("header4.population_num"),
      square_name: t("header4.square_name"),
      square_num: t("header4.square_num"),
      cost_name: t("header4.cost_name"),
      cost_num: t("header4.cost_num"),
      learn_more: t("header4.learn_more"),
      img: Sharm,
    },
  ];
  const OffersData = [
    {
      img: Istanbul2,
      city: t("offers1.city"),
      price: t("offers1.price"),
      subtitle1: t("offers1.subtitle1"),
      subtitle2: t("offers1.subtitle2"),
      desc_title: t("offers1.desc_title"),
      desc1: t("offers1.desc1"),
      desc2: t("offers1.desc2"),
      desc3: t("offers1.desc3"),
      button: t("offers1.button"),
    },
    {
      img: Dubai,
      city: t("offers2.city"),
      price: t("offers2.price"),
      subtitle1: t("offers2.subtitle1"),
      subtitle2: t("offers2.subtitle2"),
      desc_title: t("offers2.desc_title"),
      desc1: t("offers2.desc1"),
      desc2: t("offers2.desc2"),
      desc3: t("offers2.desc3"),
      button: t("offers2.button"),
    },
    {
      img: Antalya2,
      city: t("offers3.city"),
      price: t("offers3.price"),
      subtitle1: t("offers3.subtitle1"),
      subtitle2: t("offers3.subtitle2"),
      desc_title: t("offers3.desc_title"),
      desc1: t("offers3.desc1"),
      desc2: t("offers3.desc2"),
      desc3: t("offers3.desc3"),
      button: t("offers3.button"),
    },
    {
      img: Sharm3,
      city: t("offers3.city"),
      price: t("offers3.price"),
      subtitle1: t("offers3.subtitle1"),
      subtitle2: t("offers3.subtitle2"),
      desc_title: t("offers3.desc_title"),
      desc1: t("offers3.desc1"),
      desc2: t("offers3.desc2"),
      desc3: t("offers3.desc3"),
      button: t("offers3.button")
    },
    {
      img: USA,
      city: t("offers3.city"),
      price: t("offers3.price"),
      subtitle1: t("offers3.subtitle1"),
      subtitle2: t("offers3.subtitle2"),
      desc_title: t("offers3.desc_title"),
      desc1: t("offers3.desc1"),
      desc2: t("offers3.desc2"),
      desc3: t("offers3.desc3"),
      button: t("offers3.button")
    },
    {
      img: Canada,
      city: t("offers3.city"),
      price: t("offers3.price"),
      subtitle1: t("offers3.subtitle1"),
      subtitle2: t("offers3.subtitle2"),
      desc_title: t("offers3.desc_title"),
      desc1: t("offers3.desc1"),
      desc2: t("offers3.desc2"),
      desc3: t("offers3.desc3"),
      button: t("offers3.button")
    },
  ];
  const DestinationData = [
    {
      img: Destination1,
      title: t("desti1.title"),
      subtitle: t("desti1.subtitle"),
      button: t("desti1.button"),
      desc: t("desti1.desc"),
    },
    {
      img: AirPlane,
      title: t("desti2.title"),
      subtitle: t("desti2.subtitle"),
      button: t("desti2.button"),
      desc: t("desti2.desc"),
    },
  ];
  const CountriesData = [
    {
      img: Dubai,
      title: t("country1.title"),
      subtitle: t("country1.subtitle"),
      button: t("country1.button"),
      desc: t("country1.desc"),
      people: t("country1.people"),
      price: t("country1.price"),
      square: t("country1.square"),
      footer: t("country1.footer"),
    },
    {
      img: Antalya,
      title: t("country2.title"),
      subtitle: t("country2.subtitle"),
      button: t("country2.button"),
      desc: t("country2.desc"),
      people: t("country2.people"),
      price: t("country2.price"),
      square: t("country2.square"),
      footer: t("country2.footer"),
    },
    {
      img: Sharm2,
      title: t("country3.title"),
      subtitle: t("country3.subtitle"),
      button: t("country3.button"),
      desc: t("country3.desc"),
      people: t("country3.people"),
      price: t("country3.price"),
      square: t("country3.square"),
      footer: t("country3.footer"),
    },
    {
      img: Istanbul3,
      title: t("country4.title"),
      subtitle: t("country4.subtitle"),
      button: t("country4.button"),
      desc: t("country4.desc"),
      people: t("country4.people"),
      price: t("country4.price"),
      square: t("country4.square"),
      footer: t("country4.footer"),
    },
  ];
  const LocationsData = [
    {
      id: 1,
      img: Dubai2,
      name: t("city1.name"),
      population: t("city1.population"),
    },
    {
      id: 2,
      img: Antalia2,
      name: t("city2.name"),
      population: t("city2.population"),
    },
    {
      id: 3,
      img: Istanbul,
      name: t("city3.name"),
      population: t("city3.population"),
    },
    {
      id: 4,
      img: Sharm,
      name: t("city4.name"),
      population: t("city4.population"),
    },
    {
      id: 5,
      img: Paris,
      name: t("city5.name"),
      population: t("city5.population"),
    },
  ];
  const ContactsData = [
    {
      icon: <FaPhoneAlt size={24} />,
      title: t("contact1.title"),
      desc: t("contact1.desc"),
    },
    {
      icon: <IoMail size={24} />,
      title: t("contact2.title"),
      desc: t("contact2.desc"),
    },
    {
      icon: <FaLocationPin size={24} />,
      title: t("contact3.title"),
      desc: t("contact3.desc"),
    },
  ];
  const ReservationData = {
    title: t("reservation.title"),
    name: t("reservation.name"),
    phone: t("reservation.phone"),
    guests: t("reservation.guests"),
    date: t("reservation.date"),
    destination: t("reservation.destination"),
    visa: t("reservation.vise"),
    btn: t("reservation.btn"),
    country: t("reservation.country"),
    cities: [
      t("reservation.city1"),
      t("reservation.city2"),
      t("reservation.city3"),
      t("reservation.city4"),
      t("reservation.city5"),
      t("reservation.city6"),
      t("reservation.city7"),
    ],
    countries: [
      t("reservation.country1"),
      t("reservation.country2"),
      t("reservation.country3"),
      t("reservation.country4"),
      t("reservation.country5"),
      t("reservation.country6"),
      t("reservation.country7"),
      t("reservation.country8"),
    ],
  };
  const FooterData = {
    title: t("footer.title"),
    subtitle: t("footer.subtitle"),
    btn: t("footer.btn"),
    bottom: t("footer.bottom"),
  };
  return (
    <div>
      <Navbar navLinkItem={navLink} />
      <HeaderSlider data={sliderData} />
      <CardSlider
        OffersData={OffersData}
        Offers={{ title: t("offers.title"), subtitle: t("offers.subtitle") }}
      />
      <CardSlider
        OffersData={OffersData}
        Offers={{ title: t("offers.title"), subtitle: t("offers.subtitle") }}
      />
      <Support
        OffersData={OffersData}
        Offers={{ title: t("offers.title"), subtitle: t("offers.subtitle") }}
      /> 
      <Destination
        DestinationData={DestinationData}
        Destination={{
          title: t("destination.title"),
          subtitle: t("destination.subtitle"),
        }}
      />
      <Countries
        CountriesData={CountriesData}
        Countries={{
          title: t("countries.title"),
          subtitle: t("countries.subtitle"),
        }}
      />
      <Locations
        LocationsData={LocationsData}
        Locations={{
          title: t("locations.title"),
          subtitle: t("locations.subtitle"),
        }}
      />
      <Contacts
        ContactsData={ContactsData}
        Contacts={{
          title: t("contacts.title"),
          top: t("contacts.top"),
          btn: t("contacts.btn"),
        }}
      />
      <Map />
      <Reservation ReservationData={ReservationData} />
      <Footer FooterData={FooterData} />
    </div>
  );
}
