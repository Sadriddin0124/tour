import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface SliderType {
  title: string;
  name: string;
  go_button: string;
  population_name: string;
  population_num: string;
  square_name: string;
  square_num: string;
  cost_name: string;
  cost_num: string;
  learn_more: string;
  img: StaticImageData;
}

export interface OffersTypes {
  img: StaticImageData;
  city: string;
  price: string;
  subtitle1: string;
  subtitle2: string;
  desc_title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  button: string;
}

export interface DestinationType {
  title: string;
  subtitle: string;
  button: string;
  desc: string;
  img: StaticImageData;
}

export interface CountriesType {
  title: string;
  subtitle: string;
  button: string;
  desc: string;
  img: StaticImageData;
  footer: string;
  people: string;
  square: string;
  price: string;
}

export interface LocationsType {
  id: number;
  img: StaticImageData;
  name: string;
  population: string;
}

export interface ContactsType {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface ReservationType {
  title: string;
  name: string;
  phone: string;
  guests: string;
  date: string;
  destination: string;
  visa: string;
  btn: string;
  cities: string[];
  country: string;
  countries: string[];
}

export interface FooterType {
  title: string;
  subtitle: string;
  btn: string;
  bottom: string;
}
