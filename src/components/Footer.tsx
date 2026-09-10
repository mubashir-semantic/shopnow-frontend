import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="bg-darkPurple text-white w-full">
      <Container className="pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="text-3xl text-brandOrange font-bold tracking-wide mb-2">
              CarWise
            </div>
            <p className="text-sm font-light text-gray-300 mb-8 max-w-sm leading-relaxed">
              Leverandør av maskiner og forbruksartikler til bedrifter som
              arbeider med Miljøsanering-og Asbestsanering.
            </p>
            <div className="flex flex-col space-y-3 text-sm font-light text-gray-300">
              <div className="flex items-center space-x-3">
                <FaEnvelope size={16} />
                <span>bildialog@yahoocmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt size={16} />
                <span>Bergen, Norway</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6">Pages</h3>
            <ul className="flex flex-col space-y-4 text-sm font-light text-gray-300">
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Front
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="flex flex-col space-y-4 text-sm font-light text-gray-300">
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Term of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition">
                  Career
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-light text-gray-400">
          <p>© 2022 CarWise | Powered by CarWise</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:text-brandOrange hover:border-brandOrange transition"
            >
              <FaFacebook size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:text-brandOrange hover:border-brandOrange transition"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
