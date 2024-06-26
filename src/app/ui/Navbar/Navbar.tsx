"use client";
import React, { useState, useTransition } from "react";
import Nav_logo from "../../../assets/nav__logo.png";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface NavLink {
  home: string;
  about: string;
  tours: string;
  contacts: string;
}
const Navbar = ({ navLinkItem }: { navLinkItem: NavLink }) => {
  const [bar, setBar] = useState<boolean>(false)
  const [navLink, setNavLink] = useState([
    {
      id: "home",
      title: (
        <h1 className="relative">
          <span className="absolute w-[50%] h-[2px] bg-white top-[-4px]"></span>
          {navLinkItem?.home}
        </h1>
      ),
    },
    { id: "about", title: navLinkItem?.about },
    { id: "tours", title: navLinkItem?.tours },
    { id: "contacts", title: navLinkItem?.contacts },
  ]);
  const [navRight, setNavRight] = useState([
    { value: "uz", title: "UZ" },
    { value: "en", title: "EN" },
    { value: "ru", title: "RU" },
    {
      value: "",
      title: (
        <div className="bg-violet-600 md:bg-white hover:bg-gray-500 p-[2px] rounded-sm text-white md:text-violet-600">
          <BiLogoTelegram size={14} />
        </div>
      ),
    },
    { value: "", title: <IoLogoInstagram size={20} className="text-violet-600 hover:text-gray-500 md:text-white" /> },
  ]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const SwitchLang = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };
  return (
    <nav className="sm:px-[50px] px-[10px] py-[5px] bg-violet-600 text-white flex w-[100%] justify-between items-center fixed z-50">
      <Image
        src={Nav_logo}
        alt="logo"
        width={60}
        height={60}
        className="sm:ml-[100px]"
      />
      <ul className="hidden lg:flex gap-[40px]">
        {navLink?.map((item, index) => {
          return (
            <li key={index} className="hover:text-[silver]">
              <Link href={"#" + item?.id}>{item?.title}</Link>
            </li>
          );
        })}
      </ul>
      <ul className="hidden lg:flex gap-[20px]">
        {navRight?.map((item, index) => {
          return (
            <li
              onClick={() => SwitchLang(item?.value)}
              key={index}
              className="hover:text-[silver]"
            >
              <Link href={item?.value}>{item?.title}</Link>
            </li>
          );
        })}
      </ul>
      <button className="lg:hidden">
        <FaBars className={bar ? "hidden" : "block"} size={24} onClick={()=>setBar(!bar)}/>
        <IoClose className={bar ? "block" : "hidden"}  size={28} onClick={()=>setBar(!bar)}/>
      </button>
      <aside className={`${bar ? "block" : "hidden"} w-[90%] min-h-[300px] bg-slate-100 fixed top-[70px] left-[5%] z-30 rounded-b-[23px]`}>
        <ul className="flex flex-col items-center text-black gap-[15px] p-[20px] justify-center">
          {navLink?.map((item, index) => {
            return (
              <li key={index} className="hover:text-[silver] border-b pb-[10px] w-[100%] text-center" onClick={()=>setBar(!bar)}>
                <Link href={"#" + item?.id}>{item?.title}</Link>
              </li>
            );
          })}
          {navRight?.map((item, index) => {
            return (
              <li
                onClick={() => SwitchLang(item?.value)}
                key={index}
                className="hover:text-[silver] pb-[10px] flex items-center justify-center border-b w-[100%] text-center"
              >
                <Link href={item?.value} onClick={()=>setBar(!bar)}>{item?.title}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
