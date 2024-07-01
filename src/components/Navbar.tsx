"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<
    "theater" | "jkt48points" | "shop" | null
  >(null);

  const handleDropdown = (menu: "theater" | "jkt48points" | "shop") => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  console.log(openDropdown);

  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="hidden lg:block">
        <div className="container">
          <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
            <Link href="#" passHref>
              <button className="navbar__link relative flex items-center">
                NEWS
              </button>
            </Link>
            <Link href="#" passHref>
              <button className="navbar__link relative flex items-center">
                SCHEDULE
              </button>
            </Link>
            <Link href="#" passHref>
              <button className="navbar__link relative flex items-center">
                MEMBER
              </button>
            </Link>
            <div className="relative">
              <button
                className="navbar__link flex items-center"
                onClick={() => handleDropdown("theater")}
              >
                THEATER
                <RiArrowDropDownLine className="mr-1" />
              </button>
              {openDropdown === "theater" && (
                <div className="left-0 mt-2 bg-white shadow-lg rounded absolute z-50">
                  {/* ketika child position absolute maka wajib parent nya adalah relative
                    dan tidak bisa  */}
                  <Link href="#" passHref>
                    <span className="dropdown__link">
                      Apa itu Theater JKT48?
                    </span>
                  </Link>
                  <Link href="#" passHref>
                    <span className="dropdown__link">
                      Theater Virtual Tour 360°
                    </span>
                  </Link>
                  <Link href="#" passHref>
                    <span className="dropdown__link">
                      Tata Cara Pembelian Ticket
                    </span>
                  </Link>
                  <Link href="#" passHref>
                    <span className="dropdown__link">
                      Jadwal Pertunjukan + Pembelian Tiket
                    </span>
                  </Link>
                  <Link href="#" passHref>
                    <span className="dropdown__link">
                      Jadwal Event + Pembelian Ticket
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="navbar__link relative flex items-center "
                onClick={() => handleDropdown("jkt48points")}
              >
                JKT48 POINTS
                <RiArrowDropDownLine className="mr-1" />
              </button>
              {openDropdown === "jkt48points" && (
                <div className="left-0 mt-2 bg-white shadow-lg rounded absolute z-50">
                  <Link href="#" passHref>
                    <span className="dropdown__link">
                      Cara Beli & Pakai JKT48 Points
                    </span>
                  </Link>
                  <Link href="#" passHref>
                    <span className="dropdown__link">Beli JKT48 Points</span>
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="navbar__link relative flex items-center"
                onClick={() => handleDropdown("shop")}
              >
                SHOP
                <RiArrowDropDownLine className="mr-1" />
              </button>
              {openDropdown === "shop" && (
                <div className="left-0 mt-2 bg-white shadow-lg rounded absolute z-50">
                  <Link href="#" passHref>
                    <span className="dropdown__link">JKT48 Web Shop</span>
                  </Link>
                  <Link href="#" passHref>
                    <span className="dropdown__link">
                      JKT48 Shop at Tokopedia
                    </span>
                  </Link>
                  <Link href="#" passHref>
                    <span className="dropdown__link">JKT48 Shop at Shopee</span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="#" passHref>
              <button className="navbar__link relative flex items-center">
                FAN CLUB
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
