import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="bg-darkPurple text-white w-full">
      <Container className="py-4 flex justify-between items-center">
        <div className="text-3xl text-brandOrange font-bold tracking-wide">
          CarWise
        </div>

        <nav className="hidden md:flex space-x-10 text-[16px] font-light">
          <a href="#" className="hover:text-brandOrange transition">
            Front
          </a>
          <a href="#" className="hover:text-brandOrange transition">
            Menu
          </a>
          <a href="#" className="hover:text-brandOrange transition">
            Order
          </a>
          <a href="#" className="hover:text-brandOrange transition">
            About Us
          </a>
          <a href="#" className="hover:text-brandOrange transition">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <button className="bg-brandOrange text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-opacity-90 transition">
            Get The App
          </button>
          <FaShoppingCart
            className="cursor-pointer hover:text-brandOrange transition"
            size={20}
          />
          <FaUser
            className="cursor-pointer hover:text-brandOrange transition"
            size={20}
          />
        </div>
      </Container>
    </header>
  );
}
