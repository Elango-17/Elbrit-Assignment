import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer
      className="text-white py-8"
      style={{ backgroundColor: "rgba(23, 65, 79, 1)" }}
    >
      <div className="container mx-auto">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Phone Section */}
          <div>
            <div
              className="flex items-center justify-center md:justify-start gap-4 rounded-xl p-3"
              style={{ backgroundColor: "rgba(33, 93, 114, 1)" }}
            >
              <FaPhoneAlt className="text-xl" />
              <div>
                <p className="text-sm font-semibold">Phone Number</p>
                <p className="text-base">+974 3118 1843</p>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div>
            <div
              className="flex items-center justify-center md:justify-start gap-4 rounded-xl p-3"
              style={{ backgroundColor: "rgba(33, 93, 114, 1)" }}
            >
              <FaEnvelope className="text-xl" />
              <div>
                <p className="text-sm font-semibold">Email Address</p>
                <p className="text-base">Elbrithc@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <div
              className="flex items-center justify-center md:justify-start gap-4 rounded-xl p-3"
              style={{ backgroundColor: "rgba(33, 93, 114, 1)" }}
            >
              <FaMapMarkerAlt className="text-xl" />
              <div>
                <p className="text-sm font-semibold">Office Location</p>
                <p className="text-base">Ambassador Street, Zone 61</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start md:justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img src={logo} alt="Elbrit Logo" className="h-16 object-contain" />
            <p className="mt-5 text-sm text-center">
              <FaMapMarkerAlt className="inline-block mr-2" />
              Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
              400051
            </p>
          </div>

          {/* Description Section */}
          <div className="text-justify  md:flex-grow mx-20">
            <p>
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
