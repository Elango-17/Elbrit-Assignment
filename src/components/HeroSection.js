import React from "react";
import { FaCapsules, FaWeight, FaAppleAlt } from "react-icons/fa";
import probioticImage from "../assets/images/probiotics.png";
import Features from "./Features";

function HeroSection() {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: "rgba(226, 245, 251, 1)" }}
    >
      <h1
        className="text-center text-7xl font-bold mb-0 font-poppins"
        style={{ color: "rgba(0, 53, 105, 1)" }}
      >
        Essential Vitamins
      </h1>

      <div className="container py-10 mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-md text-left">
          <p className="text-lg  mb-2" style={{ color: "rgba(23, 65, 79, 1)" }}>
            Online Medical Supplies
          </p>

          <p className="text-2xl mb-2" style={{ color: "rgba(23, 65, 79, 1)" }}>
            Get Your Vitamins & Minerals
          </p>
          <button
            className="text-white px-7 py-3 my-5 rounded-full shadow-lg"
            style={{ backgroundColor: "rgba(23, 65, 79, 1)" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "rgb(2, 155, 215)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(23, 65, 79, 1)")
            }
          >
            EXPLORE
          </button>
        </div>

        {/* Center Content (Image) */}
        <div className="relative">
          {/* <div className="absolute inset-0 bg-blue-900  transform scale-90 -z-1"></div> */}
          <img
            src={probioticImage}
            alt="Probiotic Bottle"
            className="relative w-auto lg:w-96 -mz-1"
          />
        </div>

        {/* Right Content (Features) */}
        <div className="text-blue-900 space-y-9 mt-5">
          {/* Vitamins */}
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{ backgroundColor: "rgba(23, 65, 79, 1)" }}
            >
              <FaCapsules className="text-white text-2xl" />
            </div>
            <div>
              <h3
                className="font-bold text-xl"
                style={{ color: "rgba(23, 65, 79, 1)" }}
              >
                Vitamins
              </h3>
              <p className="text-sm" style={{ color: "rgba(23, 65, 79, 1)" }}>
                Increased vitamins and minerals in your diet
              </p>
            </div>
          </div>

          {/* Weight Loss */}
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{ backgroundColor: "rgba(23, 65, 79, 1)" }}
            >
              <FaWeight className="text-white text-2xl" />
            </div>
            <div>
              <h3
                className="font-bold text-xl"
                style={{ color: "rgba(23, 65, 79, 1)" }}
              >
                Weight Loss
              </h3>
              <p className="text-sm" style={{ color: "rgba(23, 65, 79, 1)" }}>
                Find scientifically proven solutions
              </p>
            </div>
          </div>

          {/* Functional Foods */}
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{ backgroundColor: "rgba(23, 65, 79, 1)" }}
            >
              <FaAppleAlt className="text-white text-2xl" />
            </div>
            <div>
              <h3
                className="font-bold text-xl"
                style={{ color: "rgba(23, 65, 79, 1)" }}
              >
                Functional Foods
              </h3>
              <p className="text-sm" style={{ color: "rgba(23, 65, 79, 1)" }}>
                From protein powders to baby formula
              </p>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
}

export default HeroSection;
